import { Injectable } from '@nestjs/common';
import { AddMallProvider } from './add-mall.provider';
import { GetMallProvider } from './get-mall.provider';
import { UpdateMallProvider } from './update-mall.provider';
import { DeleteMallProvider } from './delete-mall.provider';
import { MallsDto } from '../dtos/malls.dto';
import { UpdateMallsDto } from '../dtos/update-mall.dto';

@Injectable()
export class MallsService {
  constructor(
    private readonly addMall: AddMallProvider,

    private readonly getMall: GetMallProvider,

    private readonly updateMall: UpdateMallProvider,

    private readonly deleteMall: DeleteMallProvider,
  ) {}
  public async createMall(data: MallsDto) {
    return this.addMall.addMall(data);
  }
  public async getmall(id?: string) {
    return this.getMall.getMallData(id);
  }
  public async updateMalldata(data: UpdateMallsDto, id: string) {
    return this.updateMall.updateMalldata(data, id);
  }
  public async deleteMalldata(id: string) {
    return this.deleteMall.deleteMall(id);
  }
  public async getmallBySearch(name?: string, location?: string) {
    return this.getMall.getMallBySearch(name, location);
  }
}
