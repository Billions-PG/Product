// todo - fix these eslint
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const SidePhoto = ({ image, changeSelectedImg }) => (
  <img
    onClick={changeSelectedImg}
    className="side-photo"
    alt="randomly generated"
    src={image}
    data-testid="side-photo"
  />
);

SidePhoto.propTypes = {
  image: PropTypes.string.isRequired,
  changeSelectedImg: PropTypes.func.isRequired,
};

export default SidePhoto;
