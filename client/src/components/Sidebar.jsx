import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ seller, product }) => (
  <div id="product-sidebar">
    {/* Seller Name & Sales */}
    <span>{seller.name}</span>
    <div>
      <span>
        {seller.sales}
        {' '}
        sales
      </span>
      <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </div>

    {/* Product Name, Price & Stock */}
    {
      seller.products !== undefined
      && (
      <div>
        <span>{product.name}</span>
        <div>
          <span>
            $
            {product.price}
          </span>
          {
            product.stock
              ? <span>&#10003; In stock</span>
              : <span>Out of stock</span>
          }
        </div>

        {/* Quantity &Sizes */}
        <div>
          <div>
            <span>Quantity</span>
            <select name="quantity" id="product-quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        {
          product.sizes
            ? (
              <div>
                <div>
                  <span>Quantity</span>
                  <select name="quantity" id="product-quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            )
            : <></>
        }

        {/* Buttons */}
        <div>
          <button type="button">Buy it now</button>
          <button type="button">Add to cart</button>
        </div>

        {/* Description */}
        <div>
          <span>Description</span>
          <span>{product.description}</span>
        </div>

      </div>
      )
    }
  </div>
);

Sidebar.propTypes = {
  seller: PropTypes.shape({
    name: PropTypes.string,
    sales: PropTypes.number,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      stock: PropTypes.number,
      sizes: PropTypes.bool,
      rating: PropTypes.number,
    })),
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.number,
    sizes: PropTypes.bool,
    rating: PropTypes.number,
  }).isRequired,
};

export default Sidebar;
