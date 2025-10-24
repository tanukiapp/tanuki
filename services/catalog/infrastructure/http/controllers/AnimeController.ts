import { Request, Response } from 'express'
import { AnimeService } from '../../../application/AnimeService'
import { AnimeRepositoryImpl } from '../../db/AnimeRepositoryImpl'
import { Anime } from '../../../domain/entities/Anime'

const service = new AnimeService(AnimeRepositoryImpl)

export async function getAnimes (req: Request, res: Response): Promise<Response<Anime[] | null>> {
  const result = await service.listAll()
  return res.json(result)
}
