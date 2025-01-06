import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('shopping_malls')
@Unique(['code'])
export class Malls {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 10,
    unique: true,
    default: () => `CONCAT('MALL', TO_CHAR(NEXTVAL('mall_seq'), 'FM0000'))`, // corrected default value
  })
  code: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 95,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  address_street_1: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  address_street_2: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 30,
  })
  city: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 20,
  })
  state: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 6,
  })
  postal_code: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
