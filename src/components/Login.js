import React, { useState } from "react";
import noteService from "../services/notes";
import loginService from "../services/login";
import { useDispatch } from "react-redux";
import { loggedin } from "../reducers/loginReducer";
import { Form, Button, Row, Col } from "react-bootstrap";
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
      //window.localStorage.setItem("loggedInUser", JSON.stringify(user));
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
    <div
      className="mask col-4 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(5, 5, 0, 0.6)",
        backdropFilter: "blur(9px)",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Form onSubmit={handleLogin}>
        <p className="text-muted" style={{ textAlign: "center" }}>
          Please Sign In
        </p>
        <Form.Group>
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
            SIGN IN
          </Button>

          <p className="fs-6 text-muted mt-5 " style={{ textAlign: "center" }}>
            Don't have an account?
          </p>

          <p style={{ textAlign: "center", color: "grey" }}>
            <Link to="/signup" className="text-reset ">
              <u>sign up</u>
            </Link>
          </p>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
