import { Express } from 'express'
import { getAnimes } from '../controllers/AnimeController'

function asyncHandler (fn: Function) {
  return (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

export function initializeRoutes (app: Express): void {
  app.get('/healthcheck', (req, res) => {
    res.send('Service is up and running!')
  })
  app.get('/anime/', asyncHandler(getAnimes))
}
