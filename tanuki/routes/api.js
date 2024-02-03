const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('api_index', { title: 'Tanuki API Docs' })
})

router.get('/anime/', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
