import React from "react";
import { Container, Row, Col } from "reactstrap";
import Aux from "./../../Hoc/Aux.jsx";
import classes from "./HeadingFiltros.scss";

const headignFiltros = props => (
  <Aux>
    <div className={classes.Heading}>
      <Row className="no-gutters">
        <Col md="10" xs="6">
          <i className={props.icon} />
          <p>{props.title}</p>
        </Col>
        <Col md="2" xs="6">
          <i className={props.typeslider} onClick={props.btnSlided} />
        </Col>
      </Row>
    </div>
  </Aux>
);
export default headignFiltros;
