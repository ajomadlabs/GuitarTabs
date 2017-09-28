// Calling the Express.js
const express = require('express')
// Calling the BodyParser
const bodyParser = require('body-parser')
// Calling the Cors
const cors = require('cors')
// Calling the Morgan
const morgan = require('morgan')
// Calling the Sequelize
const {sequelize} = require('./models')
// Calling the config
const config = require('./config/config')

// Creating an Express App
const app = express()
// Allows the app to use morgan for formatting a log
app.use(morgan('combined'))
// Allows the app to use bodyParser for accepting json
app.use(bodyParser.json())
// Allows the app to use cors for accepting data from any domains
app.use(cors())

// Calling the Routes Module
require('./routes')(app)

// Connecting the Database using Sequqlize
sequelize.sync()
  .then(() => {
    // Makes the App listen to port 8081
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
