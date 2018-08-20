import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import classes from "./Home.scss";
import Filtros from "./../../components/Filtros/Filtros.jsx";
import FiltrosMobile from "./../../components/FiltrosMobile/FiltrosMobile.jsx";
import Hoteles from "./../../components/Hoteles/Hoteles.jsx";
import Data from "./../../assets/data/data.json";

class Home extends Component {
  state = {
    filtramobile: false,
    filtrosearch: false,
    filtrostars: false,
    datas: []
  };

  componentDidMount() {
    axios.get("/api").then(res => {
      const data = res.data;
      console.log(res.data);
      this.setState({ datas: data });
    });
  }

  toggleFiltrarHandler = () => {
    const doesShow = this.state.filtramobile;
    this.setState({ filtramobile: !doesShow });
  };

  toggleFiltroSearchHandler = () => {
    const doesShow = this.state.filtrosearch;
    this.setState({ filtrosearch: !doesShow });
  };
  toggleFiltroStarsHandler = () => {
    const doesShowS = this.state.filtrostars;
    this.setState({ filtrostars: !doesShowS });
  };
  render() {
    return (
      <div>
        <FiltrosMobile
          btnSlided={this.toggleFiltrarHandler}
          slidered={this.state.filtramobile}
        />
        <Container>
          <Row>
            <Col md="4" sm="12" className="d-none d-sm-none d-md-block">
              <Filtros
                btnSearch={this.toggleFiltroSearchHandler}
                slideredSearch={this.state.filtrosearch}
                slideredStars={this.state.filtrostars}
                btnStars={this.toggleFiltroStarsHandler}
              />
            </Col>
            <Col md="8" sm="12">
              <Hoteles data={this.state.datas} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
