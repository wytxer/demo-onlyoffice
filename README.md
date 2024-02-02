# DEMO ONLYOFFICE

基于 Nest 和 Vue.js 的 Onlyoffice 示例。

> Onlyoffice@7.2 之后的版本默认开启了 JWT 加密，运行仓库例子时请先关闭 JWT 校验。


## 快速开始

注意，在启动之前，需要将 **onlyoffice-vue/.env** 里面的 `VUE_APP_HOST` 和 **onlyoffice-server/.env** 里面的 `HOST` 字段统一替换成自己的本机 IP。

```bash
# 启动前端
cd onlyoffice-vue
# 安装依赖
pnpm install
# 启动开发服务
pnpm run dev

# 启动后端
cd onlyoffice-server
# 安装依赖
pnpm install
# 启动开发服务
pnpm run dev
```


## 相关文章

文章与仓库代码是一体的，强烈建议跟着文章步骤运行例子。

- [在 Vue 中接入 Onlyoffice](https://bszhct.com/2022/08/15/onlyoffice-quick-start/)
- [Onlyoffice 二次开发指南，包含自定义 Onlyoffice 配置、使用 JWT 加密 Onlyoffice 配置、Onlyoffice 文档转换等](https://bszhct.com/2022/08/19/onlyoffice-usage/)
- [Onlyoffice 插件开发指南](https://bszhct.com/2022/08/20/onlyoffice-plugin/)
- [在线 Office 解决方案调研总结](https://bszhct.com/2022/08/14/online-office-summary/)


## 填坑交流群

添加后请备注「oo」

<img src="./qrcode.jpg" style="width: 120px" />


## License

[MIT](/LICENSE)
