import React from "react";
import { Row, Col } from "react-bootstrap";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <Row style={{ marginRight: 0 }}>
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-center mx-0 px-0"
        style={{
          // backgroundColor: "rgba(166, 166, 216, 0.07)",
          height: "100vh",
        }}
      >
        <Col sm={8} style={{ paddingRight: 0, paddingLeft: 0 }}>
          <About />
        </Col>
        <Col
          className="d-none d-sm-block"
          sm={4}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Login />
        </Col>
      </div>
    </Row>
  );
};

export default HomePage;
