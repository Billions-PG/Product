const express = require('express');
const { Seller } = require('../database/database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from the server!');
});

app.get('/sellers', (req, res) => {
  Seller.find({}, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(results);
  });
});

module.exports = app;
