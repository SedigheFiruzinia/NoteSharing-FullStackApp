import React,{useState} from "react"
import noteService from '../services/notes'
import loginService from '../services/login'
import { useDispatch } from 'react-redux'
import { loggedin } from '../reducers/loginReducer'
import { Form,Button } from "react-bootstrap"
import {Link} from 'react-router-dom'


const LoginForm = () => {
      
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
 // ///////////////////////////////////////////

 const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService ({ username , password })
      window.localStorage.setItem('loggedInUser', JSON.stringify(user))

      noteService.setToken(user.token)
      setUsername('')
      setPassword('')
      dispatch(loggedin(user))
     

    } catch (exception) {
      console.log(exception)
      //dispatch(loginFailed())
    }
  }




    return (
    <div className="container">
    <div className="col-3 bg-light p-4 border ">

    <h2>login</h2>
    
    <Form onSubmit={handleLogin}>
        <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <div></div>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <p> </p>
           
            <Button variant="primary" type="submit">
            login
            </Button>
        </Form.Group>
    </Form>
    </div>
    </div>
  )
}
 

  export default LoginForm