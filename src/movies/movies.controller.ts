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
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') year: string) {
    return `We are searching for a movie made after: ${year}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() data) {
    return this.moviesService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData) {
    return this.moviesService.update(id, updateData);
  }
}
