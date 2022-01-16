import React from "react";
import { Row, Col } from "react-bootstrap";
import backgroundImg from "./Images/d.jpg";

const About = () => {
  const content = (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(5, 5, 5, 0.8)",
          backdropFilter: "blur(8px)",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      >
        <Row className="mt-5">
          <Col sm={1}></Col>
          <Col sm={9} xs={12}>
            <h1
              className="mt-5 ml-5 pt-5"
              style={{ color: "gray", fontSize: 53 }}
            >
              DoughNotes
            </h1>
            <p
              className="font-weight-lighter ml-5"
              style={{ color: "gray", fontSize: 20 }}
            >
              an easy to use note application
            </p>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </div>
    </div>
  );

  // return <Col className="mt-5 pt-5 ml-5">{content}</Col>;
  return <>{content}</>;
};

export default About;
