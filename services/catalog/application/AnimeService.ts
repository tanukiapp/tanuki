import { IAnimeRepository } from '../domain/repositories/IAnimeRepository'

export class AnimeService {
  constructor (private readonly animeRepository: IAnimeRepository) {}

  async listAll (): Promise<ReturnType<IAnimeRepository['all']>> {
    return await this.animeRepository.all()
  }
}
