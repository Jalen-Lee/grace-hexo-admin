<template>
  <div class="gha-page-article-edit">
    <split-pane  :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
        <div style="width: 100%;background-color: pink;height: 100%">

        </div>
      </template>
      <template slot="paneR">
        <div>
          <div style="height: 64px;background: green"></div>
          <bytemd-editor/>
        </div>
      </template>
    </split-pane>
  </div>
</template>

<script>
  import splitPane from 'vue-splitpane'
  import BytemdEditor from '@/components/BytemdEditor'
  export default {
    name: "page-documents",
    components:{
      BytemdEditor,
      splitPane
    }
  }
</script>

<style scoped lang="scss">
  .gha-page-article-edit{
    height: 100%;
  }
</style>