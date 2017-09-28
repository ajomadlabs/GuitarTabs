// Defining a file for db connection

// Calling the Node file system
const fs = require('fs')
// Calling the Path Module
const path = require('path')
// Calling the Sequelize Model
const Sequelize = require('sequelize')
// Calling the Config file
const config = require('../config/config')
// Calling the db
const db = {}

// Declaring a Sequelize Instance
// Passing different params like db, username of db, password for db and other options 

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// Helper Function for loading Models
// We read the current directory
// Filter the file without including 'index.js'
// Iterate through each file to load a model

fs
  .readdirSync(__dirname)
  .filter((file) => 
    file !== 'index.js' 
  ) 
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    //console.log(model)
    db[model.name] = model
  })

// Access to both Objects
db.sequelize = sequelize
db.Sequelize = Sequelize

// Exporting the db
module.exports = db
