import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Filtros from "./../../components/Filtros/Filtros.jsx";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Filtros />
            </Col>
            <Col md="8">
              <h2>Hoteles</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
