const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => { res.send('Hello World!'); });

app.get('/about', (req, res) => { res.send('About page'); });

app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = parseInt(a) + parseInt(b);
    res.json({ 'The result is ': result});
});

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
});