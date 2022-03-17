import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app/app.module';

describe('AppController Api ', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET health`, async () => {
    const response = await request(app.getHttpServer()).get('/api/health');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ status: 'UP' });
  });

  describe('CORS Header', () => {
    it('should return cors header', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/health')
        .set('Origin', 'http://localhost:4200');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ status: 'UP' });
      expect(response.headers['Access-Control-Allow-Origin']).toEqual(
        'http://localhost:4200'
      );
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
