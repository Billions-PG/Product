import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seller: {},
    };
  }

  componentDidMount() {
    this.getRandomProduct();
  }

  getRandomProduct() {
    const id = Math.floor(Math.random() * Math.floor(100)) + 1;
    axios.get(`/sellers/${id}`)
      .then((res) => this.setState({ seller: res.data }))
      .catch((err) => err);
  }

  render() {
    const { seller } = this.state;
    return (
      <div id="product-app">
        <Sidebar seller={seller} />
      </div>
    );
  }
}

export default App;

ReactDom.render(<App />, document.getElementById('app'));
