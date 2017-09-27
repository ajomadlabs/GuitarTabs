//  Calling the Express.js
const express = require('express')
// Calling the BodyParser
const bodyParser = require('body-parser')
// Calling the Cors
const cors = require('cors')
// Calling the Morgan
const morgan = require('morgan')

// Creating an Express App
const app = express()
// Allows the app to use morgan for formatting a log
app.use(morgan('combined'))
// Allows the app to use bodyParser for accepting json
app.use(bodyParser.json())
// Allows the app to use cors for accepting data from any domains
app.use(cors())

// Creating Endpoint by sending a GET request
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello, World'
  })
})

// Makes the App listen to port 8081
app.listen(process.env.PORT || 8081)
