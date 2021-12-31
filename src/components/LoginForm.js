import React from "react";
import { Row } from "react-bootstrap";
import backgroundImg from "./Images/d.jpg";
import About from "./About";
import Login from "./Login";

const LoginForm = () => {
  return (
    <div
      className="mx-0 px-0"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        className="mask align-items-center " //d-flex align-items-center h-100 justify-content-center"
        style={{
          backgroundColor: "rgba(5, 5, 5, 0.8)",
          backdropFilter: "blur(8px)",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      >
        <Row>
          <About />
          <Login />
        </Row>
      </div>
    </div>
  );
};

export default LoginForm;
