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
import classes from "./SearchMobile.scss";

const searchmobile = props => {
  return (
    <div className={classes.SearcMobile}>
      <Form>
        <Row className="no-gutters">
          <Col xs="9">
            <Input
              type="text"
              className={classes.InputSearch}
              value={props.valuered}
              onChange={props.changed}
              placeholder="Ingrese el hombre del hotel"
            />
          </Col>
          <Col xs="3">
            <Button color="primary" className="float-right">
              Aceptar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default searchmobile;
