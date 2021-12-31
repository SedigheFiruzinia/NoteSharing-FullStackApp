import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { usersInitialized } from "./reducers/userReducer";
import FirstPage from "./components/FirstPage";
import CreateNote from "./components/NoteForm";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersInitialized());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
