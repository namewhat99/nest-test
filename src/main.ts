import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..','public/stylesheets'));
  app.useStaticAssets(join(__dirname, '..','public/images'));
  app.setBaseViewsDir(join(__dirname, '..','views'));
  app.setViewEngine('hbs');

  await app.listen(3003);
}
bootstrap();
