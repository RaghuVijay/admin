import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { VehicleType } from 'src/parking-capacity/enums/VehicleTypes.enum';

export class UpdateCapacityDto {
  @IsEnum(VehicleType)
  @IsOptional()
  type?: VehicleType;

  @IsNumber()
  @IsOptional()
  capacity?: number;
}
