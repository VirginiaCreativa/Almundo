import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Hotel.scss";
import BackgropHotel from "./../../UI/BackgropHotel.jsx";

const hotel = props => (
  <BackgropHotel>
    <div className={classes.Hotel} />
  </BackgropHotel>
);
export default hotel;
