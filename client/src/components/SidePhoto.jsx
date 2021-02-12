// todo - fix these eslint
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import styles from '../styles.module.css';

const DOSH_URL = "https://destinationcapstone.sfo2.digitaloceanspaces.com/";

const SidePhoto = ({ image, changeSelectedImg, selectedImg }) => (
  <>
    {
      image === selectedImg
        ? (
          <Image
            onClick={changeSelectedImg}
            className={`mb-2 ${styles.sidePhoto} ${styles.selected}`}
            alt="randomly generated"
            src={`${image}`}
            data-testid="side-photo"
            rounded
          />
        )
        : (
          <Image
            onClick={changeSelectedImg}
            className={`mb-2 ${styles.sidePhoto} ${styles.unselected}`}
            alt="randomly generated"
            src={`${image}`}
            data-testid="side-photo"
            rounded
          />
        )
    }

  </>
);

SidePhoto.propTypes = {
  image: PropTypes.string.isRequired,
  selectedImg: PropTypes.string.isRequired,
  changeSelectedImg: PropTypes.func.isRequired,
};

export default SidePhoto;
