"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const announcement_entity_1 = require("./announcement.entity");
let AnnouncementsService = class AnnouncementsService {
    constructor(announcementsRepository) {
        this.announcementsRepository = announcementsRepository;
    }
    async create(createDto, author) {
        const announcement = this.announcementsRepository.create({
            ...createDto,
            author,
        });
        return this.announcementsRepository.save(announcement);
    }
    async findAll() {
        return this.announcementsRepository.find({
            where: { isActive: true },
            relations: ['author'],
            order: { createdAt: 'DESC' }
        });
    }
    async findOne(id) {
        const announcement = await this.announcementsRepository.findOne({
            where: { id },
            relations: ['author']
        });
        if (!announcement) {
            throw new common_1.NotFoundException(`Announcement with ID "${id}" not found`);
        }
        return announcement;
    }
    async update(id, updateDto, userId) {
        const announcement = await this.findOne(id);
        if (announcement.author.id !== userId) {
            throw new common_1.ForbiddenException('You are not allowed to update this announcement');
        }
        const updated = await this.announcementsRepository.preload({
            id: id,
            ...updateDto,
        });
        if (!updated) {
            throw new common_1.NotFoundException(`Announcement with ID "${id}" not found`);
        }
        return this.announcementsRepository.save(updated);
    }
    async remove(id, userId) {
        const announcement = await this.findOne(id);
        if (announcement.author.id !== userId) {
            throw new common_1.ForbiddenException('You are not allowed to delete this announcement');
        }
        const result = await this.announcementsRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Announcement with ID "${id}" not found`);
        }
    }
    async findByUser(userId) {
        return this.announcementsRepository.find({
            where: { author: { id: userId } },
            order: { createdAt: 'DESC' },
        });
    }
};
exports.AnnouncementsService = AnnouncementsService;
exports.AnnouncementsService = AnnouncementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(announcement_entity_1.Announcement)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnnouncementsService);
//# sourceMappingURL=announcements.service.js.map