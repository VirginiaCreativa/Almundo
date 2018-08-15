import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Search.scss";
import Aux from "./../../../Hoc/Aux.jsx";

const search = props => (
  <Aux>
    <div className={classes.SpaceBox}>
      <h3>Search</h3>
    </div>
  </Aux>
);
export default search;
