const Book = require('../models/book.js');

exports.getAllBooks = function(req, res)  {

res.json(BOOKS);

};


exports.getBookById = function(req, res) {
const bookId = parseInt(req.params.id);


    if (isNaN(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID' });
    }

    const book = BOOKS.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }

}
exports.createBook = function(req, res)  {

console.log("BODY:", req.body); // debug

    const { title, author } = req.body || {};

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }

    const newBook = {
        id: BOOKS.length + 1,
        title,
        author
    };

    BOOKS.push(newBook);

    res.status(201).json(newBook);

}

exports.deleteBook = function(req, res)  {
    const bookId = parseInt(req.params.id);
    if (isNaN(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID' });
    }
    const bookIndex = BOOKS.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
        BOOKS.splice(bookIndex, 1);
        res.json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}