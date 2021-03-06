import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Filtros.scss";
import Search from "./Search/Search.jsx";
import Stars from "./Stars/Stars.jsx";
import BackgropFiltros from "./../UI/BackgropFiltros.jsx";

const filtros = ({ btnSearch, btnStars, slideredSearch, slideredStars }) => {
  return (
    <BackgropFiltros>
      <div className={classes.Widget}>
        <h5 className={classes.SpaceBox}>Filtros</h5>
        <div className={classes.Line} />
      </div>
      <div className={classes.Widget}>
        <Search btnSearch={btnSearch} slideredSearch={slideredSearch} />
        <div className={classes.Line} />
      </div>
      <div>
        <Stars slideredStars={slideredStars} btnStars={btnStars} />
      </div>
    </BackgropFiltros>
  );
};
export default filtros;
