import React from "react";
import { Container, Row, Col } from "reactstrap";
import SliderMobile from "./SliderMobile.jsx";
import classes from "./FiltrosMobile.scss";
import Aux from "./../../Hoc/Aux.jsx";

const filtrosMobile = props => {
  const mClass = [
    classes.FiltrosMobile,
    "d-block",
    "d-sm-block",
    "d-md-none",
    "d-lg-none"
  ].join(" ");

  let filtrar = null;
  if (props.slidered) {
    filtrar = <SliderMobile />;
  }
  let icon = classes.iconTriangleUp;
  if (props.iconTriangle) {
    icon = classes.iconTriangleDown;
  }
  return (
    <Aux>
      <div className={mClass}>
        <Container>
          <div className={classes.MenuFiltros}>
            <h5>Filtrar</h5>
            <i className={icon} onClick={props.btnSlided} />
          </div>
          <div className={classes.SliderFiltar}>{filtrar}</div>
        </Container>
      </div>
    </Aux>
  );
};
export default filtrosMobile;
