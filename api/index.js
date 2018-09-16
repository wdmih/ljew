const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('express-mailer')
const path = require('path')

// Create express instnace
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, '/views/email_templ'))
app.set('view engine', 'pug')
mailer.extend(app, {
  from: 'no-reply@le-sia.com.ua',
  host: 'smtp.gmail.com',
  secureConnection: true,
  port: 465,
  transportMethod: 'SMTP',
  auth: {
    user: 'vadim.v.ignatenko@gmail.com',
    pass: 'glutter11'
  }
})

app.post('/email', (req, res, next) => {
  if (req.body) {
    console.log(req.body)
    app.mailer.send('email', {
      to: 'glutter@ukr.net',
      subject: 'Test email',
      data: req.body
    }, function (err) {
      if (err) {
        console.log(err)
        res.send('There was an error rendering the email')
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
