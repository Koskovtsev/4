import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { TrimPipe } from './common/pipes/trim.pipe.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('People API')
    .setDescription('Документація REST API для роботи з people')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);
  app.useGlobalPipes(
    new TrimPipe(),
    new ValidationPipe({
      whitelist: true, // автоматично зрізає зайві поля, яких немає в DTO
      forbidNonWhitelisted: true, // замість мовчазного зрізання кидає 400, якщо прислали зайві поля
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // пробуємо авто-перетворити типи за типом у DTO
      },
      stopAtFirstError: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
