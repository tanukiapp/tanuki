import { Express } from 'express'
import { getAnimes } from '../controllers/AnimeController'

export function initializeRoutes (app: Express) {
  app.get('/', (req, res) => {
    res.send('Service is up and running!')
  })
  app.get('/anime/', getAnimes)
}
