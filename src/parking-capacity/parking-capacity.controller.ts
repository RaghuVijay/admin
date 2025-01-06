import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParkingCapacityService } from './providers/parking-capacity.service';
import { CreateCapacityDto } from './dtos/createParkingSpace.dto';
import { UpdateCapacityDto } from './dtos/updateParkingSpace.dto';

@Controller('parking-capacity')
export class ParkingCapacityController {
  constructor(private readonly parkingCapacity: ParkingCapacityService) {}
  @Post('/add')
  public async addCapacity(@Body() parkingCapacity: CreateCapacityDto) {
    return this.parkingCapacity.createCapacity(parkingCapacity);
  }
  @Get('/:id?')
  public async getCapacity(@Param('id') id?: string) {
    return this.parkingCapacity.getParkingCapacity(id);
  }
  @Patch('/update/:id')
  public async updateCapacitydata(
    @Body() updateData: UpdateCapacityDto,
    @Param('id') id: string,
  ) {
    return this.parkingCapacity.updateCapacitydata(updateData, id);
  }
  @Delete('/:id')
  public async deleteCapacity(@Param('id') id: string) {
    return this.parkingCapacity.deleteParkingCapacity(id);
  }
}
