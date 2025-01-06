import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingCapacity } from '../parking-capacity.entity';
import { Repository } from 'typeorm';
import { CreateCapacityDto } from '../dtos/createParkingSpace.dto';

@Injectable()
export class CreateCapacityProvider {
  constructor(
    @InjectRepository(ParkingCapacity)
    private parkingCapacity: Repository<ParkingCapacity>,
  ) {}
  public async createParkingSpace(data: CreateCapacityDto) {
    let Space = await this.parkingCapacity.create({
      ...data,
    });
    let newSpace = await this.parkingCapacity.save(Space);

    return newSpace;
  }
}
