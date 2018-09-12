const express = require('express')
const mailer = require('express-mailer')

// Create express instnace
const app = express()

mailer.extend(app, {
  from: 'no-reply@le-sia.com.ua',
  host: 'smtp.gmail.com',
  secureConnection: true,
  port: 465,
  transportMethod: 'SMTP',
  auth: {
    user: 'gmail.user@gmail.com',
    pass: 'userpath'
  }
})

// Require API routes
// const users = require('./routes/users')
const email = require('./routes/email')

// Import API Routes
app.use(email)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
