'use strict';

const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
    console.log('The server is now running on port' + PORT);
});

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('pages/index');
});

app.get('*', (req,res) => {
    res.send('I\'m sorry. You woke the sleeping error.');
});