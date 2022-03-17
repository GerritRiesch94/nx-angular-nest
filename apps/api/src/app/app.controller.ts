import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('health')
  @HttpCode(200)
  getHealth(): { status: string } {
    return { status: 'UP' };
  }
}
