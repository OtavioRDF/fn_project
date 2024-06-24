import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  Query,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatsService } from 'src/stats/stats.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly statsService: StatsService
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User created successfully!' })
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'User updated successfully!' })
  @ApiResponse({ status: 404, description: 'User not found and cannot be updated' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'User removed successfully!' })
  @ApiResponse({
    status: 404,
    description: 'User not found and cannot be removed',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.remove(id);
  }

  @Get(':id/stats')
  async getUserStats (
    @Param('id', ParseIntPipe) id: number,
    @Query('queue') queue: string
  ){
    const user = await this.userService.findOne(id);
    return await this.statsService.findOne(user.accountId, queue);
  }
}
