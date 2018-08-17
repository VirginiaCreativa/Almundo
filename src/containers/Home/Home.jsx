import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Home.scss";
import Filtros from "./../../components/Filtros/Filtros.jsx";
import FiltrosMobile from "./../../components/FiltrosMobile/FiltrosMobile.jsx";
import Hoteles from "./../../components/Hoteles/Hoteles.jsx";
import Data from "./../../assets/data/data.json";

class Home extends Component {
  state = {
    filtros: false,
    showSlider: true
  };

  toggleSlideHandler = () => {
    const doesShow = this.state.filtros;
    const doesSlider = this.state.showSlider;
    this.setState({
      filtros: !doesShow,
      showSlider: !doesSlider
    });
  };
  render() {
    return (
      <div>
        <FiltrosMobile
          btnSlided={this.toggleSlideHandler}
          slidered={this.state.filtros}
          iconTriangle={this.state.showSlider}
        />
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
