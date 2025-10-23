import { IAnimeRepository } from "../../domain/repositories/IAnimeRepository";
import { Anime } from "../../domain/entities/Anime";

export const AnimeRepositoryImpl: IAnimeRepository = {
  async findAll(): Promise<Anime[] | null> {
    const data = [
      { id: 1, title: "Naruto", synopsis: "A story about a ninja.", posterUrl: "http://example.com/naruto.jpg" },
      { id: 2, title: "One Piece", synopsis: "A story about pirates.", posterUrl: "http://example.com/onepiece.jpg" },
    ];
    return data.map(item => new Anime(item.id, item.title, item.synopsis, item.posterUrl));
  },
  
  async findById(id: string): Promise<Anime | null> {
    const data = { id: 1, title: "Naruto", synopsis: "A story about a ninja.", posterUrl: "http://example.com/naruto.jpg" };
    return data ? new Anime(data.id, data.title, data.synopsis, data.posterUrl) : null;
  },
};