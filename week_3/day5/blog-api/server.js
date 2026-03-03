const express = require('express');
const app = express();

app.use(express.json());

let data = [];

// GET all posts
app.get('/posts', (req, res) => {
    res.json(data);
});

// GET post by ID
app.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = data.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'This ID does not exist' });
    }
});

// POST new post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    const id = data.length ? data[data.length - 1].id + 1 : 1;
    const post = { id, title, content };
    data.push(post);
    res.status(201).json(post);
});

// PUT update post
app.put('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;

    const post = data.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: 'This ID does not exist' });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    res.json(post);
});

// DELETE post
app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = data.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'This ID does not exist' });
    }

    const deleted = data.splice(index, 1); // remove the post
    res.json({ deleted: deleted[0], remainingPosts: data });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});