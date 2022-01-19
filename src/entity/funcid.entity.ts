import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
