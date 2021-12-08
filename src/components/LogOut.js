
import { useDispatch } from 'react-redux'
import { loggedOut } from '../reducers/loginReducer'

const Logout =() => {
    const dispatch = useDispatch()
    window.localStorage.clear()
    dispatch(loggedOut())
  }

export default Logout

