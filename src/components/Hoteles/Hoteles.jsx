import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Hoteles.scss";
import Hotel from "./Hotel/Hotel.jsx";
import Aux from "./../../Hoc/Aux.jsx";

const hoteles = props => {
  const hoteles = props.data;
  return (
    <Aux>
      <div className={classes.Hoteles}>
        {hoteles.map((hotel, id) => {
          return <Hotel key={hotel.id} {...hotel} />;
        })}
      </div>
    </Aux>
  );
};
export default hoteles;
