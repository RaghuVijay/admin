import { Module } from '@nestjs/common';
import { ParkingCapacityController } from './parking-capacity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingCapacity } from './parking-capacity.entity';
import { CreateCapacityProvider } from './providers/create-capacity.provider';
import { GetCapacityProvider } from './providers/get-capacity.provider';
import { UpdateCapacityProvider } from './providers/update-capacity.provider';
import { DeleteCapacityProvider } from './providers/delete-capacity.provider';
import { ParkingCapacityService } from './providers/parking-capacity.service';

@Module({
  controllers: [ParkingCapacityController],
  imports: [TypeOrmModule.forFeature([ParkingCapacity])],
  exports: [TypeOrmModule],
  providers: [CreateCapacityProvider, GetCapacityProvider, UpdateCapacityProvider, DeleteCapacityProvider, ParkingCapacityService],
})
export class ParkingCapacityModule {}
