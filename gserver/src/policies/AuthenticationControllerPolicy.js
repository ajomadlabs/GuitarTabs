// Calling the Joi Module
const Joi = require('joi')

module.exports = {
  // Defining the register policy
  register (req, res, next) {
    
    // Defining validation Schema
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    
    // Validating request against schema
    const{error, value} = Joi.validate(req.body, schema)
    
    // Handling Errors
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid email id'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Type a correct password'
          })
          break
        default:
          res.send({
            error: 'Invalid registration details'
          })
      }
    } else {
      // Move to next param in routes path
      next()
    }
  }
}