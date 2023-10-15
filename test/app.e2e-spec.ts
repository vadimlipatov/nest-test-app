import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/posts (GET) - seccess', () => {
    return request(app.getHttpServer()).get('/posts').expect(200);
  });

  it('/posts (GET) - fail', () => {
    return request(app.getHttpServer()).get('/posts/re').expect(400);
  });

  it('/posts/:id (GET) - success', () => {
    return request(app.getHttpServer()).get('/posts/1').expect(200);
  });

  it('/posts/:id (GET) - fail', () => {
    return request(app.getHttpServer()).get('/posts/1001').expect(400);
  });
});
