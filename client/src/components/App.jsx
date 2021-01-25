import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Sidebar from './Sidebar';
import Photos from './Photos';
import styles from '../styles.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seller: {},
      product: {},
      selectedImg: '',
    };

    this.changeSelectedImg = this.changeSelectedImg.bind(this);
  }

  componentDidMount() {
    this.getRandomSellerAndProduct();
  }

  getRandomSellerAndProduct() {
    const id = Math.floor(Math.random() * Math.floor(100)) + 1;
    axios.get(`http://localhost:3002/sellers/${id}`)
      // set seller
      .then((res) => {
        this.setState({ seller: res.data });
        return res.data.products;
      })
      // set product
      .then((products) => {
        products.forEach((product) => {
          if (product.id === id) {
            this.setState({ product });
            this.setState({ selectedImg: product.images[0] });
          }
        });
        return products[0];
      })
      .catch((err) => err);
  }

  changeSelectedImg(e) {
    this.setState({ selectedImg: e.target.src });
  }

  render() {
    const { seller, product, selectedImg } = this.state;
    return (
      <Container className={`${styles.app}`}>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            {
              product.images
              && (
                <Photos
                  changeSelectedImg={this.changeSelectedImg}
                  images={product.images}
                  selectedImg={selectedImg}
                />
              )
            }
          </Col>
          <Col fluid>
            <Sidebar product={product} seller={seller} />
          </Col>

        </Row>
      </Container>
    );
  }
}

export default App;
