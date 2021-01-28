import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Sidebar from './Sidebar';
import Photos from './Photos';
import styles from '../styles.module.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/product/:prodId">
        <Container className={`${styles.app}`}>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Photos />
            </Col>
            <Col fluid="true">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Route>
    </Switch>
  </Router>
);

export default App;
