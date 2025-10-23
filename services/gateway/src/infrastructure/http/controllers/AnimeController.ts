import { Request, Response } from "express";
import { AnimeService } from "../../../application/AnimeService";
import { AnimeRepositoryImpl } from "../../db/AnimeRepositoryImpl";

export const getAnimes = async (req: Request, res: Response) => {
  const service = new AnimeService(AnimeRepositoryImpl);
  const result = await service.listAll();
  res.json(result);
};
