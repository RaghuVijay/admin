import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ParkingLevelService } from './providers/parking-level.service';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import { CreateParkingDto } from './dtos/createParkingSpace.dto';
import { ActiveUserData } from 'src/auth/interface/active-user-interface';
import { Auth } from 'src/auth/decorator/auth-type.decorator';
import { AuthType } from 'src/auth/enums/authType.enum';

@Controller('parking-level')
export class ParkingLevelController {
  constructor(private readonly parkingLevelService: ParkingLevelService) {}

  @Post('/add')
  @Auth(AuthType.Bearer)
  public async addParkingSpace(
    @Body()
    data: CreateParkingDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    console.log(data, user);
    return this.parkingLevelService.createSpace(data, user);
  }
  @Get('/:id?')
  @Auth(AuthType.Bearer)
  public async getMall(@Param('id') id?: string) {
    return this.parkingLevelService.getSpace(id);
  }
  @Delete('/:id')
  public async deleteMall(@Param('id') id: string) {
    return this.parkingLevelService.deleteSpace(id);
  }
}
