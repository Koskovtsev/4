import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service.js';
import { PeopleModule } from './people/people.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PeopleModule,
  ],
})
export class AppModule {}
