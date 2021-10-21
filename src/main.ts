import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PostModule } from './post/post.module';
import * as dotenv from 'dotenv';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
      next();
  });
let  options = new DocumentBuilder().setTitle('scal.io').setBasePath('/').setVersion('v1').addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [PostModule]
});

SwaggerModule.setup('/explorer', app, document);
  await app.listen(process.env.PORT || 3000);
  console.log('http://localhost:3000/explorer/#/')
}
bootstrap();
