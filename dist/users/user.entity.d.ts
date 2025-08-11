import { Announcement } from '../announcements/announcement.entity';
export declare class User {
    id: number;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    avatar: string;
    announcements: Announcement[];
    createdAt: Date;
    updatedAt: Date;
}
