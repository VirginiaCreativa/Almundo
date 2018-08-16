import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./IconSlide.scss";

const iconSlide = props => (
  <i className={props.typeSlider} onClick={props.btnSlided} />
);
export default iconSlide;
