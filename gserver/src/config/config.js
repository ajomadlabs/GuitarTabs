// Defining the Configuration Module
module.exports = {
  // Definig the port
  port: process.env.PORT || 8081,
  // Defining the database
  db: {
    database: process.env.DB_NAME || 'guitartab',
    user: process.env.DB_USER || 'guitartab',
    password: process.env.DB_PASS || 'guitartab',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './guitartab.sqlite'
    }
  }
}
