import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { usersInitialized } from "./reducers/userReducer";
import HomePage from "./components/HomePage";
import CreateNote from "./components/NotePad";
import SignUp from "./components/SignUp";
import storage from "./utils/storage";
import { loggedin } from "./reducers/loginReducer";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((element) => element.LoggedIn);

  useEffect(() => {
    dispatch(usersInitialized());
    const user = storage.loadUser();
    if (user) {
      dispatch(loggedin(user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid="xs" className="pl-0">
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={!loggedInUser ? <HomePage /> : <Profile />}
          />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </Container>
  );
};

export default App;
