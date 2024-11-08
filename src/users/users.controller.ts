import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  /* 
  GET /users
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */

  @Get() // Get /users
  findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin') {
    return { role: role, ...[] };
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() //Post /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // Patch /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // Get /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
