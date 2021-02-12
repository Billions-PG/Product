const express = require('express');
const path = require('path');
const cors = require('cors');
const { Seller } = require('../database/database');
const { queryAll, queryOne } = require('../db_postgres/queries.js');

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

/* --- Legacy ---
app.get('/sellers', (req, res) => {
  Seller.find({}, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(results);
  });
});
*/

app.get('/sellers', (req, res) => {
  queryAll(res);
});


/*  --- Legacy ---
app.get('/sellers/:prodId', async (req, res) => {
  console.log("hit sellersID endpoint: ", req.params.prodId);
  const seller = await Seller.findOne({ 'products.id': req.params.prodId });
  if (seller) res.status(200).send(seller);
  else res.status(404).send('No products with given ID');
});
*/

app.get('/sellers/:prodId', cors(), (req, res) => {
  queryOne(req.params.prodId, res);
});

module.exports = app;
