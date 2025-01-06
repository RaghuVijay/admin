import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLevel } from '../parking-level.entity';
import { InsertValuesMissingError, Repository } from 'typeorm';

@Injectable()
export class DeleteParkingAreaProvider {
  constructor(
    @InjectRepository(ParkingLevel)
    private readonly parkingLevel: Repository<ParkingLevel>,
  ) {}
  public async deleteLevel(id: string) {
    if (!id) {
      throw new InsertValuesMissingError();
    }
    let level = await this.parkingLevel.findOne({
      where: { code: id },
    });
    if (!level) {
      throw new NotFoundException(`level with code ${id} not found`);
    }
    await this.parkingLevel.remove(level);
    return `the level with ${id} has been deleted`;
  }
}
