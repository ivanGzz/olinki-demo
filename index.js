'use strict';

const express = require('express');

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello Olinki demo');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);