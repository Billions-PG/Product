// todo - fix these eslint
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import styles from '../styles.module.css';

const SidePhoto = ({ image, changeSelectedImg }) => (
  <Image
    onClick={changeSelectedImg}
    className={styles.sidePhoto}
    alt="randomly generated"
    src={image}
    data-testid="side-photo"
    thumbnail
  />
);

SidePhoto.propTypes = {
  image: PropTypes.string.isRequired,
  changeSelectedImg: PropTypes.func.isRequired,
};

export default SidePhoto;
