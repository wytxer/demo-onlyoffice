import { IsString, IsNumber, IsObject } from 'class-validator';
import { OnlyofficeEditorConfig } from '../onlyoffice/onlyoffice.entity';

export class DocumentInfo {
  /**
   * 业务 id
   */
  @IsNumber()
  id?: number;

  /**
   * 备注
   */
  @IsNumber()
  remarks?: string;

  /**
   * 编辑器配置
   */
  @IsObject()
  editorConfig: OnlyofficeEditorConfig;
}

export class DocumentForceSave {
  /**
   * 状态码
   */
  @IsNumber()
  code: number;

  /**
   * 消息
   */
  @IsString()
  message?: string;
}
