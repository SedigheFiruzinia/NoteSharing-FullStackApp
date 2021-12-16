import React, { useState } from "react";
import noteService from "../services/notes";
import loginService from "../services/login";
import { useDispatch } from "react-redux";
import { loggedin } from "../reducers/loginReducer";
import { Form, Button, Row } from "react-bootstrap";
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
    <Row>
      <Form onSubmit={handleLogin}>
        <h5 className="text-muted" style={{ textAlign: "center" }}>
          Log in
        </h5>
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
            login
          </Button>

          <p className="fs-6 text-muted mt-4" style={{ textAlign: "center" }}>
            Don't have an account?
          </p>

          <p className="mt-3" style={{ textAlign: "center" }}>
            <Link to="/signUp" className="text-reset font-weight-bold">
              sign up
            </Link>
          </p>
        </Form.Group>
      </Form>
    </Row>
  );
};

export default Login;
