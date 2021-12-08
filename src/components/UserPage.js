import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from './LoginForm'

const UserPage = () => {
  const loggedInUser = useSelector(element => element.loggedIn)
  

  return(
    <div className='mt-5'>  
      {!loggedInUser && <LoginForm/>}
        <div className="card" style={{width : '18rem'}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
    </div> 
)
}

export default UserPage
