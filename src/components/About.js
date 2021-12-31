import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const About = () => {
  const content = (
    <div
      className="mask d-flex"
      style={{
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Row className="d-flex">
        <div style={{ color: "gray", fontSize: 54 }}>
          Sharing Notes
          <p
            className="font-weight-lighter"
            style={{ color: "gray", fontSize: 25 }}
          >
            A friendly application for taking and sharing notes
          </p>
        </div>
      </Row>
    </div>
  );

  return <Col className="mt-5 pt-5 ml-5">{content}</Col>;
};

export default About;
