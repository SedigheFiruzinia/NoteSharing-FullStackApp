import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import backgroundImg from "./Images/g.jpg";
import Login from "./Login";
import logo from "./Images/e.png";

const About = () => {
  const content = (
    // <div
    //   className="mx-0 px-0"
    //   style={{
    //     backgroundImage: `url(${backgroundImg})`,
    //     height: "100vh",
    //     backgroundSize: "100% 100%",
    //   }}
    // >
    //   <div
    //     style={{
    //       backgroundColor: "rgba(5, 5, 5, 0.8)",
    //       backdropFilter: "blur(8px)",
    //       height: "100vh",
    //       // backgroundSize: "100% 100%",
    //     }}
    //   >
    <Row
      className="text-center "
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Col
        xs={12}
        sm={12}
        className="mt-5 pt-5"
        style={{
          height: "100vh",
          backdropFilter: "blur(3px)",
          // backgroundColor: "rgba(5, 5, 5, 0.8)",
        }}
      >
        <h1 className="pb-0" style={{ color: "black", fontSize: 70 }}>
          DoughNotes
        </h1>
        <p
          className="mt-5 font-weight-lighter pb-5"
          style={{ color: "gray", fontSize: 20 }}
        >
          an easy to use note application for taking, sharing, saving your every
          day notes
        </p>
      </Col>
    </Row>
    //   </div>
    // </div>
  );

  // return <Col className="mt-5 pt-5 ml-5">{content}</Col>;
  return <>{content}</>;
};

export default About;
