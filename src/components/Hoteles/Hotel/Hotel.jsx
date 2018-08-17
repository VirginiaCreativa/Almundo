import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import classes from "./Hotel.scss";
import BackgropHotel from "./../../UI/BackgropHotel.jsx";
import Anemities from "./../../UI/Amenities.jsx";

const hotel = props => {
  const { image, name, price, amenities } = props;
  let imageSrc = require(`./../../../assets/images/hotels/${image}`);

  return (
    <div className={classes.Hotel}>
      <BackgropHotel>
        <Row className="no-gutters">
          <Col md="5" sm="4">
            <div className={classes.imageHotel}>
              <img src={imageSrc} alt={name} className="img-fluid" />
            </div>
          </Col>
          <Col md="4" sm="5">
            <div className={classes.Info}>
              <h6>{name}</h6>
              <div className={classes.Amenities}>
                {amenities.map((amenitie, i) => {
                  return <Anemities typeIcon={amenitie} key={i} />;
                })}
              </div>
            </div>
          </Col>
          <Col md="3" sm="3">
            <div className={classes.Price}>
              <p>Precio por noche por habitación</p>
              <h1>
                <span className={classes.cambio}>ARS</span>
                {price}
              </h1>
              <Button color="primary">Ver hotel</Button>
            </div>
          </Col>
        </Row>
      </BackgropHotel>
    </div>
  );
};

export default hotel;
