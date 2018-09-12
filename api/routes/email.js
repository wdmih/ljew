const { Router } = require('express')

const router = Router()


/* GET users listing. */
router.post('/email', function (req, res, next) {
  console.log(req.body)
  res.status(200).send(JSON.stringify(req.body))
})



module.exports = router
