import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateMallsDto {
  @IsString()
  @IsOptional()
  @MaxLength(95)
  name?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  address_street_1?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  address_street_2?: string;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  city?: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  state?: string;

  @IsString()
  @IsOptional()
  @MaxLength(6)
  postal_code?: string;
}
