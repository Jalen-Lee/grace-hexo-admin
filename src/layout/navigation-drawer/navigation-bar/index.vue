<template>
  <div class="nav-navigation-bar">
    <v-list
        dense
        nav
    >
      <v-list-item
        to="/recent-edit"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>mdi-comment-edit-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>最近编辑</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
              :value="true"
              group="/documents"
              prepend-icon="mdi-folder-edit"
              @click="$router.push('/documents')"
      >
        <template v-slot:activator>
          <v-list-item-title>文章目录</v-list-item-title>
        </template>
        <v-treeview
                v-model="tree"
                :open="initiallyOpen"
                :items="items1"
                activatable
                item-key="name"
                open-on-click
        >
          <template v-slot:prepend="{ item, open }">
            <v-icon v-if="!item.file">
              {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
            </v-icon>
            <v-icon v-else>
              {{ files[item.file] }}
            </v-icon>
          </template>
        </v-treeview>
      </v-list-group>

      <v-list-item
        to="/article-tag"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>mdi-tag-text</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>标签</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        to="/article-recycle"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>mdi-archive</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>回收站</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  export default {
    name: "nav-navigation-bar",
    data(){
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,


        initiallyOpen: ['public'],
        files: {
          html: 'mdi-language-html5',
          js: 'mdi-nodejs',
          json: 'mdi-code-json',
          md: 'mdi-language-markdown',
          pdf: 'mdi-file-pdf',
          png: 'mdi-file-image',
          txt: 'mdi-file-document-outline',
          xls: 'mdi-file-excel',
        },
        tree: [],
        items1: [
          {
            name: 'public',
            children: [
              {
                name: 'static',
                children: [{
                  name: 'logo.png',
                  file: 'png',
                }],
              },
              {
                name: 'favicon.ico',
                file: 'png',
              },
              {
                name: 'index.html',
                file: 'html',
              },
            ],
          },
          {
            name: '.gitignore',
            file: 'txt',
          },
          {
            name: 'babel.config.js',
            file: 'js',
          },
          {
            name: 'package.json',
            file: 'json',
          },
          {
            name: 'README.md',
            file: 'md',
          },
          {
            name: 'vue.config.js',
            file: 'js',
          },
          {
            name: 'yarn.lock',
            file: 'txt',
          },
        ],
      }
    }
  }
</script>

<style scoped lang="scss">

</style>