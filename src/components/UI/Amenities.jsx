import React from "react";
import classes from "./Amenities.scss";

const amenities = props => {
  const typeIcon = props.typeIcon;
  const mClass = [classes.Icon, typeIcon].join(" ");
  return <i className={typeIcon} />;
};

export default amenities;
