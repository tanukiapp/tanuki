import { IAnimeRepository } from '../domain/repositories/IAnimeRepository'

export class AnimeService {
  constructor (private readonly repo: IAnimeRepository) {}

  async listAll () {
    return this.repo.findAll()
  }
}
