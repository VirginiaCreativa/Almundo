import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import classes from "./Stars.scss";
import HeadingFiltros from "./../../UI/HeadingFiltros.jsx";

const stars = props => {
  return (
    <div className={classes.Stars}>
      <Container>
        <HeadingFiltros
          title="Estrella"
          btnSlided={props.btnSlided}
          icon="iconStar"
          typeslider="iconTriangleUp"
        />
        <Form>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChanged}
                value={props.valuered}
                name="todas"
              />
              Todas las estrellas
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={props.checked}
                value={props.valuered}
                name="5"
              />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChanged}
                value={props.valuered}
                name="4"
              />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChanged}
                value={props.valuered}
                name="3"
              />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChanged}
                value={props.valuered}
                name="2"
              />
              <i className={classes.iconCheck} />
              <i className={classes.iconCheck} />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChanged}
                value={props.valuered}
                name="1"
              />
              <i className={classes.iconCheck} />
            </Label>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};
export default stars;
