import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLevel } from '../parking-level.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetParkingAreaProvider {
  constructor(
    @InjectRepository(ParkingLevel)
    private readonly parkingLevel: Repository<ParkingLevel>,
  ) {}
  public async getParkingLevelData(id?: string) {
    if (id) {
      const level = await this.parkingLevel.findOne({
        where: { code: id },
      });
      if (!level) {
        throw new NotFoundException(`Level with code ${id} not found`);
      }
      return level;
    }

    const allMalls = await this.parkingLevel.find();
    return allMalls;
  }
}
