const express = require('express');
const path=require('path');
const app = express();


const post = require('./server/routes/post');

app.listen(4600, (req, res) => {
    console.log('Running');
});

module.exports = app;  