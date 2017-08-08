const express = require('express');
const port = 8080;
const host = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello, My name is Oded.');
});

app.listen(port, host);
console.log(`Running on http://${host}:/${port}`);
console.log('Hello, My Name is Oded.');