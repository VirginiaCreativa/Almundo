import React from "react";
import Aux from "./../../Hoc/Aux.js";
import classes from "./Layout.scss";

const Layout = props => (
  <Aux>
    <main>{props.children}</main>
  </Aux>
);
export default Layout;
