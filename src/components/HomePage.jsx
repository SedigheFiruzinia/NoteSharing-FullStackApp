import React from "react";
import { Row, Col } from "react-bootstrap";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <Row style={{ marginRight: 0 }}>
      <NavBar />
      <Col xs={12} sm={8} style={{ paddingRight: 0, paddingLeft: 0 }}>
        <About />
      </Col>
      <Col
        className="d-none d-sm-block"
        xs={0}
        sm={4}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Login />
      </Col>
    </Row>
  );
};

export default HomePage;
