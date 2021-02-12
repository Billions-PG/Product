import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles.module.css';

const DOSH_URL = "https://destinationcapstone.sfo2.digitaloceanspaces.com/";


const SelectedPhoto = ({ selectedImg }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paper: {
      position: 'absolute',
      maxHeight: '90%',
      maxWidth: '70%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: '5px',
      outline: 'none',
    },

  }));

  const classes = useStyles();

  return (
    <>
      <Image
        onClick={handleOpen}
        className={styles.selectedPhoto}
        alt="randomly generated"
        src={`${selectedImg}`}
      />

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <Image
          className={classes.paper}
          alt="randomly generated"
          src={`${selectedImg}`}
        />
      </Modal>
    </>
  );
};

SelectedPhoto.propTypes = {
  selectedImg: PropTypes.string.isRequired,
};

export default SelectedPhoto;
