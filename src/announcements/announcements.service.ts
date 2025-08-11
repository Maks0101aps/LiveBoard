import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Announcement } from './announcement.entity';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcement)
    private announcementsRepository: Repository<Announcement>,
  ) {}

  async create(createDto: CreateAnnouncementDto, author: User): Promise<Announcement> {
    const announcement = this.announcementsRepository.create({
      ...createDto,
      author,
    });
    return this.announcementsRepository.save(announcement);
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementsRepository.find({ 
      where: { isActive: true },
      relations: ['author'],
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: number): Promise<Announcement> {
    const announcement = await this.announcementsRepository.findOne({ 
      where: { id },
      relations: ['author'] 
    });
    if (!announcement) {
      throw new NotFoundException(`Announcement with ID "${id}" not found`);
    }
    return announcement;
  }

  async update(id: number, updateDto: UpdateAnnouncementDto, userId: number): Promise<Announcement> {
    const announcement = await this.findOne(id);

    if (announcement.author.id !== userId) {
      throw new ForbiddenException('You are not allowed to update this announcement');
    }

    const updated = await this.announcementsRepository.preload({
      id: id,
      ...updateDto,
    });

    if (!updated) {
      throw new NotFoundException(`Announcement with ID "${id}" not found`);
    }

    return this.announcementsRepository.save(updated);
  }

  async remove(id: number, userId: number): Promise<void> {
    const announcement = await this.findOne(id);

    if (announcement.author.id !== userId) {
      throw new ForbiddenException('You are not allowed to delete this announcement');
    }

    const result = await this.announcementsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Announcement with ID "${id}" not found`);
    }
  }

  async findByUser(userId: number): Promise<Announcement[]> {
      return this.announcementsRepository.find({
          where: { author: { id: userId } },
          order: { createdAt: 'DESC' },
      });
  }
}
