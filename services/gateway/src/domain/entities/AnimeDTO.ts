export class AnimeDTO {
  constructor (
    public readonly id: number,
    public title: string,
    public synopsis: string,
    public posterUrl: string
  ) {}
}
