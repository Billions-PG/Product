import React from 'react';
import PropTypes from 'prop-types';

const SidePhoto = ({ image }) => (
  <img className="side-photo" alt="randomly generated" src={image} />
);

SidePhoto.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SidePhoto;
