import { AxiosResponse } from 'axios';
import { Controller, Get, Param } from '@nestjs/common';
import { JsonPlaceholderResponseDto } from './dto/json-placeholder.dto';
import { JsonPlaceholderService } from './json-placeholder.service';
import { IdValidationPipe } from '../pipes/id-validation.pipe';

@Controller('posts')
export class JsonPlaceholderController {
  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService,
  ) {}

  @Get()
  async getAll(): Promise<AxiosResponse<JsonPlaceholderResponseDto[]>> {
    return this.jsonPlaceholderService.findAll();
  }

  @Get(':id')
  getOne(
    @Param('id', IdValidationPipe) id: number,
  ): Promise<AxiosResponse<JsonPlaceholderResponseDto>> {
    return this.jsonPlaceholderService.findOne(id);
  }
}
