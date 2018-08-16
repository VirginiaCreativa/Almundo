import React from "react";
import { Container, Row, Col } from "reactstrap";
import Aux from "./../../Hoc/Aux.jsx";
import classes from "./HeadingFiltros.scss";

const headignFiltros = props => (
  <Aux>
    <Container>
      <div className={classes.Heading}>
        <Row>
          <Col md="9" xs="6">
            <i className={props.icon} />
            <p>{props.title}</p>
          </Col>
          <Col md="3" xs="6">
            <i className={props.typeslider} onClick={props.btnSlided} />
          </Col>
        </Row>
      </div>
    </Container>
    <h3>HeadingFiltros</h3>
  </Aux>
);
export default headignFiltros;
