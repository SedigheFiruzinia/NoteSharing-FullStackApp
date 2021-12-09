import React, { useEffect } from "react";

import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import Profile from "./components/Profile";

import { usersInitialized } from "./reducers/userReducer";
import LoginPage from "./components/LoginPage";
import CreateNote from "./components/CreateNote";

//import Notification from './components/Notification'
//import { loginFailed } from './reducers/notificationReducer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect users rendering");
    dispatch(usersInitialized());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Router>
        <NavBar />
        <p className="mt-5 pt-3">{"  "}</p>
        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
