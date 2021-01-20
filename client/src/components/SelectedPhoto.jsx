import React from 'react';
import PropTypes from 'prop-types';

const SelectedPhoto = ({ selectedImg }) => (
  <img className="selected-photo" alt="randomly generated" src={selectedImg} />
);

SelectedPhoto.propTypes = {
  selectedImg: PropTypes.string.isRequired,
};

export default SelectedPhoto;
