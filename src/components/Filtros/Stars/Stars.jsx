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
  const { btnStars, slideredStars } = props;

  let showSlider = true;

  let formShow = null;
  let heightShow = {
    height: "0px",
    opacity: "0"
  };
  if (slideredStars) {
    formShow = (
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
    );
    heightShow.height = "188px";
    heightShow.opacity = "1";
    showSlider = !showSlider;
  }
  return (
    <div className={classes.Stars}>
      <Container>
        <HeadingFiltros
          title="Estrella"
          btnSlider={btnStars}
          icontype="iconStar"
          iconTriangle={showSlider}
        />
        <div className={classes.SliderStars} style={{ ...heightShow }}>
          {formShow}
        </div>
      </Container>
    </div>
  );
};
export default stars;
