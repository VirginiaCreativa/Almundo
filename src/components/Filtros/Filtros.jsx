import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Filtros.scss";
import Search from "./Search/Search.jsx";
import Stars from "./Stars/Stars.jsx";
import Backgrop from "./../UI/Backgrop.jsx";

const filtros = props => (
  <div>
    <Backgrop>
      <div className={classes.Widget}>
        <h5 className={classes.SpaceBox}>Filtros</h5>
        <div className={classes.Line} />
      </div>
      <div className={classes.Widget}>
        <Search />
        <div className={classes.Line} />
      </div>
      <div>
        <Stars />
      </div>
    </Backgrop>
  </div>
);
export default filtros;
