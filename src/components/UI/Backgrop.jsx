import React from "react";
import classes from "./Backgrop.scss";

const backgrop = props => (
  <div className={classes.Backgrop}>{props.children}</div>
);
export default backgrop;
