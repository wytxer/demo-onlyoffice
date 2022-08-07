import { Module, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [HttpModule, JwtModule],
  exports: [HttpModule, JwtModule],
  providers: [],
})
export class SharedModule {}
