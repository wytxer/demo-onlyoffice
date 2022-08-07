<template>
  <div class="PT24 PB24">
    <a-button type="primary" @click="onHtmlToDocx" :loading="loading.toDocx">html 转 docx</a-button>
    <a-button type="primary" class="ML16" @click="onBuilder" :loading="loading.builder">doc builder 转 docx</a-button>
  </div>
</template>

<script>
import { onlyofficeConversion, onlyofficeBuilder } from '@/api/onlyoffice'

export default {
  data () {
    return {
      loading: {
        toDocx: false,
        builder: false
      }
    }
  },
  methods: {
    // html 转 docx
    onHtmlToDocx () {
      this.loading.toDocx = true
      onlyofficeConversion({
        // 请求参数详解：https://api.onlyoffice.com/editors/conversionapi
        async: false,
        filetype: 'html',
        outputtype: 'docx',
        url: `${process.env.VUE_APP_API_SERVER}/static/test5.html`,
        key: 'test5.html'
      })
        .then(res => {
          if (res.endConvert) this.$message.success('转换成功')
          // 下载转换后的文件
          if (res.fileUrl) {
            window.open(res.fileUrl.replace(process.env.VUE_APP_PORT, process.env.VUE_APP_ONLYOFFICE_PORT))
          }
        })
        .finally(() => {
          this.loading.toDocx = false
        })
    },
    // 调用构建服务转换文档
    onBuilder () {
      this.loading.builder = true
      onlyofficeBuilder({
        // 请求参数详解：https://api.onlyoffice.com/editors/documentbuilderapi
        async: false,
        url: `${process.env.VUE_APP_API_SERVER}/static/docbuilder/test1.docbuilder`
      })
        .then(res => {
          if (res.endConvert) this.$message.success('转换成功')
          if (res.urls && res.urls['test1.docx']) {
            window.open(res.urls['test1.docx'].replace(process.env.VUE_APP_PORT, process.env.VUE_APP_ONLYOFFICE_PORT))
          }
        })
        .finally(() => {
          this.loading.builder = false
        })
    }
  }
}
</script>
