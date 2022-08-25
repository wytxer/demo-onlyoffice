import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DocumentForceSaveDto, DocumentInfoDto } from './document.dto';
import { DocumentInfo } from './document.entity';
import { DocumentService } from './document.service';

@ApiTags('Document')
@Controller({
  path: 'document',
  version: '1',
})
export class DocumentController {
  constructor(private documentService: DocumentService) {}
  @Post('forceSave')
  @ApiOperation({
    summary: '强制保存文档',
    description:
      '通过调用 Onlyoffice 提供的指令接口间接保存文件，最终文件的报错操作还是在 editorConfig.callbackUrl 所指定的接口里面完成的',
  })
  async forceSave(@Body() body: DocumentForceSaveDto): Promise<any> {
    return await this.documentService.forceSave(body);
  }

  @Get('documentInfo')
  @ApiOperation({
    summary: '获取文档信息',
    description: '仅构造 Onlyoffice 文档编辑器显示和保存需要的必要信息',
  })
  async documentInfo(@Query() query: DocumentInfoDto): Promise<DocumentInfo> {
    return await this.documentService.documentInfo(query);
  }

  @Get('excelInfo')
  @ApiOperation({
    summary: '获取表格信息',
    description: '仅构造 Onlyoffice 表格编辑器显示和保存需要的必要信息',
  })
  async excelInfo(@Query() query: DocumentInfoDto): Promise<DocumentInfo> {
    return await this.documentService.excelInfo(query);
  }
}
