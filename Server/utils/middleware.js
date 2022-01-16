const logger = require('./logger')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const userSchema = require('../schema/user')


const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('owner:  ', request.owner)
    logger.info('---')
    next()
}

/*
const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = authorization.substring(7)
    }
    next()
  }
*/
const userExtractor = async (request, response, next) => {

    const authorization = request.get('authorization')

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = authorization.substring(7)
        const decodedToken = jwt.verify(request.token, config.SECRET)
        if ((decodedToken.id)) {
            request.owner = await userSchema.findById(decodedToken.id)
        }
    }
    
    next()
}

const errorHandler = (error, request, response, next) => {
    if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
    next(error) 
  }


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }


module.exports = {
    requestLogger,
    userExtractor,
    errorHandler,
    unknownEndpoint
}