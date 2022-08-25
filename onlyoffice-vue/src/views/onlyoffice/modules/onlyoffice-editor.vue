<template>
  <a-skeleton v-bind="skeletonAttrs" :loading="loading">
    <div :key="id" :id="id"></div>
    <div v-if="$slots.actions" class="MT24 PB24"><slot name="actions"></slot></div>
  </a-skeleton>
</template>

<script>
import merge from 'lodash.merge'

let script
// 脚本标识
const scriptId = 'onlyoffice-editor'
// 异步加载 api.js
const loadScript = () => new Promise((resolve, reject) => {
  const src = process.env.VUE_APP_ONLYOFFICE_API_URL
  script = document.querySelector(`#${scriptId}`)
  // 加载成功
  const onLoad = () => {
    resolve()
    script.removeEventListener('load', onLoad)
  }
  // 加载失败
  const onError = () => {
    reject(new Error(`脚本 ${src} 加载失败`))
    script.removeEventListener('error', onError)
  }
  if (!script) {
    script = document.createElement('script')
    script.id = scriptId
    script.src = src
    script.addEventListener('load', onLoad)
    script.addEventListener('error', onError)
    document.head.appendChild(script)
  } else if (window.DocsAPI) {
    resolve()
  } else {
    script.addEventListener('load', onLoad)
    script.addEventListener('error', onError)
  }
})

export default {
  props: {
    config: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // 编辑器配置项，完整配置项参见：https://api.onlyoffice.com/editors/config/
      editorConfig: {
        // 编辑器宽度
        width: 1200,
        // 编辑器高度
        height: 600,
        // 编辑器类型，支持 word、cell（表格）、slide（PPT）
        documentType: 'word',
        // 文档配置
        document: {
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
          // customization 字段相关配置详解：https://api.onlyoffice.com/editors/config/editor/customization
          customization: {
            // 强制保存
            forcesave: true,
            features: {
              // 关闭拼写检查
              spellcheck: false
            }
          }
        }
      },
      id: `editor-${new Date().getTime().toString('32')}`
    }
  },
  computed: {
    skeletonAttrs () {
      return {
        active: true,
        style: { width: `${this.editorConfig.width}px` },
        paragraph: { rows: 10 }
      }
    }
  },
  watch: {
    loading (newLoading) {
      if (newLoading === false) this.initEditor()
    },
    config: {
      handler () {
        this.initEditor()
      },
      deep: true
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
      loadScript(this.src).then(this.createEditor)
    },
    // 创建编辑器
    createEditor () {
      if (this.editor) {
        this.editor.destroyEditor()
        this.editor = null
      }
      if (window.DocsAPI) this.editor = new window.DocsAPI.DocEditor(this.id, merge({}, this.editorConfig, this.config))
    }
  }
}
</script>
