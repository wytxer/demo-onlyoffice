import { IsString, IsNumber, IsObject, IsIn } from 'class-validator';

class IFeatures {
  /**
   * 是否启用拼写检查
   */
  spellcheck?: boolean = false;
}

class ICustomization {
  /**
   * 强制保存
   */
  forcesave?: boolean = true;

  /**
   * 自定义参数
   */
  features?: IFeatures = new IFeatures();
}

class IPlugins {
  /**
   * 需要自动加载的插件列表
   */
  autostart: string[] = [];

  /**
   * 自定义的插件列表
   */
  pluginsData: string[] = [];
}

class IPermission {
  /**
   * 是否启用评论
   */
  comment?: boolean = false;

  /**
   * 是否启用下载
   */
  download?: boolean = true;

  /**
   * 是否启用编辑
   */
  edit?: boolean = true;

  /**
   * 是否启用导出
   */
  print?: boolean = true;

  /**
   * 是否启用预览
   */
  review?: boolean = true;
}

class IDocument {
  /**
   * 文件类型
   */
  fileType = 'docx';

  /**
   * 文档标识符
   */
  key: string;

  /**
   * 文档地址，绝对路径
   */
  url: string;

  /**
   * 文档标题
   */
  title: string;

  /**
   * 文档权限配置
   */
  permissions: IPermission = new IPermission();
}

class IEditorConfig {
  /**
   * 回调地址
   */
  callbackUrl: string = process.env.ONLYOFFICE_CALLBACK;

  /**
   * 语言
   */
  lang?: string = 'zh-CN';

  /**
   * 用户信息
   */
  user: object = {};

  /**
   * 模板列表
   */
  templates?: object[] = [];

  /**
   * 自定义配置。字段相关配置详解：https://api.onlyoffice.com/editors/config/editor/
   */
  customization?: ICustomization = new ICustomization();

  /**
   * 插件列表
   */
  plugins?: IPlugins = new IPlugins();
}

export class OnlyofficeCallback {
  /**
   * 返回 0 表示成功，否则表示失败
   */
  @IsNumber()
  error: number;
}

export class OnlyofficeForceSave {
  /**
   * 状态码
   */
  @IsNumber()
  code: number;

  /**
   * 状态码
   */
  @IsNumber()
  error: number;

  /**
   * 消息
   */
  @IsString()
  message?: string;
}

/**
 * 编辑器配置项，完整配置项参见：https://api.onlyoffice.com/editors/config/
 */
export class OnlyofficeEditorConfig {
  /**
   * 编辑器宽度
   */
  @IsNumber()
  width?: number | string = 1200;

  /**
   * 编辑器高度
   */
  @IsNumber()
  height?: number | string = 800;

  /**
   * 文档类型。word：文档，cell：表格，slide：PPT
   */
  @IsString()
  @IsIn(['word', 'cell', 'slide'])
  documentType = 'word';

  /**
   * 文档配置
   */
  @IsObject()
  document: IDocument = new IDocument();

  /**
   * 编辑器配置
   */
  @IsObject()
  editorConfig: IEditorConfig = new IEditorConfig();

  /**
   * 编辑器加密令牌，开启加密时有值
   */
  @IsString()
  token?: string;
}
