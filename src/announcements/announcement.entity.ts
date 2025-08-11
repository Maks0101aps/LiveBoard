import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

export enum AnnouncementCategory {
  ELECTRONICS = 'electronics',
  VEHICLES = 'vehicles',
  REAL_ESTATE = 'real_estate',
  JOBS = 'jobs',
  SERVICES = 'services',
  FASHION = 'fashion',
  SPORTS = 'sports',
  OTHER = 'other'
}

@Entity('announcements')
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({
    type: 'simple-enum',
    enum: AnnouncementCategory,
    default: AnnouncementCategory.OTHER
  })
  category: AnnouncementCategory;

  @Column({ nullable: true })
  location: string;

  @Column('simple-array', { nullable: true })
  images: string[];

  @Column({ nullable: true })
  contactPhone: string;

  @Column({ nullable: true })
  contactEmail: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, user => user.announcements, { eager: true })
  @JoinColumn({ name: 'authorId' })
  author: User;

  @Column()
  authorId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
