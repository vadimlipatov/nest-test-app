import { AxiosResponse } from 'axios';
import { Controller, Get, Param } from '@nestjs/common';
import { IdValidationPipe } from './pipes/id-validation.pipe';
import { JsonPlaceholderResponse } from './json-placeholder/json-placeholder.model';
import { JsonPlaceholderService } from './json-placeholder/json-placeholder.service';

@Controller('posts')
export class AppController {
  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService,
  ) {}

  @Get()
  async getAll(): Promise<AxiosResponse<JsonPlaceholderResponse[]>> {
    return this.jsonPlaceholderService.getAll();
  }

  @Get(':id')
  getOne(
    @Param('id', IdValidationPipe) id: number,
  ): Promise<AxiosResponse<JsonPlaceholderResponse>> {
    return this.jsonPlaceholderService.getOne(id);
  }
}
