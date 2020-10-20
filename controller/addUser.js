const User = require('../Models/User')
const { addressValidation } = require('../Validation/addressValidation');



async function addUser(req, res) {

    try {
    
        // Look for an existing user record from address
        // if the user doesn't exist, create one
        let user = await User.findOne({address: req.body.address});
        if(!user) {
            const {error} = addressValidation(req.body); // validate the address format
            if(error) return res.status(400).send(error.details[0].message);    
            
            const user = new User({
                address: req.body.address
            });
    
            try {
                await user.save();
                console.log(`Added new user with address: ${user.address}`)
                res.status(200).send();
            } catch(err) {
                res.status(400).send(err);
            }
        } else {
            res.status(400).send(`User with address ${req.body.address} already exists.`)
        }

    } catch(err) {
        res.status(400).send(err);
        console.log(err)
    }
}

module.exports = {addUser};