import React from 'react';
// import ReactDom from 'react-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Photos from './Photos';

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
      <div className="container">
        <div className="row">
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
          <Sidebar product={product} seller={seller} />
        </div>
      </div>
    );
  }
}

export default App;
