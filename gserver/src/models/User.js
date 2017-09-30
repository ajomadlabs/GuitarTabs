//Calling Promise library
const Promise = require('bluebird')
// Calling the bcrypt Module
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// Function for Hashing Password
function hashPassword (user, options) {
  const SALT_FACTOR = 8
  console.log('hashPassword')
  if(!user.changed('password')) {
    return
  }

  return bcrypt.genSaltAsync(SALT_FACTOR).then(salt => bcrypt.hashAsync(user.password, salt, null)).then(hash => {
    user.setDataValue('password', hash)
  })
}
// Defining a module for Models
module.exports = (sequelize, dataTypes) => {
  // Defining an User Model
  // Consists of email and password
  const User = sequelize.define('User', {
    email: {
      type: dataTypes.STRING,
      unique: true
    },
    password: dataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return User
}
