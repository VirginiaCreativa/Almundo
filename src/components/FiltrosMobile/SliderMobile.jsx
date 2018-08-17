import React from "react";
import classes from "./SliderMobile.scss";
import SearcMobile from "./SearchMobile/SearchMobile.jsx";
import StarsMobile from "./StarsMobile/StarsMobile.jsx";

const sliderMobile = props => {
  return (
    <div className={classes.SliderMobile}>
      <SearcMobile />
      <StarsMobile />
    </div>
  );
};
export default sliderMobile;
