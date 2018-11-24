'use strict';

require('dotenv').config();
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/',(req,res) => {
    res.send('This is the home route, Alyssa.');
});

app.listen(PORT, () => {
    console.log('The server is now running on port' + PORT);
});