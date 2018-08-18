import React from "react";
import { Container, Row, Col } from "reactstrap";
import Aux from "./../../Hoc/Aux.jsx";
import classes from "./HeadingFiltros.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const headignFiltros = props => {
  const { title, btnSlider, icontype, iconTriangle, slidered } = props;

  return (
    <div className={classes.Heading}>
      <Row className="no-gutters">
        <Col md="10" xs="6">
          <i className={icontype} />
          <p>{title}</p>
        </Col>
        <Col md="2" xs="6">
          <a href="#" onClick={btnSlider}>
            <FontAwesomeIcon
              icon={faCaretUp}
              style={{
                transform: iconTriangle ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all .25s ease",
                position: "relative",
                right: "-40px",
                top: "2px"
              }}
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default headignFiltros;
