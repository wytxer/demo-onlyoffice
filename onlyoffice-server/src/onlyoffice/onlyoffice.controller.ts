import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OnlyofficeCallbackDto } from './onlyoffice.dto';
import { OnlyofficeCallback } from './onlyoffice.entity';
import { OnlyofficeService } from './onlyoffice.service';

@ApiTags('Onlyoffice')
@Controller({
  path: 'onlyoffice',
  version: '1',
})
export class OnlyofficeController {
  constructor(private onlyofficeService: OnlyofficeService) {}
  @Post('callback')
  @ApiOperation({
    summary: '文档回调地址',
    description: '对应 Onlyoffice 的 editorConfig.callbackUrl 字段',
  })
  // 这里表示成功的 statusCode 状态不能返回 201，否则会报错「这份文件无法保存。请检查连接设置或联系您的管理员」，因为在 Onlyoffice 如果 statusCode 不等于 200 认为是失败
  @HttpCode(HttpStatus.OK)
  async callback(
    // @Body() body: OnlyofficeCallbackDto,
    @Body() body: any,
  ): Promise<OnlyofficeCallback> {
    return await this.onlyofficeService.callback(body);
  }
}
