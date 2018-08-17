import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./FiltrosMobile.scss";

const filtrosMobile = props => {
  const mClass = [
    classes.FiltrosMobile,
    "d-block",
    "d-sm-block",
    "d-md-none",
    "d-lg-none"
  ].join(" ");
  return (
    <div className={mClass}>
      <Container>
        <div className={classes.MenuFiltros}>
          <h5>Filtrar</h5>
          <i className={classes.iconTriangleDown} onClick={props.btnSlided} />
        </div>
      </Container>
    </div>
  );
};
export default filtrosMobile;
