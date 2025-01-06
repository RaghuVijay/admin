import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleType } from './enums/VehicleTypes.enum';
import { ParkingLevel } from 'src/parking-level/parking-level.entity';

@Entity('parking_capacity')
@Unique(['code'])
export class ParkingCapacity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 10,
    unique: true,
    default: () =>
      `CONCAT('CAP' || TO_CHAR(NEXTVAL('capacity_seq'), 'FM0000'))`,
  })
  code: string;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
  })
  level_code: string;

  @Column({
    nullable: false,
    enum: VehicleType,
  })
  type: VehicleType;

  @Column({
    type: 'int2',
    nullable: false,
  })
  capacity: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
