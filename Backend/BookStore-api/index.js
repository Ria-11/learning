const express = require('express');

const app = express();
const PORT = 8000;

// consider it in memory datbase{ violating statelessness rule}
app.use(express.json());
const books = [

    {
        id: 1,
        title: "The Great Gatsby",
        author : "F. Scott Fitzgerald"},
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author : "Harper Lee"} ,
    {
        id : 3,
        title: "1984",
        author : "George Orwell"
    }
];     


app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);


    if (isNaN(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID' });
    }

    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }
    const newBook = {
        id: books.length + 1
        , title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    if (isNaN(bookId)) {
        return res.status(400).json({ message: 'Invalid book ID' });
    }
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.json({ message: 'Book deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}
);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


