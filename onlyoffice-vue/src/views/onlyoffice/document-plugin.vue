<template>
  <onlyoffice-editor :loading="loading.editor" :config="editorConfig">
    <span slot="actions">
      <a-button type="primary" @click="onSave" :loading="loading.save">保存</a-button>
    </span>
  </onlyoffice-editor>
</template>

<script>
import OnlyofficeEditor from './modules/onlyoffice-editor'
import { queryDocumentInfo, forceSaveDocumentInfo } from '@/api/onlyoffice'

export default {
  data () {
    return {
      loading: {
        editor: false,
        save: false
      },
      detail: {},
      editorConfig: {}
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
      this.loading.editor = true
      queryDocumentInfo({ key: 'test5.docx', usePlugin: 'y' })
        .then(res => {
          const data = res.data || {}
          const { id, remarks } = data
          this.detail = { id, remarks }
          this.editorConfig = data.editorConfig
        })
        .finally(() => {
          this.loading.editor = false
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
    }
  }
}
</script>
