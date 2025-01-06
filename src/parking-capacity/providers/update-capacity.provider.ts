import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingCapacity } from '../parking-capacity.entity';
import { Repository } from 'typeorm';
import { UpdateCapacityDto } from '../dtos/updateParkingSpace.dto';

@Injectable()
export class UpdateCapacityProvider {
  constructor(
    @InjectRepository(ParkingCapacity)
    private ParkingCapacityRepository: Repository<ParkingCapacity>,
  ) {}
  public async updateParkingCapacityData(data: UpdateCapacityDto, id: string) {
    let capacity = await this.ParkingCapacityRepository.findOne({
      where: { code: id },
    });
    if (!capacity) {
      throw new NotFoundException(`capacity with code ${id} not found`);
    }

    Object.assign(capacity, data);

    return await this.ParkingCapacityRepository.save(capacity);
  }
}
