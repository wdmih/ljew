const express = require('express')
const mailer = require('express-mailer')
const path = require('path')
const config = require('./config/config')

// Create express instnace
const app = express()

app.use(express.json())

app.set('views', path.join(__dirname, '/views/email_templ'))
app.set('view engine', 'pug')
mailer.extend(app, {
  from: config.emailSettings.from,
  host: config.emailSettings.host,
  secureConnection: config.emailSettings.secureConnection,
  port: config.emailSettings.port,
  transportMethod: config.emailSettings.transportMethod,
  auth: {
    user: config.emailSettings.user,
    pass: config.emailSettings.pass
  }
})

app.post('/email', (req, res, next) => {
  if (req.body) {
    app.mailer.send('email', {
      to: config.emailSettings.to,
      subject: config.emailSettings.subject,
      data: req.body
    }, function (err) {
      if (err) {
        console.log(err)
        res.status(500).json({message: 'There was an error rendering the email'}).send(err)
        return
      }
      res.send('Email sent successfully')
    })
  } else {
    return res.status(401).json({ message: 'No body' })
  }
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
