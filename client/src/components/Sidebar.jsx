import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ seller }) => (
  <div>
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
        <span>{seller.products[0].name}</span>
        <div>
          <span>
            $
            {seller.products[0].price}
          </span>
          {
            seller.products[0].stock
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
          seller.products[0].sizes
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
          <span>{seller.products[0].description}</span>
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
};

export default Sidebar;
