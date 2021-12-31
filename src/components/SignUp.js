import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import { useNavigate } from "react-router-dom";
import { userSignin } from "../reducers/userReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ///////////////////////////////////////////

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      setUsername("");
      setPassword("");
      dispatch(userSignin({ username, password, name }));
      navigate("/login");
    } catch (exception) {
      console.log(exception);
    }
  };
  return (
    <div
      className="mask col-4 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(5, 5, 5, 0.2)",
        backdropFilter: "blur(9px)",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Form onSubmit={handleSignUp}>
        <h5 className="text-muted" style={{ textAlign: "center" }}>
          Create Your LovelyNote Acount
        </h5>
        <Form.Group>
          <FloatingLabel
            className="my-3"
            inputlId="floatingInput"
            label="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <FloatingLabel
            className="my-3"
            inputlId="floatingInput"
            label="Username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <FloatingLabel
            className="my-3"
            controlId="floatingPassword"
            label="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button className="btn-block my-3" variant="info" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
