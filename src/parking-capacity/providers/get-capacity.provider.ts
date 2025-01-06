import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingCapacity } from '../parking-capacity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetCapacityProvider {
  constructor(
    @InjectRepository(ParkingCapacity)
    private readonly parkingCapacityrepository: Repository<ParkingCapacity>,
  ) {}
  public async getParkingCapacityData(id?: string) {
    if (id) {
      const GetCapacityProvider = await this.parkingCapacityrepository.findOne({
        where: { code: id },
      });
      if (!GetCapacityProvider) {
        throw new NotFoundException(
          `GetCapacityProvider with code ${id} not found`,
        );
      }
      return GetCapacityProvider;
    }

    const allCapacity = await this.parkingCapacityrepository.find();
    return allCapacity;
  }
}
