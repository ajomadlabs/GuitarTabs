// Declaring the Endpoints that refers the Controllers
// Calling the AuthenticationController
const AuthenticationController = require('./controllers/AuthenticationController')
// Calling the AuthenticationControllerPolicy
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// Calling the SongsController
const SongsController = require('./controllers/SongsController')

// Creating Routes
module.exports = (app) => {
  // Creating a route for register endpoint
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  // Creating a route for login endpoint
  app.post('/login', AuthenticationController.login)
  // Creating a route for songs endpoint
  app.get('/songs', SongsController.index)
  // Creating a route for post method of songs
  app.post('/songs', SongsController.post)
}
