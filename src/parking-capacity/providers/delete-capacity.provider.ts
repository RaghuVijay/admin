import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingCapacity } from '../parking-capacity.entity';
import { InsertValuesMissingError, Repository } from 'typeorm';

@Injectable()
export class DeleteCapacityProvider {
  constructor(
    @InjectRepository(ParkingCapacity)
    private ParkingCapacityRepository: Repository<ParkingCapacity>,
  ) {}
  public async deleteCapacity(id: string) {
    if (!id) {
      throw new InsertValuesMissingError();
    }
    let capacity = await this.ParkingCapacityRepository.findOne({
      where: { code: id },
    });
    if (!capacity) {
      throw new NotFoundException(`capacity with code ${id} not found`);
    }
    await this.ParkingCapacityRepository.remove(capacity);
    return `the capacity with ${id} has been deleted`;
  }
}
