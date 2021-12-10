import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import noteService from "../services/notes";
import { loggedin } from "../reducers/loginReducer";

const FirstPage = () => {
  const loggedInUser = useSelector((element) => element.LoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedInUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      dispatch(loggedin(user));
      noteService.setToken(user.token);
      //dispatch(notesInitialized(loggedInUser.user.id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{!loggedInUser ? <LoginForm /> : <Profile />}</div>;
};

export default FirstPage;
