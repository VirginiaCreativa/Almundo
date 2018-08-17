import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Hoteles.scss";
import Hotel from "./Hotel/Hotel.jsx";

const hoteles = props => {
  const hoteles = props.data;
  return (
    <div className={classes.Hoteles}>
      {hoteles.map((hotel, id) => {
        return <Hotel key={hotel.id} {...hotel} />;
      })}
    </div>
  );
};
export default hoteles;
