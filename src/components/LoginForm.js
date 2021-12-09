import React, { useState } from "react";

//import loginService from "../services/login";
import { useDispatch } from "react-redux";
import { loggedin } from "../reducers/loginReducer";
import { Form, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // ///////////////////////////////////////////

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      dispatch(loggedin({ username, password }));
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div className="container col-md-3 col-md-offset-3 centered">
      <div className=" bg-light p-4 border centered">
        <h2>login</h2>

        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              className="my-2"
              type="text"
              name="username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <div></div>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              className="my-2"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button variant="primary" type="submit">
              login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
