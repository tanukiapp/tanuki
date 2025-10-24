import { Anime } from '../entities/Anime'

export interface IAnimeRepository {
  all: () => Promise<Anime[] | null>
  getById: (id: string) => Promise<Anime | null>
}
