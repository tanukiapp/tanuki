import { Anime } from "../entities/Anime";

export interface IAnimeRepository {
  findAll(): Promise<Anime[] | null>;
  findById(id: string): Promise<Anime | null>;
}