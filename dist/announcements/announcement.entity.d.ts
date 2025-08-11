import { User } from '../users/user.entity';
export declare enum AnnouncementCategory {
    ELECTRONICS = "electronics",
    VEHICLES = "vehicles",
    REAL_ESTATE = "real_estate",
    JOBS = "jobs",
    SERVICES = "services",
    FASHION = "fashion",
    SPORTS = "sports",
    OTHER = "other"
}
export declare class Announcement {
    id: number;
    title: string;
    description: string;
    price: number;
    category: AnnouncementCategory;
    location: string;
    images: string[];
    contactPhone: string;
    contactEmail: string;
    isActive: boolean;
    author: User;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}
