import React from "react";
import classes from "./StarsPount.scss";

const starsPount = props => {
  let starIcon = null;

  switch (props.typeStars) {
    case 1:
      starIcon = <i className={classes.iconStar} />;
      break;
    case 2:
      starIcon = (
        <div>
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
        </div>
      );
      break;
    case 3:
      starIcon = (
        <div>
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
        </div>
      );
      break;
    case 4:
      starIcon = (
        <div>
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
        </div>
      );
      break;
    case 5:
      starIcon = (
        <div>
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
          <i className={classes.iconStar} />
        </div>
      );
      break;
    default:
      starIcon = null;
      break;
  }
  return starIcon;
};
export default starsPount;
