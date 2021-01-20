import React from 'react';
import PropTypes from 'prop-types';
import SelectedPhoto from './SelectedPhoto';
import SidePhoto from './SidePhoto';

const Photos = ({ productImage, images }) => (
  <div>
    <div>
      {
        images.map((image) => <SidePhoto image={image} />)
      }
    </div>
    <SelectedPhoto productImage={productImage} />
  </div>
);

Photos.propTypes = {
  productImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Photos;
