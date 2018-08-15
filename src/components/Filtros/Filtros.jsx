import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Filtros.scss";
import Search from "./Search/Search.jsx";
import Stars from "./Stars/Stars.jsx";
import Backgrop from "./../UI/Backgrop.jsx";

const filtros = props => (
  <div>
    <Backgrop>
      <section>
        <h5>Filtros</h5>
      </section>
      <section>
        <Search />
      </section>
      <section>
        <Stars />
      </section>
    </Backgrop>
  </div>
);
export default filtros;
