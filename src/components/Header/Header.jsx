import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Header.scss";
import Logo from "./../../assets/logo/logo-almundo.svg";

const header = props => (
  <div className={classes.Header}>
    <Container>
      <div className={classes.Logo}>
        <img src={Logo} alt="Logo Almundo" />
      </div>
    </Container>
  </div>
);
export default header;
