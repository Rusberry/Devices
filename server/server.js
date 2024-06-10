const express = require('express');
const bodyParser = require('body-parser');
const queryDatabase = require('../db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/employees', async (req, res) => {
    try {
        const result = await queryDatabase('SELECT * FROM employees');
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
