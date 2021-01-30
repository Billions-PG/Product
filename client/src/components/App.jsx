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
import Nav from './Nav';
import styles from '../styles.module.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/product/:prodId">
        <Nav />
        <Container className={`${styles.app}`}>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Photos />
            </Col>
            <Col className="ml-5" fluid="true">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Route>
    </Switch>
  </Router>
);

export default App;
