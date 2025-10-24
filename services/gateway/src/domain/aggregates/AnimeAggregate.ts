// apps/gateway/src/domain/AnimeAggregate.ts
import { AnimeDTO } from '../entities/AnimeDTO'
import { ScheduleVO } from '../valueObjects/ScheduleVO'

export class AnimeAggregate {
  constructor (
    public readonly anime: AnimeDTO,
    public readonly schedule: ScheduleVO[]
  ) {}
}
