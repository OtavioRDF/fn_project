import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try{
      return this.userService.findOne(id);
    }catch(error){
      throw new NotFoundException("Player not found!");
    }
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
    try{
      return this.userService.update(id, updateUserDto);
    }catch (error){
      throw new NotFoundException("Player not found!");
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    try{
      return this.userService.remove(id);
    }catch (error){
      throw new NotFoundException("Player not found!");
    }
  }
}
