import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MallsController } from './malls/malls.controller';
import { MallsModule } from './malls/malls.module';
import { ParkingLevelController } from './parking-level/parking-level.controller';
import { ParkingLevelModule } from './parking-level/parking-level.module';
import { ParkingCapacityModule } from './parking-capacity/parking-capacity.module';

import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import environmentValidatation from './config/envirnoment.validation';
import { HttpModule } from '@nestjs/axios';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './auth/guards/accesstoken/accesstoken.guard';
import { AuthenticationGuard } from './auth/guards/authentication/authentication.guard';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [appConfig, databaseConfig],
      validationSchema: environmentValidatation,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: configService.get('database.autoLoadEntities'),
        synchronize: configService.get('database.synchronize'),
        port: configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        host: configService.get('database.host'),
        database: configService.get('database.name'),
        migrations: [],
      }),
    }),
    MallsModule,
    ParkingLevelModule,
    ParkingCapacityModule,
    HttpModule,
  ],
  controllers: [AppController, MallsController, ParkingLevelController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    AccessTokenGuard,
  ],
})
export class AppModule {}
