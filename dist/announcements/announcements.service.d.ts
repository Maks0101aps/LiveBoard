import { Repository } from 'typeorm';
import { Announcement } from './announcement.entity';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { User } from '../users/user.entity';
export declare class AnnouncementsService {
    private announcementsRepository;
    constructor(announcementsRepository: Repository<Announcement>);
    create(createDto: CreateAnnouncementDto, author: User): Promise<Announcement>;
    findAll(): Promise<Announcement[]>;
    findOne(id: number): Promise<Announcement>;
    update(id: number, updateDto: UpdateAnnouncementDto, userId: number): Promise<Announcement>;
    remove(id: number, userId: number): Promise<void>;
    findByUser(userId: number): Promise<Announcement[]>;
}
