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
  // 编辑器类型，支持 word（文档）、cell（表格）、slide（PPT）
  documentType: 'word',
  // 文档配置
  document: {
    // 文件类型
    fileType: 'docx',
    // 文档标识符
    key: 'test1.docx',
    // 文档地址，绝对路径
    url: `${process.env.VUE_APP_API_SERVER}/static/test1.docx`,
    // 文档标题
    title: '测试文档一.docx'
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
