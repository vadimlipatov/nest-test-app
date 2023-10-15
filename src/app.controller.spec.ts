import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { JsonPlaceholderService } from './json-placeholder/json-placeholder.service';
import { HttpService } from '@nestjs/axios';
// import { JSONPlaceholderResponse } from './json-placeholder/json-placeholder.model';
// import { AxiosResponse } from 'axios';

describe('AppController', () => {
  let jsonController: AppController;
  let jsonService: JsonPlaceholderService;
  let httpService: HttpService;

  beforeEach(() => {
    jsonService = new JsonPlaceholderService(httpService);
    jsonController = new AppController(jsonService);
  });

  it('should be defined', () => {
    expect(jsonController).toBeDefined();
  });
});
