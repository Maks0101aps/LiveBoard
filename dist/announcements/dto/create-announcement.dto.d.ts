import { AnnouncementCategory } from '../announcement.entity';
export declare class CreateAnnouncementDto {
    title: string;
    description: string;
    price?: number;
    category: AnnouncementCategory;
    location?: string;
    images?: string[];
    contactPhone?: string;
    contactEmail?: string;
}
