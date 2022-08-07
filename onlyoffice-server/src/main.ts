import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { LoggingInterceptor } from './shared/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // 设置接口前缀
  app.setGlobalPrefix(process.env.API_PREFIX);

  app.useGlobalPipes(
    new ValidationPipe({
      // 跳过验证对象中值为 null 或 undefined 的属性的验证。完整配置文档参见：https://docs.nestjs.cn/9/techniques?id=%e9%aa%8c%e8%af%81
      skipNullProperties: true,
      stopAtFirstError: true,
      transform: true,
    }),
  );

  // 添加全局数据响应拦截器
  app.useGlobalInterceptors(
    new ResponseInterceptor(),
    new LoggingInterceptor(),
  );

  // 版本号配置
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // 接口文档配置
  const isTest = process.env.NODE_ENV === 'test';
  if (isTest) {
    const options = new DocumentBuilder()
      .setTitle('Demo Onlyoffice 接口文档')
      .setVersion('1.0.0')
      .addTag('Onlyoffice')
      .addTag('Document')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }

  //  启动服务
  await app.listen(process.env.PORT);
}
bootstrap();
