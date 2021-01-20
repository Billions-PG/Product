import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ seller }) => (
  <div>{seller.name}</div>
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
