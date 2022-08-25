import { IsString, IsNumber, IsNotEmpty, IsIn } from 'class-validator';

/**
 * 文档强制保存请求参数
 */
export class DocumentForceSaveDto {
  /**
   * 业务 id
   */
  @IsNumber()
  id: string;

  /**
   * 文档标识符
   */
  @IsString()
  key: string;

  /**
   * 使用 JWT 加密文档参数，默认不加密，需要配合 Onlyoffice 的 secret 配置使用。
   */
  @IsString()
  @IsIn(['y', 'n'])
  useJwtEncrypt?: string = 'n';
}

/**
 * 获取文档信息请求参数
 */
export class DocumentInfoDto {
  /**
   * 文档标识符（为了获取本地缓存的文档文件）
   * @example test1.docx
   */
  @IsNotEmpty()
  @IsString()
  key: string;

  /**
   * 使用 JWT 加密文档参数，默认不加密，需要配合 Onlyoffice 的 secret 配置使用。
   */
  @IsString()
  @IsIn(['y', 'n'])
  useJwtEncrypt?: string = 'n';

  /**
   * 使用插件。默认不返回插件配置
   */
  @IsString()
  @IsIn(['y', 'n'])
  usePlugin?: string = 'n';
}
