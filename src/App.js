import React, { useEffect } from 'react'
import noteService from './services/notes'
import NavBar from './components/NavBar'
import { useDispatch } from 'react-redux'
import { notesInitialized } from './reducers/noteReducer'
import { loggedin } from './reducers/loginReducer'
import { usersInitialized } from './reducers/userReducer'
import UserPage from './components/UserPage'
//import Notification from './components/Notification'
//import { loginFailed } from './reducers/notificationReducer'
import{
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'


const App = () => {
  const dispatch = useDispatch()

  ////////////////////////////////////////////
  useEffect( () => {
    console.log('useEffect users rendering')
    dispatch(usersInitialized())
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  /////////////////////////////////////////////
  useEffect(() => {
    console.log('useEffect notes rendering')
    dispatch(notesInitialized())
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  /////////////////////////////////////////////////
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


  //////////////////////////////////////////////

  return (

    <div className="container">
        <Router>
          <NavBar/>
          <p className='mt-5 pt-3'>{"  "}</p>

          <Routes>
            {/* <Route path='/users/:id'>
              <UserInfo/>
            </Route> */}
            {/* <Route path='/users'>
              <Users/>
            </Route> */}
            {/* <Route path='/blogs/:id'>
              <BlogInfo/>
            </Route> */}
            <Route path='/' element={<UserPage />} />
          </Routes>
        </Router>
 
    </div>

  )
}

export default App