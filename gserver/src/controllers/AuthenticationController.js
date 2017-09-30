// Defining the AuthenticationController
// Calling the User Model
const {User} = require('../models')
// Callig the JsonWebToken for Authentication
const jwt = require('jsonwebtoken')
// Calling the Config
const config = require('../config/config')

// Helper Function for returning a jwt Token
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 *24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
    
  })
}
module.exports = {
  // Defining the register endpoint
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err){
      res.status(400).send({
        error: 'This email has already been used'
      })
    }
  },

  // Defining the login endpoint
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'Invalid email or password'
        })
      }
      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Invalid email or password'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occuered trying to log in'
      })
    }
  }

}