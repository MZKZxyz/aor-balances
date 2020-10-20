const express = require('express');
const cors = require('cors');
const getBalancesController = require('../controller/getBalances');
const saveBalancesController = require('../controller/saveBalances');
const addUserController = require('../controller/addUser');

const router = express.Router();

router.use(cors());
router.use(express.static('public'));

// this will let us get the data from a POST
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the AoR Balances API!' });   
});

router.post('/addUser', addUserController.addUser);

router.get('/getBalances/:address/', getBalancesController.getBalances);

router.get('/saveBalances/:address/', saveBalancesController.saveBalances);

module.exports = router;
