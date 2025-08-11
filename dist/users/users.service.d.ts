import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(userData: Partial<User>): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: number): Promise<User>;
    updateProfile(id: number, updateData: Partial<User>): Promise<User>;
    validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
