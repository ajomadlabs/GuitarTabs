// Defining the AuthenticationController
// Calling the User Model
const {User} = require('../models')

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
  } 
}