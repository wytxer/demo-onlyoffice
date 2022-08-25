<template>
  <a-skeleton v-bind="skeletonAttrs" :loading="loading.page">
    <onlyoffice-editor :src="src" :config="editorConfig" @ready="onEditorReady" />
    <div class="PT24 PB24">
      <a-button type="primary" @click="onSave" :loading="loading.save">保存</a-button>
    </div>
  </a-skeleton>
</template>

<script>
import { OnlyofficeEditor } from 'onlyoffice-vue'
import { queryDocumentInfo, forceSaveDocumentInfo } from '@/api/onlyoffice'

export default {
  data () {
    return {
      loading: {
        page: false,
        save: false
      },
      src: process.env.VUE_APP_ONLYOFFICE_API_URL,
      detail: {},
      editorConfig: {}
    }
  },
  computed: {
    skeletonAttrs () {
      return {
        active: true,
        style: { width: '100%' },
        paragraph: { rows: 10 }
      }
    }
  },
  components: {
    OnlyofficeEditor
  },
  created () {
    this.queryDocumentInfo()
  },
  methods: {
    // 获取文档配置信息
    queryDocumentInfo () {
      this.loading.page = true
      queryDocumentInfo({ key: 'test5.docx' })
        .then(res => {
          const data = res.data || {}
          const { id, remarks } = data
          this.detail = { id, remarks }
          this.editorConfig = data.editorConfig
        })
        .finally(() => {
          this.loading.page = false
        })
    },
    // 保存
    onSave () {
      this.loading.save = true
      const { key } = this.editorConfig.document
      const { id } = this.detail
      forceSaveDocumentInfo({ key, id })
        .then(res => {
          if (res.code === 0) {
            this.$message.success('保存成功')
          } else {
            this.$message.error(res.message)
          }
        })
        .finally(() => {
          this.loading.save = false
        })
    },
    // 编辑器加载完毕后回调 ready 函数，editor 为当前编辑器实例
    onEditorReady (editor) {
      console.log(editor)
    }
  }
}
</script>
