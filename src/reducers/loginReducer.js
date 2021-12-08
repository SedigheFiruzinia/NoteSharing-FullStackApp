

export const loggedin = (user) => {
  return async dispatch => {
    //const user = await loginService(credentials)
    dispatch({
      type:'Logged-In',
      payload:{
        user
      }
    })
  }
}
export const loggedOut = () => {
  return dispatch => {
    dispatch({
      type:'Logged-Out',
    })
  }
}

const userReducer = (state=null,action) => {
  switch(action.type){
  case 'Logged-In':
    return { user: action.payload.user }
  case 'Logged-Out':
    return null
  default:
    return state
  }

}

export default userReducer