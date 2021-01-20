import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Photos from './components/Photos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seller: {},
      product: {},
      images: [],
    };
  }

  componentDidMount() {
    this.getRandomSellerAndProduct();
  }

  getRandomSellerAndProduct() {
    const id = Math.floor(Math.random() * Math.floor(100)) + 1;
    axios.get(`/sellers/${id}`)
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
          } else {
            // set secondary photos for display
            this.setState((prevState) => ({
              images: [...prevState.images, product.image],
            }));
          }
        });
      })
      .catch((err) => err);
  }

  render() {
    const { seller, product, images } = this.state;
    return (
      <div id="product-app">
        {
          product.image
          && (
            <Photos productImage={product.image} images={images} />
          )
        }
        <Sidebar product={product} seller={seller} />
      </div>
    );
  }
}

export default App;

ReactDom.render(<App />, document.getElementById('app'));
