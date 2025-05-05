import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/greet')
  greetUser(): string {
    return this.usersService.greetUser();
  }

  @Get('/all')
  async getAllUsers() {
    return await this.usersService.findAll();
  }

  @Get('/one/:id')
  async getUserById(@Param('id') id: number) {
    return await this.usersService.findOne(id);
  }

  @Post('/create')
  async createUser(@Body() body: CreateUserDto) {
    console.log('hit create..........:', body);
    return await this.usersService.create(body);
  }

  @Patch('/update/:id')
  async updateUser(@Param('id') id: number, @Body() body: CreateUserDto) {
    return await this.usersService.update(id, body);
  }

  @Delete('/delete/:id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.remove(id);
    return { message: 'User deleted successfully' };
  }
}
