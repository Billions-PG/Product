import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import styles from '../styles.module.css';

const SelectedPhoto = ({ selectedImg }) => (
  <Image
    className={styles.selectedPhoto}
    alt="randomly generated"
    src={selectedImg}
  />
);

SelectedPhoto.propTypes = {
  selectedImg: PropTypes.string.isRequired,
};

export default SelectedPhoto;
