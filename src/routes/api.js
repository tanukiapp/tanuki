const { index, anime, upcoming } = require('../controllers/api/v1/controller')

const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  index(req, res)
})

router.get('/anime/', function (req, res, next) {
  anime(req, res)
})

router.get('/upcoming/', function (req, res, next) {
  upcoming(req, res)
})

module.exports = router
