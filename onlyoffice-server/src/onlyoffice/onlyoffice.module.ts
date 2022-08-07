import { Module } from '@nestjs/common';

import { OnlyofficeController } from './onlyoffice.controller';
import { OnlyofficeService } from './onlyoffice.service';

@Module({
  controllers: [OnlyofficeController],
  providers: [OnlyofficeService],
  imports: [],
})
export class OnlyofficeModule {}
