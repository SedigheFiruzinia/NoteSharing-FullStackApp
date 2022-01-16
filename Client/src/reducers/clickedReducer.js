export const clicked = (note) => {
  return async (dispatch) => {
    dispatch({
      type: "Clicked",
      payload: {
        note,
      },
    });
  };
};
export const unclicked = () => {
  return (dispatch) => {
    dispatch({
      type: "Un-Clicked",
    });
  };
};

const clickedReducer = (state = null, action) => {
  switch (action.type) {
    case "Clicked":
      return { note: action.payload.note };
    case "Un-Clicked":
      return null;
    default:
      return state;
  }
};

export default clickedReducer;
