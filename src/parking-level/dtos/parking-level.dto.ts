import { IsDate, IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator';

export class ParkingLevelDto {
  @IsUUID()
  id: string;

  @IsString()
  @Matches(/^MALL\d+$/, {
    message: 'ID must start with "MALL" followed by digits ',
  })
  code: string;

  @IsString()
  @IsNotEmpty()
  mall_code: string;

  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @IsNotEmpty()
  @IsDate()
  updated_at: Date;

  @IsNotEmpty()
  @IsDate()
  deleted_at: Date;
}
