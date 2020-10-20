const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        min: 42,
        max: 42
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    assets: {
        'coin-0': {
            name: {type: String, default: 'Ether'},
            contract: {type: String},
            decimals: {type: Number, default: 18},
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'coin-1': {
            name: {type: String, default: 'Enjin'},
            contract: {type: String, default: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c'},
            decimals: {type: Number, default: 18},
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'coin-2': {
            name: {type: String, default: 'COIN'},
            contract: {type: String, default: '0x87b008e57f640d94ee44fd893f0323af933f9195'},
            decimals: {type: Number, default: 18},
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'coin-3': {
            name: {type: String, default: 'Abyss'},
            contract: {type: String, default: '0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6'},
            decimals: {type: Number, default: 18},
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'coin-4': {
            name: {type: String, default: 'Zenzo'},
            contract: {type: String},
            decimals: {type: Number, default: 18},
            callType: {type: String, default: 'api'},
            userBalance: {type: Number, default: 0},
        },
        'token-1': { 
            name: {type: String, default: "Pepe Coin"}, 
            id:  {type: String, default: "0x580000000000108e000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-2': { 
            name: {type: String, default: "Nhub"}, 
            id:  {type: String, default: "0x50000000000011cf000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-3': { 
            name: {type: String, default: "Rogue Mechs"}, 
            id:  {type: String, default: "0x780000000000022f000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-4': { 
            name: {type: String, default: "Wasteland"}, 
            id:  {type: String, default: "0x7800000000000232000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-5': { 
            name: {type: String, default: "Bounty"}, 
            id:  {type: String, default: "0x7800000000000233000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-6': { 
            name: {type: String, default: "Runner"}, 
            id:  {type: String, default: "0x7800000000000235000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-7': { 
            name: {type: String, default: "Ghost"}, 
            id:  {type: String, default: "0x7800000000000234000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-8': { 
            name: {type: String, default: "Crusade"}, 
            id:  {type: String, default: "0x7800000000000236000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-9': { 
            name: {type: String, default: "Revenge"}, 
            id:  {type: String, default: "0x7800000000000237000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-10': { 
            name: {type: String, default: "Devastation"}, 
            id:  {type: String, default: "0x7800000000000238000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-11': { 
            name: {type: String, default: "Lastlight"}, 
            id:  {type: String, default: "0x7800000000000239000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-12': { 
            name: {type: String, default: "Origin"}, 
            id:  {type: String, default: "0x780000000000023a000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-13': { 
            name: {type: String, default: "Rustbits"}, 
            id:  {type: String, default: "0x780000000000022e000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-14': { 
            name: {type: String, default: "Ankh Artifact"}, 
            id:  {type: String, default: "0x1800000000000cb1000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
        'token-15': { 
            name: {type: String, default: "Age of Rust MFT"}, 
            id:  {type: String, default: "0x6000000000000120000000000000000000000000000000000000000000000000"}, 
            callType: {type: String, default: 'web3'},
            userBalance: {type: Number, default: 0},
        },
    }
})

module.exports = mongoose.model('User', userSchema);