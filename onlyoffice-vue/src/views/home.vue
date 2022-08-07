<template>
  <div class="page-home">
    <div v-for="item in links" :key="item.path">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const routes = this.$router.getRoutes() || []
    const links = routes
      .filter(item => item.meta.title && item.path && item.parent && item.parent.meta.title)
      .map(item => {
        return {
          title: `${item.parent.meta.title} - ${item.meta.title}`, path: item.path
        }
      })
    return {
      links
    }
  }
}
</script>
