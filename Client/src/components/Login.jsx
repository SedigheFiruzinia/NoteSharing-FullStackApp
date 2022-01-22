import React, { useState } from "react";
import noteService from "../services/notes";
import loginService from "../services/login";
import { useDispatch } from "react-redux";
import { loggedin } from "../reducers/loginReducer";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import { useNavigate, Link } from "react-router-dom";
import storage from "../utils/storage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ///////////////////////////////////////////

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService({ username, password });
      storage.saveUser(user);
      noteService.setToken(user.token);
      setUsername("");
      setPassword("");
      dispatch(loggedin(user));
      navigate("/profile");
    } catch (exception) {
      console.log(exception);
    }
  };
  return (
    <Form onSubmit={handleLogin}>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "rgba(5, 5, 8, 0.95)",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      >
        <Form.Group className="text-center">
          <p style={{ textAlign: "center", color: "gray" }}>Please Sign In</p>
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
          <Button variant="info" type="submit" size="sm">
            SIGN IN
          </Button>

          <p className="mt-5 pt-5" style={{ color: "gray" }}>
            {"   "} Don't have an account? {"   "}
            <Link to="/signup" className="text-reset "></Link>
          </p>

          <p style={{ color: "powderblue" }}>
            <Link to="/signup" className="text-reset ">
              <u>sign up</u>
            </Link>
          </p>
        </Form.Group>
      </div>
    </Form>
  );
};

export default Login;
