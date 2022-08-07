import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import config from './shared/config';
import { SharedModule } from './shared/shared.module';
import { AppController } from './app.controller';
import { OnlyofficeModule } from './onlyoffice/onlyoffice.module';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [
    // 导入全局变量配置
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [config],
    }),
    // 静态资源服务配置
    ServeStaticModule.forRoot({
      serveRoot: '/static',
      rootPath: join(__dirname, '..', 'static'),
    }),
    SharedModule,
    OnlyofficeModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
