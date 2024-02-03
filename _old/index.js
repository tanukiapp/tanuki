const express = require('express')
const cors = require('cors')
const Kitsu = require('kitsu')
const assignWeek = require('../lib/assignWeek')

const app = express()
const api = new Kitsu()

const PORT = 8080
const HOST = '0.0.0.0'

app.use(cors())

app.get('/anime', (req, res) => {
  const params = {
    params: {
      filter: {
        status: ['current'],
        subtype: 'TV'
      },
      sort: 'popularityRank',
      page: {
        limit: 20
      }
    }
  }
  api.get('anime', params).then(
    (response) => {
      res.send(assignWeek.assignWeek(response.data))
    },
    (error) => res.send(error)
  )
})

app.get('/upcoming', (req, res) => {
  const params = {
    filter: {
      status: 'upcoming'
    },
    sort: 'popularityRank',
    page: {
      limit: 20
    }
  }

  api.get('anime', params).then(
    (response) => {
      res.send(response.data)
    },
    (error) => res.send(error)
  )
})

app.get('/upcoming/:season', (req, res) => {
  const params = {
    filter: {
      status: 'upcoming',
      season: req.params.season
    },
    sort: 'popularityRank',
    page: {
      limit: 20
    }
  }

  api.get('anime', params).then(
    (response) => {
      res.send(response.data)
    },
    (error) => res.send(error)
  )
})

app.get('/roulette/:userId', (req, res) => {
  api.get('/library-entries', {
    filter: {
      userId: req.params.userId,
      status: 'planned',
      kind: 'anime'
    },
    page: {
      limit: 50
    }
  }).then(
    (response) => {
      const rndIndex = Math.floor(Math.random() * (response.data.length - 0 + 1) + 0)
      const anime = `library-entries/${response.data[rndIndex].id}/anime`

      api.get(anime, {}).then(
        (response) => {
          res.send(response)
        }
      )
    }
  )
})

app.post('/export', (req, res) => {
  const response = api.get('anime')
  res.send(response)
})

app.listen(PORT, HOST)
