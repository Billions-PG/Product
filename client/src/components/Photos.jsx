import React from 'react';
import PropTypes from 'prop-types';
import SelectedPhoto from './SelectedPhoto';
import SidePhoto from './SidePhoto';
import styles from '../styles.module.css';

const Photos = ({ selectedImg, images, changeSelectedImg }) => (
  <>
    <div className={styles.sidePhotos}>
      {
        images.length > 1
        && images.map((image) => (
          <SidePhoto
            key={image}
            changeSelectedImg={changeSelectedImg}
            image={image}
          />
        ))
      }
    </div>
    <SelectedPhoto selectedImg={selectedImg} />
  </>
);

Photos.propTypes = {
  selectedImg: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeSelectedImg: PropTypes.func.isRequired,
};

export default Photos;
