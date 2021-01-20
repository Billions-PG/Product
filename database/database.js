const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/etsy', { useNewUrlParser: true, useUnifiedTopology: true });

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
      images: Array,
      description: String,
      price: String,
      stock: Number,
      sizes: Boolean,
      rating: Number,
    },
  ],
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = {
  Seller, db: mongoose,
};
