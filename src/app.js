const express = require('express')
const {getPrimos} = require("./controllers/primos.controller")


const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new Error(404, 'Not found'));
});

app.use('/v1', express.Router().get('/numerosPrimosInvertidos/:numero', getPrimos));

module.exports = app;
