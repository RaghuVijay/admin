import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Malls } from '../malls.entity';

@Injectable()
export class GetMallProvider {
  constructor(
    @InjectRepository(Malls)
    public mallsRepository: Repository<Malls>,
  ) {}
  public async getMallData(id?: string) {
    if (id) {
      const mall = await this.mallsRepository.findOne({
        where: { code: id },
      });
      if (!mall) {
        throw new NotFoundException(`User with code ${id} not found`);
      }
      return mall;
    }

    const allMalls = await this.mallsRepository.find();
    return allMalls;
  }
  public async getMallBySearch(name?: string, location?: string) {
    const searchConditions: any = {};

    if (name) {
      searchConditions.name = name;
    }

    if (location) {
      searchConditions.location = location;
    }

    const malls = await this.mallsRepository.find({
      where: searchConditions,
    });

    if (malls.length === 0) {
      throw new NotFoundException('Mall not found');
    }
    return { mall_code: malls[0].code };
  }
}
