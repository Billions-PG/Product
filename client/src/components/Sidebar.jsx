import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import styles from '../styles.module.css';

const Sidebar = ({ seller, product }) => (
  <div className={`col-sm ${styles.sidebar}`}>
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
              ? <span data-testid="stock">&#10003; In stock</span>
              : <span data-testid="stock">Out of stock</span>
          }
        </div>

        {/* Quantity &Sizes */}
        <Form>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              as="select"
              data-testid="quantity"
              name="quantity"
              id="product-quantity"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>
          {
          product.sizes
            ? (
              <Form.Group>
                <Form.Label>Sizes</Form.Label>
                <Form.Control
                  as="select"
                  data-testid="size"
                  name="quantity"
                  id="product-quantity"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </Form.Control>
              </Form.Group>
            )
            : <></>
          }
        </Form>

        {/* Buttons */}
        <div>
          <Button
            variant="light"
            className={`border border-dark rounded-pill ${styles.buyButton}`}
            type="button"
            block
          >
            Buy it now
          </Button>
          <Button
            variant="dark"
            className="rounded-pill"
            type="button"
            block
          >
            Add to cart
          </Button>
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
