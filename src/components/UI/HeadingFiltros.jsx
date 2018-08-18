import React from "react";
import { Container, Row, Col } from "reactstrap";
import Aux from "./../../Hoc/Aux.jsx";
import classes from "./HeadingFiltros.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const headignFiltros = props => (
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
);
export default headignFiltros;
