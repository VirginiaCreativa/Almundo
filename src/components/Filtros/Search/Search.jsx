import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Search.scss";
import Aux from "./../../../Hoc/Aux.jsx";

const search = props => {
  return (
    <Aux>
      <div className={classes.SpaceBox}>
        <div className={classes.Search}>
          <Row>
            <Col md="9">
              <div className={classes.Heading}>
                <i className={classes.iconSearch} />
                <p> Nombre del hotel</p>
              </div>
            </Col>
            <Col md="3">
              <i className={classes.iconTriangleDown} onClick={props.btnSide} />
            </Col>
          </Row>
        </div>
      </div>
    </Aux>
  );
};

export default search;
