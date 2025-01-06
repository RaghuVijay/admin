import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Malls } from '../malls.entity';
import { Repository } from 'typeorm';
import { UpdateMallsDto } from '../dtos/update-mall.dto';

@Injectable()
export class UpdateMallProvider {
  constructor(
    @InjectRepository(Malls)
    public mallsRepository: Repository<Malls>,
  ) {}
  public async updateMalldata(data: UpdateMallsDto, id: string) {
    let mall = await this.mallsRepository.findOne({
      where: { code: id },
    });
    if (!mall) {
      throw new NotFoundException(`MALL with code ${id} not found`);
    }

    Object.assign(mall, data);

    return await this.mallsRepository.save(mall);
  }
}
