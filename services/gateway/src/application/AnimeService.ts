import { IAnimeRepository } from "../domain/repositories/IAnimeRepository";

export class AnimeService {
  constructor(private repo: IAnimeRepository) {}

  async listAll() {
    return this.repo.findAll();
  }
}