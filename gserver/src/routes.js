// Declaring the Endpoints that refers the Controllers
// Calling the AuthenticationController
const AuthenticationController = require('./controllers/AuthenticationController')
// Calling the AuthenticationControllerPolicy
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// Creating Routes
module.exports = (app) => {
  // Creating a route for register endpoint
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  // Creating a route for login endpoint
  app.post('/login', AuthenticationController.login)
}
