import React from "react";
import classes from "./Layout.scss";
import Aux from "./../../Hoc/Aux.jsx";
import Header from "./../Header/Header.jsx";

const Layout = props => (
  <Aux>
    <Header />
    <main>{props.children}</main>
  </Aux>
);
export default Layout;
