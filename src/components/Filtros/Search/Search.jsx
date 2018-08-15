import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Search.scss";
import Aux from "./../../../Hoc/Aux.jsx";

const search = props => (
  <Aux>
    <div className={classes.SpaceBox}>
      <Row>
        <Col md="10">
          <div className={classes.Heading}>
            <i className={classes.iconSearch} />
            <p> Nombre del hotel</p>
          </div>
        </Col>
        <Col md="10">
          <i className={classes.IconHide} />
        </Col>
      </Row>
    </div>
  </Aux>
);
export default search;
