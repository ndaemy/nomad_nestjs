import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `This will return one movie with the id: ${id}`;
  }

  @Post()
  create(): string {
    return 'This will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') id: string): string {
    return `This will delete movie with the id: ${id}`;
  }

  @Patch('/:id')
  update(@Param('id') id: string): string {
    return `This will update movie with the id: ${id}`;
  }
}
