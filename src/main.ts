import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { validationPipeOptions } from './config/config.validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
