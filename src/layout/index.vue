<template>
  <section class="gha-layout">
    <navigation-drawer/>
    <app-main/>
  </section>
</template>

<script>
  import AppMain from './app-main'
  import NavigationDrawer from './navigation-drawer'
  export default {
    name: "layout",
    components: {AppMain,NavigationDrawer}
  }
</script>

<style scoped lang="scss">
  .gha-layout{
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
</style>