<template>
  <nav class="gha-layout-navigation-drawer">
    <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
    >
      <action-group/>
      <navigation-bar/>

    </v-navigation-drawer>
  </nav>
</template>
<script>
  import ActionGroup from './action-group'
  import NavigationBar from './navigation-bar'
  export default {
    name: "layout-navigation-drawer",
    components:{
      ActionGroup,NavigationBar
    },
    data () {
      return {
        drawer: true,
      }
    },
  }
</script>

<style scoped lang="scss">
  .gha-layout-navigation-drawer{
    min-width: 256px;
    height: 100%;
    /*background: aqua;*/
  }
</style>