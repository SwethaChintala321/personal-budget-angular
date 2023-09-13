const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is my About page');
});

app.get('/contact', (req, res) => {
    res.send('Contact');
});

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
});
