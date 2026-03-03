const express = require('express')

const app = express();

app.use(express.json());

let books= [];

// GET all posts
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET post by ID
app.get('/api/books/:bookId', (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(p => p.id === id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// POST new post
app.post('/api/books', (req, res) => {
    const {title, author,publishedYear} = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const book = { id, title, author,publishedYear};
    books.push(book);
    res.status(201).json(book);
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})