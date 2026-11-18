import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CardModule } from './card/card.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CardModule],
})
export class AppModule {}
