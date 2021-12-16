import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import storage from "../utils/storage";
import { loggedin } from "../reducers/loginReducer";

const FirstPage = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((element) => element.LoggedIn);

  useEffect(() => {
    const user = storage.loadUser();
    dispatch(loggedin(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{!loggedInUser ? <LoginForm /> : <Profile />}</div>;
};

export default FirstPage;
