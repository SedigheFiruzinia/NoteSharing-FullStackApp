import signinService from "../services/signin";

export const userSignin = (credentials) => {
  return async (dispatch) => {
    const user = await signinService.signin(credentials);
    dispatch({
      type: "User-Signin",
      payload: {
        user: user,
      },
    });
  };
};

export const usersInitialized = () => {
  return async (dispatch) => {
    const users = await signinService.getAll();
    dispatch({
      type: "Users-Initialized",
      payload: {
        users,
      },
    });
  };
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "Users-Initialized":
      return action.payload.users;
    case "User-Signin":
      return [...state, action.payload.user];
    default:
      return state;
  }
};

export default userReducer;
