import { AxiosResponse } from 'axios';
import { Controller, Get, Param } from '@nestjs/common';
import { IdValidationPipe } from './pipes/id-validation.pipe';
import { JSONPlaceholderResponse } from './json-placeholder/json-placeholder.model';
import { JsonplaceholderService } from './json-placeholder/json-placeholder.service';

@Controller('posts')
export class AppController {
  constructor(
    private readonly jsonPlaceholderService: JsonplaceholderService,
  ) {}

  @Get()
  async getAll(): Promise<AxiosResponse<JSONPlaceholderResponse[]>> {
    return this.jsonPlaceholderService.getAll();
  }

  @Get(':id')
  getOne(
    @Param('id', IdValidationPipe) id: number,
  ): Promise<AxiosResponse<JSONPlaceholderResponse>> {
    return this.jsonPlaceholderService.getOne(id);
  }
}
