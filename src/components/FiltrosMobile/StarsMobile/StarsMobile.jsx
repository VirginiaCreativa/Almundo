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
import classes from "./StarsMobile.scss";

const starsmobile = props => {
  return (
    <div className={classes.StarsMobile}>
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
    </div>
  );
};
export default starsmobile;
