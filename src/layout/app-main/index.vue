<template>
  <main class="gha-layout-app-main">
    <keep-alive >
      <router-view />
    </keep-alive>
  </main>
</template>

<script>
  export default {
    name: "layout-app-main"
  }
</script>

<style scoped lang="scss">
  .gha-layout-app-main{
    width: 100%;
    height: 100%;
    flex: 1;
  }
</style>