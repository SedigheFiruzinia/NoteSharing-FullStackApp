const config = require('./utils/config')
const express = require('express')
require('express-async-errors')//eliminates trycatch next(exception)
const app = express()
const cors = require('cors')
const noteRouter = require('./controllers/note')
const userRouter = require('./controllers/user')
const loginRouter = require ('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())


app.use(middleware.userExtractor)
app.use(middleware.requestLogger)


app.use('/api/notes', noteRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

// if(process.env.NODE_ENV === 'test'){
//   const testingRouter = require('./controllers/testing')
//   console.log('Test')
//   app.use('/api/testing',testingRouter)
// }

//errorHandler


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app

