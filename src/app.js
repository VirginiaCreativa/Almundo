import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Home from "./containers/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home />
        </Layout>
      </div>
    );
  }
}
export default App;
