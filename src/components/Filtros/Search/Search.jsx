import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import classes from "./Search.scss";
import HeadingFiltros from "./../../UI/HeadingFiltros.jsx";

const search = props => {
  const { btnSearch, slideredSearch } = props;

  let showSlider = true;

  let formShow = null;
  let heightShow = {
    height: "0px",
    opacity: "0"
  };
  if (slideredSearch) {
    formShow = (
      <Form>
        <Row className="no-gutters">
          <Col md="8" xs="8">
            <Input
              type="text"
              className={classes.InputSearch}
              value={props.valuered}
              onChange={props.changed}
              placeholder="Ingrese el hombre del hotel"
            />
          </Col>
          <Col md="4" xs="4">
            <Button color="primary" className="float-right">
              Aceptar
            </Button>
          </Col>
        </Row>
      </Form>
    );
    heightShow.height = "46px";
    heightShow.opacity = "1";
    showSlider = !showSlider;
  }
  return (
    <Container>
      <div className={classes.Search}>
        <HeadingFiltros
          title="Nombre del hotel"
          btnSlider={btnSearch}
          icontype="iconSearch"
          iconTriangle={showSlider}
        />
        <div className={classes.SliderSearch} style={{ ...heightShow }}>
          {formShow}
        </div>
      </div>
    </Container>
  );
};

export default search;
