import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from './LoginForm'
import Profile from './Profile'
const UserPage = () => {
  const loggedInUser = useSelector(element => element.LoggedIn)


  return(
    <div className='mt-5'>  
      {!loggedInUser ? <LoginForm/> : <Profile/>}
    </div> 
)
}

export default UserPage
