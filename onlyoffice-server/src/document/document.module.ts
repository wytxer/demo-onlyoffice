import { Module } from '@nestjs/common';

import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { OnlyofficeService } from '../onlyoffice/onlyoffice.service';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, OnlyofficeService],
})
export class DocumentModule {}
