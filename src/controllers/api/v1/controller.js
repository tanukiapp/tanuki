const Kitsu = require('kitsu')
// const assignWeek = require('../../../lib/assignWeek')

const kitsu = new Kitsu()

exports.index = (req, res) => {
  res.render('api/api_index', { title: 'Tanuki API Docs' })
}

exports.anime = (req, res) => {
  // By default, limit is 20 items per page
  let pageLimit = (req.query.limit) ? parseInt(req.query.limit) : 20

  // Since maximum supported by Kitsu API is 20, in case limit is bigger, reduce it to 20
  pageLimit = (pageLimit > 20) ? 20 : pageLimit

  const params = {
    params: {
      fields: {
        anime: 'id,titles,status,subtype'
      },
      filter: {
        status: ['current'],
        subtype: 'TV'
      },
      sort: 'popularityRank',
      page: {
        limit: pageLimit
      }
    }
  }

  kitsu.get('anime', params).then(
    (response) => res.send(response.data),
    (error) => res.send(error)
  )
}

exports.upcoming = (req, res) => {
  // By default, limit is 20 items per page
  let pageLimit = (req.query.limit) ? parseInt(req.query.limit) : 20

  // Since maximum supported by Kitsu API is 20, in case limit is bigger, reduce it to 20
  pageLimit = (pageLimit > 20) ? 20 : pageLimit

  const params = {
    params: {
      fields: {
        anime: 'id,titles,status,subtype'
      },
      filter: {
        status: 'upcoming'
      },
      sort: 'popularityRank',
      page: {
        limit: pageLimit
      }
    }
  }

  kitsu.get('anime', params).then(
    (response) => res.send(response.data),
    (error) => res.send(error)
  )
}
