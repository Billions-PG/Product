import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SelectedPhoto from './SelectedPhoto';
import SidePhoto from './SidePhoto';

const Photos = ({ selectedImg, images, changeSelectedImg }) => (
  <>
    <Container>
      <Row>
        <Col md={2}>
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
        </Col>
        {/* </div> */}
        <Col>
          <SelectedPhoto selectedImg={selectedImg} />
        </Col>
      </Row>
    </Container>
  </>
);

Photos.propTypes = {
  selectedImg: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeSelectedImg: PropTypes.func.isRequired,
};

export default Photos;
