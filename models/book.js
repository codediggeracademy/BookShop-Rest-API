const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: Number
  },
  image_url: {
    type: String
  },
  imdb_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Book = module.exports = mongoose.model('Book', bookSchema);

//Get All Books
module.exports.getBooks =  (callback, limit) => {
  Book.find(callback).limit(limit);
};

//Get Book by Id
module.exports.getBookById  = (id, callback) => {
  Book.findById(id,  callback);
};

//Add Book
module.exports.addBook = (book, callback) => {
  Book.create(book, callback);
};

//Update Book
module.exports.updateBook = (id, book, options, callback) => {
  const query = {_id: id};
  const update = { title, genre, description, author, publisher, pages, image_url, imdb_url } = book;
  Book.findOneAndUpdate(query, update, options, callback);
};

//Delete Book
module.exports.deleteBook = (id, callback) => {
  const query = {_id: id};
  Book.remove(query, callback);
};
