import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
} from 'class-validator';

export class MallsDto {
  @IsUUID()
  id: string;
  @IsString()
  @Matches(/^MALL\d+$/, {
    message: 'ID must start with "MALL" followed by digits ',
  })
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(95)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  address_street_1: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  address_street_2: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  state: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(6)
  postal_code: string;

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
