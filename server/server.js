const express = require('express');
const path = require('path');
const cors = require('cors');
const { Seller } = require('../database/database');
const { client } = require('../db_postgres/connection.js');

const app = express();

app.use(cors());
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



app.get('/sellers', async (req, res) => {
  var responseData = [];
  client.query('SELECT * FROM sellers')
    .then( (data) => {
      console.log('response from sellers: ', data);
      responseData = data.rows;
      res.status(200).send(data);
    })
    .catch( (err) => {
      console.log('error fetching all sellers: ', err);
      res.status(400).send(err);
    });
});

/*  --- Legacy ---
app.get('/sellers/:prodId', async (req, res) => {
  console.log("hit sellersID endpoint: ", req.params.prodId);
  const seller = await Seller.findOne({ 'products.id': req.params.prodId });
  if (seller) res.status(200).send(seller);
  else res.status(404).send('No products with given ID');
});
*/

module.exports = app;
