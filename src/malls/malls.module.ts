import { Module } from '@nestjs/common';
import { MallsService } from './providers/malls.service';
import { AddMallProvider } from './providers/add-mall.provider';
import { GetMallProvider } from './providers/get-mall.provider';
import { UpdateMallProvider } from './providers/update-mall.provider';
import { DeleteMallProvider } from './providers/delete-mall.provider';
import { Malls } from './malls.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MallsController } from './malls.controller';

@Module({
  providers: [
    MallsService,
    AddMallProvider,
    GetMallProvider,
    UpdateMallProvider,
    DeleteMallProvider,
  ],
  imports: [TypeOrmModule.forFeature([Malls])],
  exports: [MallsService],
  controllers: [MallsController],
})
export class MallsModule {}
