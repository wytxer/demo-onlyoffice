<template>
  <a-config-provider :locale="locale">
    <div class="page-app">
      <header class="page-app__header">
      <router-link class="page-app__title" to="/">Onlyoffice</router-link>
        <span>{{ $route.meta.title }}</span>
      </header>
      <div class="page-app__body">
        <router-view />
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import locale from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  data () {
    return {
      locale
    }
  }
}
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
html,
body {
  font-size: 14px;
  color: #333;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.page-app {
  &__header {
    padding: 16px 32px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  &__title {
    font-size: 24px;
    margin-right: 16px;
    color: #333;
  }
  &__body {
    padding: 20px 32px;
  }
}
</style>
