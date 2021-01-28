import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles.module.css';

const useStyles = makeStyles({
  rating: {
    color: 'black',
  },
});

const Sidebar = () => {
  const { prodId } = useParams();

  const [seller, setSeller] = useState({});
  const [product, setProduct] = useState({});

  const getState = async () => {
    const res = await axios.get(`http://localhost:3002/sellers/${prodId}`);
    setSeller(res.data);
    setProduct(res.data.products.filter((p) => p.id === Number(prodId))[0]);
  };

  useEffect(() => {
    getState();
  }, [prodId]);

  return (
    <div>
      {/* Seller Name & Sales */}
      <>
        <span className={styles.sellerName}>{seller.name}</span>
        <div>
          <span className={styles.sales}>
            {seller.sales}
            {' '}
            sales
          </span>
          <span className="ml-1 mr-1 text-muted"> | </span>
          <Rating
            className={`${styles.rating} ${useStyles().rating}`}
            disabled
            size="small"
            name="half-rating"
            value={Number(product.rating)}
            precision={0.5}
          />
        </div>
      </>
      {/* Product Name, Price & Stock */}

      <div>
        <span className={styles.productName}>{product.name}</span>
        <div className={styles.priceStock}>
          <span className={styles.price}>
            $
            {product.price}
          </span>
          {
            product.stock
              ? <span className={styles.stock} data-testid="stock">&#10003; In stock</span>
              : <span className={styles.stock} data-testid="stock">Out of stock</span>
          }
        </div>

        {/* Quantity &Sizes */}
        <Form>
          <Form.Group>
            <Form.Label className={styles.label}>Quantity</Form.Label>
            <Form.Control
              as="select"
              className={styles.select}
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
                  <Form.Label className={styles.label}>Sizes</Form.Label>
                  <Form.Control
                    as="select"
                    className={styles.select}
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
            className={`border border-dark rounded-pill ${styles.buyButton} ${styles.button}`}
            type="button"
            block
          >
            Buy it now
          </Button>
          <Button
            variant="dark"
            className={`rounded-pill ${styles.addButton} ${styles.button}`}
            type="button"
            block
          >
            Add to cart
          </Button>
        </div>

        {/* Description */}
        <div className="mt-4">
          <span className={`mb-1 ${styles.descriptionTitle}`}>Description</span>
          <span className={styles.descriptionBody}>{product.description}</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
