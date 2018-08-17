import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Filtros from "./../../components/Filtros/Filtros.jsx";
import Hoteles from "./../../components/Hoteles/Hoteles.jsx";
import Data from "./../../assets/data/data.json";

class Home extends Component {
  state = {};
  btnSlidedHandler = () => {
    console.log("funcionaa");
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4" sm="12" className="d-none d-sm-none d-md-block">
              <Filtros btnSlided={this.btnSlidedHandler} />
            </Col>
            <Col md="8" sm="12">
              <Hoteles data={Data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
