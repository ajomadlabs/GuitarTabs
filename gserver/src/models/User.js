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
  })
  return User
}
