const express = require('express')
const router = express.Router()

const AppController = require('../controllers/app_controller')

router.get('/', AppController.index)

router.get('/airing', AppController.airing_view)

router.get('/upcoming', function (req, res, next) {
  res.render('airing')
})

module.exports = router
