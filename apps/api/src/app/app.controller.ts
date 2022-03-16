import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('api')
export class AppController {
  @Get('health')
  getHealth(@Res() response: Response): void {
    response.status(200).send({ status: 'UP' });
  }
}
