'use strict';

const express = require('express');
const superagent = require('superagent');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('pages/index');
});

app.post('/search', (req, res) => {
    const data = req.body;
    console.log(req.body);
    let url = 'https://www.googleapis.com/books/v1/volumes?q=+';
    req.body.param === 'title' ? url +=`intitle:${data.searchText}` : url += `inauthor:${data.searchText}`;
    console.log(url)
    superagent.get(url)
        .then(book => {
            let booksArr = book.body.items.map(val => {
                return new Book(val);
            });
            console.log(booksArr)
            res.render('pages/results', { books: booksArr});
            
        })
        .catch((error => {
            res.status(400).send('hello error');
        }));
});

app.get('*', (req,res) => {
    res.status(404).send({status: res.status, message: 'What happened?'});
});

app.listen(PORT, () => {
    console.log('The server is now running on port' + PORT);
});

const Book = function(book){
    this.title = book.volumeInfo.title;
    this.author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'none';
};