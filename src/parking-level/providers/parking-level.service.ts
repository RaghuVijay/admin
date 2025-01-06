import { Injectable } from '@nestjs/common';
import { CreateParkingAreaProvider } from './create-parking-area.provider';
import { GetParkingAreaProvider } from './get-parking-area.provider';
import { UpdateParkingAreaProvider } from './update-parking-area.provider';
import { DeleteParkingAreaProvider } from './delete-parking-area.provider';
import { CreateParkingDto } from '../dtos/createParkingSpace.dto';
import { ActiveUserData } from 'src/auth/interface/active-user-interface';

@Injectable()
export class ParkingLevelService {
  constructor(
    private readonly createParkingArea: CreateParkingAreaProvider,

    private readonly getParkingArea: GetParkingAreaProvider,

    private readonly deleteParkingArea: DeleteParkingAreaProvider,
  ) {}
  public async createSpace(data: CreateParkingDto, user: ActiveUserData) {
    return this.createParkingArea.createParkingSpace(data, user);
  }
  public async getSpace(code?: string) {
    return this.getParkingArea.getParkingLevelData(code);
  }
  public async deleteSpace(code: string) {
    return this.deleteParkingArea.deleteLevel(code);
  }
}
