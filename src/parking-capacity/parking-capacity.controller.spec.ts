import { Test, TestingModule } from '@nestjs/testing';
import { ParkingCapacityController } from './parking-capacity.controller';

describe('ParkingCapacityController', () => {
  let controller: ParkingCapacityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingCapacityController],
    }).compile();

    controller = module.get<ParkingCapacityController>(ParkingCapacityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
