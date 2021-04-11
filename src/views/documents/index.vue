<template>
  <div class="gha-page-article-edit">
    <split-pane  :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
        <FileViewer>
          <template v-slot:top>
            <div class="article-search-bar">

            </div>
          </template>
          <template v-slot:content>
            <div class="article-list-scroller">
              <article-card class="article-list-i"/>
              <article-card class="article-list-i"/>
              <article-card class="article-list-i"/>
              <article-card class="article-list-i"/>
              <article-card class="article-list-i"/>
              <article-card class="article-list-i"/>
              <article-card class="article-list-i"/>
            </div>
          </template>
          <template v-slot:bottom>
            <div class="article-info-bar">
              <h2>总共12项</h2>
            </div>
          </template>
        </FileViewer>
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
  import FileViewer from '@/components/FileViewer'
  import ArticleCard from '@/components/ArticleCard'
  export default {
    name: "page-documents",
    components:{
      BytemdEditor,
      FileViewer,
      splitPane,
      ArticleCard
    }
  }
</script>

<style scoped lang="scss">
  .gha-page-article-edit{
    height: 100%;
    .article-search-bar,.article-info-bar{
      height: 64px;
      background-color: #f2f2f2;
    }
    .article-info-bar{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .article-list-scroller{
      padding: 6px 4px 6px 12px;
      overflow: auto;
      height: calc(100% - 128px);
      background-color: #fafafa;
      .article-list-i:not(:last-child){
        margin-bottom: 12px;
      }

      &::-webkit-scrollbar {
        position: absolute;
        right: 0;
        top: 0;
        height: 8px;
        width: 8px;
        background: transparent;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        width: 10px;
        min-height: 15px;
        background: rgba(118, 176, 243, 0.3);
        border-radius: 0;
        margin-right: 1px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
      &::-webkit-scrollbar-track-piece {
        background: transparent;
      }
    }
  }
</style>