import { forwardRef, Module } from '@nestjs/common';
import { ParkingLevelController } from './parking-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingLevel } from './parking-level.entity';
import { ParkingLevelService } from './providers/parking-level.service';
import { CreateParkingAreaProvider } from './providers/create-parking-area.provider';
import { GetParkingAreaProvider } from './providers/get-parking-area.provider';
import { UpdateParkingAreaProvider } from './providers/update-parking-area.provider';
import { DeleteParkingAreaProvider } from './providers/delete-parking-area.provider';
import { ParkingCapacityModule } from 'src/parking-capacity/parking-capacity.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParkingLevel]),
    forwardRef(() => ParkingCapacityModule),
    HttpModule,
    ConfigModule,
  ],
  exports: [ParkingLevelService, GetParkingAreaProvider],
  controllers: [ParkingLevelController],
  providers: [
    ParkingLevelService,
    CreateParkingAreaProvider,
    GetParkingAreaProvider,
    UpdateParkingAreaProvider,
    DeleteParkingAreaProvider,
  ],
})
export class ParkingLevelModule {}
