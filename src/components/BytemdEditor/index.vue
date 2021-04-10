<template>
  <div class="gha-md-editor-container">
    <Editor :value="value" :plugins="plugins" @change="handleChange" :locale="lang"/>
  </div>
</template>

<script>
  import { Editor, Viewer } from '@bytemd/vue';
  import lang_cn from 'bytemd/lib/locales/zh_Hans.json'
  import gfm from '@bytemd/plugin-gfm';
  import breaks from '@bytemd/plugin-breaks';
  import footnotes from '@bytemd/plugin-footnotes';
  import frontmatter from '@bytemd/plugin-frontmatter';
  import gemoji from '@bytemd/plugin-gemoji';
  import highlight from '@bytemd/plugin-highlight';
  import math from '@bytemd/plugin-math';
  import mediumZoom from '@bytemd/plugin-medium-zoom';
  import '@/styles/md-theme/github-markdown-css.css'
  import 'highlight.js/scss/arta.scss'
  const plugins = [
    gfm(),
    breaks(),
    footnotes(),
    frontmatter(),
    gemoji(),
    highlight(),
    math(),
    mediumZoom()
    // Add more plugins here
  ];

  export default {
    name: "gha-bytemd-editor",
    components: { Editor,Viewer},
    data() {
      return {
        value: '',
        lang: lang_cn,
        plugins
      };
    },
    methods: {
      handleChange(v) {
        this.value = v;
      },
    },
  }
</script>

<style scoped lang="scss">
  .gha-md-editor-container{
    height: 100%;
  }
</style>

<style>
  .bytemd {
    height: calc(100vh - 64px);
    z-index: 9999;
  }
  .theme--light.v-application code {
    background-color: transparent;
  }
</style>