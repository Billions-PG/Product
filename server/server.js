const express = require('express');
const { Seller } = require('../database/database');

const app = express();

app.use(express.json());

app.get('/sellers', (req, res) => {
  Seller.find({}, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(results);
  });
});

app.get('/sellers/:prodId', async (req, res) => {
  const seller = await Seller.findOne({ 'products.id': req.params.prodId });
  if (seller) res.status(200).send(seller);
  else res.status(404).send('No products with given ID');
});

module.exports = app;
