import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Stars.scss";
import HeadingFiltros from "./../../UI/HeadingFiltros.jsx";

const stars = props => {
  return (
    <div className="Stars">
      <HeadingFiltros
        title="Estrella"
        btnSlided={props.btnSlided}
        icon="iconStar"
        typeslider="iconTriangleUp"
      />
    </div>
  );
};
export default stars;
