import loginService from "../services/login";
import noteService from "../services/notes";

export const loggedin = (credentials) => {
  return async (dispatch) => {
    const user = await loginService(credentials);
    window.localStorage.setItem("loggedInUser", JSON.stringify(user));
    noteService.setToken(user.token);

    dispatch({
      type: "Logged-In",
      payload: {
        user: user,
      },
    });
  };
};
export const loggedOut = () => {
  return (dispatch) => {
    dispatch({
      type: "Logged-Out",
    });
  };
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "Logged-In":
      return { user: action.payload.user };
    case "Logged-Out":
      return null;
    default:
      return state;
  }
};

export default userReducer;
