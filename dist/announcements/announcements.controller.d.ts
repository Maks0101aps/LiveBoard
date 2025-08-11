import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
export declare class AnnouncementsController {
    private readonly announcementsService;
    constructor(announcementsService: AnnouncementsService);
    create(createAnnouncementDto: CreateAnnouncementDto, req: any): Promise<import("./announcement.entity").Announcement>;
    findAll(): Promise<import("./announcement.entity").Announcement[]>;
    findByUser(userId: number): Promise<import("./announcement.entity").Announcement[]>;
    findOne(id: number): Promise<import("./announcement.entity").Announcement>;
    update(id: number, updateAnnouncementDto: UpdateAnnouncementDto, req: any): Promise<import("./announcement.entity").Announcement>;
    remove(id: number, req: any): Promise<void>;
}
