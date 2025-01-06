import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { VehicleType } from 'src/parking-capacity/enums/VehicleTypes.enum';

export class CreateCapacityDto {
  @IsEnum(VehicleType)
  @IsNotEmpty()
  type: VehicleType;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsString()
  @IsNotEmpty()
  level_code: string;
}
