<template>
  <div><div :id="id"></div></div>
</template>

<script>
// 编辑器配置项，完整配置项参见：https://api.onlyoffice.com/editors/config/
const editorConfig = {
  // 编辑器宽度
  width: 1200,
  // 编辑器高度
  height: 800,
  // 编辑器类型，支持 word、cell（表格）、slide（PPT）
  documentType: 'word',
  // 文档配置
  document: {
    // 当前文档类型
    fileType: 'docx',
    // 文档标识符
    key: 'test2.docx',
    // 文档地址，绝对路径
    url: `${process.env.VUE_APP_API_SERVER}/static/test2.docx`,
    // 文档标题
    title: '测试文档二.docx',
    // 权限
    permissions: {
      // 启用评论
      comment: false,
      // 启用下载
      download: true,
      // 启用编辑
      edit: true,
      // 启用导出
      print: true,
      // 启用预览
      review: true
    }
  },
  editorConfig: {
    // 回调地址
    callbackUrl: process.env.VUE_APP_ONLYOFFICE_CALLBACK,
    // 设置语言
    lang: 'zh-CN',
    // 添加用户信息
    user: {
      group: '技术部', id: 'wytxer', name: '程序员未央'
    },
    // 模板列表
    templates: [],
    // customization 字段相关配置详解：https://api.onlyoffice.com/editors/config/editor/customization
    customization: {
      // 强制保存
      forcesave: true,
      features: {
        // 关闭拼写检查
        spellcheck: false
      }
      // ! 社区版不支持自定义 logo 字段
      // logo: {
      //   image: 'http://example.com/logo.png',
      //   imageEmbedded: 'http://example.com/logo.png',
      //   url: 'http://www.example.com'
      // }
    }
  }
}

export default {
  data () {
    return {
      id: `editor-${new Date().getTime().toString('32')}`
    }
  },
  mounted () {
    this.initEditor()
  },
  beforeDestroy () {
    // 组件销毁前销毁编辑器
    if (this.editor) {
      this.editor.destroyEditor()
      this.editor = null
    }
  },
  methods: {
    // 初始化编辑器
    initEditor () {
      const scriptId = `script-${this.id}`
      const added = document.querySelector(`#${scriptId}`)
      if (!added) {
        const script = document.createElement('script')
        script.id = scriptId
        script.src = process.env.VUE_APP_ONLYOFFICE_API_URL
        script.onload = this.createEditor
        document.head.appendChild(script)
      } else {
        this.createEditor()
      }
    },
    // 创建编辑器
    createEditor () {
      if (this.editor) {
        this.editor.destroyEditor()
        this.editor = null
      }
      this.editor = new window.DocsAPI.DocEditor(this.id, editorConfig)
    }
  }
}
</script>
