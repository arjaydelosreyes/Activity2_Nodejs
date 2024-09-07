const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { items, addItem, updateItem, deleteItem } = require('./data');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { items });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    const { name} = req.body;
    addItem(name, price, quantity, description );
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if (item) {
        res.render('edit', { item });
    } else {
        res.status(404).send('Item not found');
    }
});

app.post('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    updateItem(id, name, price, quantity, description);
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    deleteItem(id);
    res.redirect('/');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
