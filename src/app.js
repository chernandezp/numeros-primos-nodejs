const express = require('express')
const {getPrimos} = require("./controllers/primos.controller")


const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use('/v1', express.Router().get('/primos/:numero', getPrimos));

module.exports = app;
