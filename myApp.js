let express = require('express');
let app = express();
require('dotenv').config()

// console.log("Hello World")

app.get('/json', (req, res) => {
    if (process.env.VAR_NAME === "allcaps") {
        res.json = 'Hello World'.toUpperCase();
    } else {
        res.json = 'Hello World';
    }
  });

































 module.exports = app;
