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

// app.get('/', function(req,res){
//     const books = [
//         { title: 'The Dark Net', author: 'Jamie Bartlett'},
//         { title: 'The Rules Do Not Apply', author: 'Ariel Levy' }
//     ];
//     const message = 'Here are some books Alyssa has read recently.';

//     res.render('pages/index',{
//         books: books,
//         message: message
//     });
// });