const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sellers', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected'));

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  sales: Number,
  products: [
    {
      id: {
        type: Number,
        unqiue: true,
      },
      name: {
        type: String,
        unique: true,
      },
      description: String,
      price: Number,
      stock: Number,
      sizes: Boolean,
      rating: Number,
    },
  ],
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
