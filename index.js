const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')


app.get('/', (req, res) => {
     res.send('News API is running')
})


app.get('/news-categories', (req, res) => {
    res.send(categories)
})


app.listen(port, () => {
    console.log('Dragon News Server is running on Port', port);
})