const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/divyansh', (req, res) => {
    res.send('Hello Divyansh');
})

app.get('/user/:name', (req, res) => {
    const n = req.params.name;
    const logText = `Hello ${n}`;
    console.log(logText);
    res.send(logText);
})

app.listen(port);