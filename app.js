const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

const Genre = require('./models/genre');
const Book = require('./models/book');

//Connect Mongodb
mongoose.connect('mongodb://localhost/bookshop');
const db = mongoose.connection;

// Default Route
app.get('/', (req, res) => {
  res.send('Please use /api/books or /api/genres');
});


// Get all Genres
app.get('/api/genres', (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      throw error;
    }
    res.json(genres);
  })
});

// Add Genres
app.post('/api/genre', (req, res) => {
  const genre = req.body;
  Genre.addGenre(genre, (err, genre) => {
    if (err) {
      throw error;
    }
    res.json(genre);
  })
});

// Put Genres
app.put('/api/genre/:_id', (req, res) => {
  const id = req.params._id;
  const genre = req.body;
  Genre.updateGenre(id, genre, {}, (err, genre) => {
    if (err) {
      throw error;
    }
    res.json(genre);
  })
});

// Delete Genre
app.delete('/api/genre/:_id', (req, res) => {
  const id = req.params._id;
  Genre.deleteGenre(id, (err, genre) => {
    if (err) {
      throw error;
    }
    res.json(genre);
  })
});

// Get all Books
app.get('/api/books', (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw error;
    }
    res.json(books);
  })
});

// Get Book By Id
app.get('/api/book/:_id', (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw error;
    }
    res.json(book);
  })
});

// Add Book
app.post('/api/book', (req, res) => {
  const book = req.body;
  Book.addBook(book, (err, book) => {
    if (err) {
      throw error;
    }
    res.json(book);
  })
});


//Update Books
app.put('/api/book/:_id', (req, res) => {
  const id = req.params._id;
  const book = req.body;
  Book.updateBook(id, book, {}, (err, book) => {
    if (err) {
      throw error;
    }
    res.json(book);
  })
});

// Delete Book
app.delete('/api/book/:_id', (req, res) => {
  const id = req.params._id;
  Book.deleteBook(id, (err, book) => {
    if (err) {
      throw error;
    }
    res.json(book);
  })
});

app.listen(3000);
console.log('Running on port 3000');