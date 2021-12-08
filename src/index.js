import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
//import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'
import noteReducer from './reducers/noteReducer'
import loginReducer from './reducers/loginReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import userReducer from './reducers/userReducer'

const reducer = combineReducers ({
  //Notification: notificationReducer,
  Notes: noteReducer,
  LoggedIn:loginReducer,
  Users:userReducer
})

const composeEnhancer = composeWithDevTools({ trace:true })

const store=createStore(reducer , composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)