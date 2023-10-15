import { Controller, Get, Param } from '@nestjs/common';
import { JsonplaceholderService } from './json-placeholder/json-placeholder.service';
import { IdValidationPipe } from './pipes/id-validation.pipe';
// import { Observable } from 'rxjs';
// import { AxiosResponse } from 'axios';
// import { JSONPlaceholderDto } from './json-placeholder/dto/json-placeholder.dto';

@Controller('posts')
export class AppController {
  constructor(
    private readonly jsonPlaceholderService: JsonplaceholderService,
  ) {}

  @Get()
  async getAll() {
    // : Observable<AxiosResponse<JSONPlaceholderDto[]>> {
    // return this.jsonPlaceholderService.getAll();
    return 123;
  }

  @Get(':id')
  async getOne(@Param('id', IdValidationPipe) id: number) {
    // : Observable<AxiosResponse<JSONPlaceholderDto[]>> {
    // return this.jsonPlaceholderService.getAll();
    return id;
  }
}
