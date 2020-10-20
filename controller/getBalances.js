// const User = require('../Models/User')
const { ethNetwork } = require('../config');
const Web3 = require("web3");
const tokens = require('../DB/tokens');
const tokenArray = require('../DB/tokenArray');
const coins = require('../DB/coins');
const coinArray = require('../DB/coinArray');
const ERC1155 = require('../ABI/ERC1155');
const ERC20 = require('../ABI/ERC20')
const ENJIN_ERC1155_contractAddress = "0xfaaFDc07907ff5120a76b34b731b278c38d6043C"; // Mainnet
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
const deployedNetwork = '1' //Mainnet
const EnjinAssetContract = new web3.eth.Contract(
    ERC1155.abi,
    deployedNetwork && ENJIN_ERC1155_contractAddress,
);

async function getBalances(req, res) {
   
    var userBalances = {};

    try {
        //search for user in the db
        // var user = await User.findOne({address: req.params.address});
        
        //check here to make sure input is an address
        // if(!user) {
        //     return res.status(400).send(`User with address ${req.params.address} does not exist.`);    
        // }

        //if user exists, then begin syncing token balances
        const ethBal = web3.utils.fromWei(web3.utils.toBN(await web3.eth.getBalance(req.params.address)))
        // user.assets['coin-0'].userBalance = ethBal; 
        userBalances['ETH'] = Number(ethBal);
        // console.log(`Ether: ${ethBal}`);

        for (i = 0; i < coinArray.length; i++) {
            const CoinContract = new web3.eth.Contract(
                ERC20.abi,
                deployedNetwork && coins[coinArray[i]].contract,
            );
            const bal = await CoinContract.methods.balanceOf(req.params.address).call();
            const decimals = await CoinContract.methods.decimals().call();
            // user.assets[coinArray[i]].userBalance = bal/(10**decimals); 
            userBalances[coins[coinArray[i]].name] = bal/(10**decimals);
            // console.log(`${coins[coin].name}: ${bal/(10**decimals)}`)
        }

        for (i = 0; i < tokenArray.length; i++) {

            const bal = await EnjinAssetContract.methods.balanceOf(req.params.address,tokens[tokenArray[i]].id).call();
            userBalances[tokens[tokenArray[i]].id.substr(2,16)] = Number(bal);
            // user.assets[tokenArray[i]].userBalance = Number(bal); 
            // console.log(`${tokens[token].name}: ${userBalances[tokens[token].name]}`);
        }
        // user.lastUpdated = Date.now();

        // await user.save();
        console.log(userBalances)
        res.status(200).send(userBalances);

    } catch(err) {
        console.log(err)
        res.status(400).send(err);
    }
}

module.exports = {getBalances};