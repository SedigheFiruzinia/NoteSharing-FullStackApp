import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import LoginForm from './LoginForm'
// import {Link} from 'react-router-dom'
import Profile from './Profile'
import noteService from '../services/notes'
import { loggedin } from '../reducers/loginReducer'


const LoginPage = () => {
  const loggedInUser = useSelector(element => element.LoggedIn)
  const dispatch = useDispatch()
///////////////////////////////////////
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedInUser')
    console.log('useEffect loggedinuser rendering')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      dispatch(loggedin(user))
      noteService.setToken(user.token)
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(

    <div className='mt-5 pl-1'> 
      {!loggedInUser ? <LoginForm/> : <Profile/>}
    </div> 

)
}

export default LoginPage
