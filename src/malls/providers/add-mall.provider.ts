import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Malls } from '../malls.entity';
import { Repository } from 'typeorm';
import { MallsDto } from '../dtos/malls.dto';

@Injectable()
export class AddMallProvider {
  constructor(
    @InjectRepository(Malls)
    public mallsRepository: Repository<Malls>,
  ) {}
  public async addMall(mallDto: MallsDto) {
    try {
      let existingMall = await this.mallsRepository.findOne({
        where: { name: mallDto.name },
      });
      if (existingMall) {
        throw new BadRequestException(
          `A Mall with Name '${mallDto.name}' already exists. Please use a different Name.`,
        );
      }
      const newMall = await this.mallsRepository.create(mallDto);
      return await this.mallsRepository.save(newMall);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error; // Rethrow client-related exceptions
      }

      console.error('Database operation failed:', error.message);

      throw new RequestTimeoutException(
        'Unable to process your request at the moment. Please try again later.',
        { description: 'Database connection error' },
      );
    }
  }
}
