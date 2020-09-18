import {Logger} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LoggingInterceptor} from './logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: Logger
  });
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
