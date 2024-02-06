class IndexController {
  static index (req, res, next) {
    res.render('index', { view: 'home' })
  }
}

module.exports = IndexController
