'use strict';

const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
    console.log('The server is now running on port' + PORT);
});

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('pages/index');
});

app.get('*', (req,res) => {
    res.send('I\'m sorry. You woke the sleeping error.');
});

app.post('/search', (req, res) => {
    const data = req.body;
    let url = 'https://www.googleapis.come/books/v1/volumes?q=+';
    req.body.param === 'title' ? url +=`intitle:${data.searchText}` : url += `inauthor:${data.searchText}`;
});
