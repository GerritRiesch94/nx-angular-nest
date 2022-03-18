import {
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

@Controller('api')
export class AppController {
  @Get('health')
  getHealth(@Res() response: Response): void {
    response.status(200).send({ status: 'UP' });
  }

  @Post('login')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  postLogin(): { status: string } {
    return { status: 'Authorized' };
  }
}
