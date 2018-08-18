import React from "react";
import { Container, Row, Col } from "reactstrap";
import SliderMobile from "./SliderMobile.jsx";
import classes from "./FiltrosMobile.scss";
import Aux from "./../../Hoc/Aux.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const filtrosMobile = props => {
  const { btnSlided, slidered } = props;

  let showSlider = true;

  const mClass = [
    classes.FiltrosMobile,
    "d-block",
    "d-sm-block",
    "d-md-none",
    "d-lg-none"
  ].join(" ");

  const mClassSlider = [
    classes.SliderFiltar,
    "d-block",
    "d-sm-block",
    "d-md-none",
    "d-lg-none"
  ].join(" ");
  let heightShow = {
    minHeight: "0px",
    height: "0px"
  };
  let filtrar = null;
  if (slidered) {
    filtrar = <SliderMobile sliderShow={slidered} />;
    heightShow.minHeight = "236px";
    showSlider = !showSlider;
  }
  return (
    <Aux>
      <div className={mClass}>
        <Container>
          <a href="#" className={classes.MenuFiltros} onClick={btnSlided}>
            Filtrar
            <FontAwesomeIcon
              icon={faCaretUp}
              style={{
                transform: showSlider ? "rotate(0deg)" : "rotate(180deg)",
                transition: "all .25s ease",
                position: "relative",
                left: "10px",
                top: "2px"
              }}
            />
          </a>
        </Container>
      </div>

      <div className={mClassSlider} style={{ ...heightShow }}>
        <Container>{filtrar}</Container>
      </div>
    </Aux>
  );
};
export default filtrosMobile;
