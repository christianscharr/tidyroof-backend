import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LoggingInterceptor} from './interceptor/logging.interceptor';
import * as express from 'express';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggingInterceptor());
  app.enableCors({
    origin: "*",
  });

  app.use(express.static(join(process.cwd(), './public/')));

  await app.listen(3000);
}
bootstrap();
