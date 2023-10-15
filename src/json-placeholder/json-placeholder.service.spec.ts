import { Test, TestingModule } from '@nestjs/testing';
import { JsonPlaceholderService } from './json-placeholder.service';
import { AppController } from '../app.controller';
import { HttpModule } from '@nestjs/axios';

describe('JsonplaceholderService', () => {
  let jsonPlaceholderService: JsonPlaceholderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonPlaceholderService],
      controllers: [AppController],
      imports: [HttpModule],
    }).compile();

    jsonPlaceholderService = module.get<JsonPlaceholderService>(
      JsonPlaceholderService,
    );
  });

  it('should be defined', () => {
    expect(jsonPlaceholderService).toBeDefined();
  });
});
