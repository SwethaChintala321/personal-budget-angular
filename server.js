const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public1'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Groceries',
        budget: 90
    },
    {
        title: 'College',
        budget: 200
    },
    {
        title: 'Movies',
        budget: 30
    },
    {
        title: 'Aesthetics',
        budget: 40
    },
    {
        title: 'Travel',
        budget: 50
    },
    {
        title: 'Gadgets',
        budget: 100
    },
    {
        title: 'Trash',
        budget: 10
    },
    {
        title: 'Maid',
        budget: 50
    },
    {
        Title: 'Miscellaneous',
        budget: 10
    }
]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});