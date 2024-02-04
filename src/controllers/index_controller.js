var express = require('express');
var router = express.Router();
const i18next = require('i18next');


class IndexController {
   static index(req, res, next) {
    res.render('index')
  }
}

module.exports = IndexController;