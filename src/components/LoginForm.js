import React, { useState } from "react";
import noteService from "../services/notes";
import loginService from "../services/login";
import { useDispatch } from "react-redux";
import { loggedin } from "../reducers/loginReducer";
import { Form, Button } from "react-bootstrap";
import backgroundImg from "./Images/a.jpg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // ///////////////////////////////////////////

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService({ username, password });
      window.localStorage.setItem("loggedInUser", JSON.stringify(user));
      noteService.setToken(user.token);
      setUsername("");
      setPassword("");
      dispatch(loggedin(user));
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
      }}
    >
      <div
        className="mask d-flex align-items-center h-100 justify-content-center"
        style={{
          backgroundColor: "rgba(0, 5, 20, 0.6)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container col-md-3 col-md-offset-3">
          <div className=" bg-dark p-3 border-3 rounded ">
            <Form onSubmit={handleLogin}>
              <h5 className="text-muted" style={{ textAlign: "center" }}>
                Log in
              </h5>
              <Form.Group>
                <Form.Control
                  placeholder="Username"
                  className="my-3"
                  type="text"
                  name="username"
                  onChange={({ target }) => setUsername(target.value)}
                />

                <Form.Control
                  placeholder="Password"
                  className="my-3"
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
                />

                <Button className="btn-block" variant="info" type="submit">
                  login
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
