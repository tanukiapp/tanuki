const express = require('express')
const router = express.Router()

const IndexController = require('../controllers/index_controller')

router.get('/', IndexController.index)

router.get('/airing', function (req, res, next) {
  res.render('airing')
})

router.get('/upcoming', function (req, res, next) {
  res.render('airing')
})

module.exports = router
