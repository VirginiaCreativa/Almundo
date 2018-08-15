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
import Aux from "./../../../Hoc/Aux.jsx";

const search = props => {
  return (
    <Aux>
      <Container>
        <div className={classes.Search}>
          <Row>
            <Col md="9" xs="6">
              <div className={classes.Heading}>
                <i className={classes.iconSearch} />
                <p> Nombre del hotel</p>
              </div>
            </Col>
            <Col md="3" xs="6">
              <i className={classes.iconTriangleDown} onClick={props.btnSide} />
            </Col>
          </Row>
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
    </Aux>
  );
};

export default search;
