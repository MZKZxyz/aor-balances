const express = require('express');
const router = require('./routes/');
const { dbUrl, port } = require('./config');
const mongoose = require('mongoose');
// const session = require('./middleware/session');

//Connect to DB
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Connected to DB')
);

const app = express();

// app.use(session);
app.use(router);

// var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`AOR Balances Server listening on port ${port}`));
