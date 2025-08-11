import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<import("./user.entity").User>;
    getUser(id: string): Promise<import("./user.entity").User>;
    updateProfile(req: any, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
}
