const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    dbUrl: process.env.DB_CONNECT,
    port: process.env.PORT || 8080,
    tokenSecret: process.env.TOKEN_SECRET,
    ethNetwork: process.env.ETH_NETWORK,
};