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

const search = props => {
  return (
    <Container>
      <div className={classes.Search}>
        <div className={classes.Heading}>
          <Row>
            <Col md="9" xs="6">
              <i className={classes.iconSearch} />
              <p> Nombre del hotel</p>
            </Col>
            <Col md="3" xs="6">
              <i className={classes.iconTriangleUp} onClick={props.btnSide} />
            </Col>
          </Row>
        </div>
        <Form>
          <Row>
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
              <Button color="primary">Aceptar</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default search;
