import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MallsService } from './providers/malls.service';
import { MallsDto } from './dtos/malls.dto';
import { UpdateMallsDto } from './dtos/update-mall.dto';

@Controller('malls')
export class MallsController {
  constructor(private readonly mallService: MallsService) {}

  @Post('/add')
  public async addMall(@Body() mallsDto: MallsDto) {
    return this.mallService.createMall(mallsDto);
  }
  @Get('/:id?')
  public async getMall(@Param('id') id?: string) {
    return this.mallService.getmall(id);
  }
  @Patch('/update/:id')
  public async updateMallsdata(
    @Body() updateData: UpdateMallsDto,
    @Param('id') id: string,
  ) {
    return this.mallService.updateMalldata(updateData, id);
  }
  @Delete('/:id')
  public async deleteMall(@Param('id') id: string) {
    return this.mallService.deleteMalldata(id);
  }
  @Get('search')
  public async getMallByoptions(
    @Query('name') name: string,
    @Query('location') location: string,
  ) {
    return this.mallService.getmallBySearch(name, location);
  }
}
