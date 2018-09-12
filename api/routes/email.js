const { Router } = require('express')

const router = Router()


/* GET users listing. */
router.get('/email', function (req, res, next) {
  console.log(req)
})



module.exports = router
