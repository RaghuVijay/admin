import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Malls } from '../malls.entity';
import { InsertValuesMissingError, Repository } from 'typeorm';

@Injectable()
export class DeleteMallProvider {
  constructor(
    @InjectRepository(Malls)
    public mallsRepository: Repository<Malls>,
  ) {}
  public async deleteMall(id: string) {
    if (!id) {
      throw new InsertValuesMissingError();
    }
    let mall = await this.mallsRepository.findOne({
      where: { code: id },
    });
    if (!mall) {
      throw new NotFoundException(`Mall with code ${id} not found`);
    }
    await this.mallsRepository.remove(mall);
    return `the Mall with ${id} has been deleted`;
  }
}
