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
  return (
    <Container>
      <div className={classes.Search}>
        <HeadingFiltros
          title="Nombre del hotel"
          btnSlided={props.btnSlided}
          icon="iconSearch"
          typeslider="iconTriangleUp"
        />
        <Form>
          <Row className="no-gutters">
            <Col md="8">
              <Input
                type="text"
                className={classes.InputSearch}
                value={props.valuered}
                onChange={props.changed}
                placeholder="Ingrese el hombre del hotel"
              />
            </Col>
            <Col md="4">
              <Button color="primary" className="float-right">
                Aceptar
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default search;
