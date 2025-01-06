import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLevel } from '../parking-level.entity';
import { Repository } from 'typeorm';
import { CreateParkingDto } from '../dtos/createParkingSpace.dto';
import { ActiveUserData } from 'src/auth/interface/active-user-interface';

@Injectable()
export class CreateParkingAreaProvider {
  constructor(
    @InjectRepository(ParkingLevel)
    private parkinglevelrepository: Repository<ParkingLevel>,
  ) {}
  public async createParkingSpace(
    data: CreateParkingDto,
    user: ActiveUserData,
  ) {
    console.log(data, user);
    let level = await this.parkinglevelrepository.create({
      mall_code: user.mall_code,
    });
    let newLevel = await this.parkinglevelrepository.save(level);
    return newLevel;
  }
}
// let existingSpace = undefined;
//      try {
//           let existingSpace = await this.parkingCapacityRepository.findOne({
//             where: { level_code:  },
//           });
//           if (existingSpace) {
//             throw new BadRequestException(
//               `A Mall with Name '${mallDto.name}' already exists. Please use a different Name.`,
//             );
//           }
//         } catch (error) {
//           if (error instanceof BadRequestException) {
//             throw error; // Rethrow client-related exceptions
//           }
//           console.error('Database operation failed:', error.message);
//           throw new RequestTimeoutException(
//             'Unable to process your request at the moment. Please try again later.',
//             { description: 'Database connection error' },
//           );
//         }
