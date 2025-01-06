import { Injectable } from '@nestjs/common';
import { CreateCapacityProvider } from './create-capacity.provider';
import { GetCapacityProvider } from './get-capacity.provider';
import { UpdateCapacityProvider } from './update-capacity.provider';
import { DeleteCapacityProvider } from './delete-capacity.provider';
import { CreateCapacityDto } from '../dtos/createParkingSpace.dto';
import { UpdateCapacityDto } from '../dtos/updateParkingSpace.dto';

@Injectable()
export class ParkingCapacityService {
  constructor(
    private readonly addCapacity: CreateCapacityProvider,

    private readonly getCapacity: GetCapacityProvider,

    private readonly updateCapacity: UpdateCapacityProvider,

    private readonly deleteCapacity: DeleteCapacityProvider,
  ) {}
  public async createCapacity(data: CreateCapacityDto) {
    return await this.addCapacity.createParkingSpace(data);
  }
  public async getParkingCapacity(id?: string) {
    return await this.getCapacity.getParkingCapacityData(id);
  }
  public async updateCapacitydata(data: UpdateCapacityDto, id: string) {
    return await this.updateCapacity.updateParkingCapacityData(data, id);
  }
  public async deleteParkingCapacity(id: string) {
    return await this.deleteCapacity.deleteCapacity(id);
  }
}
