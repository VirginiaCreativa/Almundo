import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import classes from "./Hotel.scss";
import BackgropHotel from "./../../UI/BackgropHotel.jsx";
import Anemities from "./../../UI/Amenities.jsx";
import StarsPount from "./../../UI/StarsPount.jsx";
import Aux from "./../../../Hoc/Aux.jsx";
const hotel = props => {
  const { image, name, stars, price, amenities } = props;
  let imageSrc = require(`./../../../assets/images/hotels/${image}`);

  return (
    <Aux>
      <div className={classes.Hotel}>
        <BackgropHotel>
          <Row className="no-gutters">
            <Col lg="5" md="12">
              <div className={classes.imageHotel}>
                <img
                  src={imageSrc}
                  alt={name}
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
            <Col lg="4" md="12">
              <div className={classes.Info}>
                <h6>{name}</h6>
                <StarsPount typeStars={stars} />
                <div className={classes.Amenities}>
                  {amenities.map((amenitie, i) => {
                    return <Anemities typeIcon={amenitie} key={i} />;
                  })}
                </div>
              </div>
            </Col>
            <Col lg="3" md="12">
              <div className={classes.Price}>
                <p>Precio por noche por habitación</p>
                <h1>
                  <span className={classes.cambio}>ARS</span>
                  {price.toFixed(0)}
                </h1>
                <Button color="primary" block>
                  Ver hotel
                </Button>
              </div>
            </Col>
          </Row>
        </BackgropHotel>
      </div>
    </Aux>
  );
};

export default hotel;
