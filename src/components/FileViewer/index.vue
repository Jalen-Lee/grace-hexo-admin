<template>
  <div class="gha-file-viewer">
    <slot name="top"></slot>
    <slot name="content"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
  import ArticleCard from '../ArticleCard'
  export default {
    name: "gha-file-viewer",
    components:{
      ArticleCard
    }
  }
</script>

<style scoped lang="scss">
  .gha-file-viewer{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>