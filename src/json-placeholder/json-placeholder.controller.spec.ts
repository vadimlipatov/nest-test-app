import { JsonPlaceholderController } from './json-placeholder.controller';
import { JsonPlaceholderService } from './json-placeholder.service';
import { HttpService } from '@nestjs/axios';

describe('AppController', () => {
  let jsonController: JsonPlaceholderController;
  let jsonService: JsonPlaceholderService;
  let httpService: HttpService;

  beforeEach(() => {
    jsonService = new JsonPlaceholderService(httpService);
    jsonController = new JsonPlaceholderController(jsonService);
  });

  it('should be defined', () => {
    expect(jsonController).toBeDefined();
  });
});
