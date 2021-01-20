import React from 'react';
import PropTypes from 'prop-types';
import SelectedPhoto from './SelectedPhoto';
import SidePhoto from './SidePhoto';

const Photos = ({ selectedImg, images, changeSelectedImg }) => (
  <div id="product-photos">
    <div className="product-photos-side">
      {
        images.length > 1
        && images.map((image) => <SidePhoto changeSelectedImg={changeSelectedImg} image={image} />)
      }
    </div>
    <SelectedPhoto selectedImg={selectedImg} />
  </div>
);

Photos.propTypes = {
  selectedImg: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeSelectedImg: PropTypes.func.isRequired,
};

export default Photos;
