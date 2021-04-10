<template>
  <nav class="gha-layout-navigation-drawer">
<!--    <v-treeview-->
<!--            v-model="tree"-->
<!--            :open="initiallyOpen"-->
<!--            :items="items"-->
<!--            activatable-->
<!--            item-key="name"-->
<!--            open-on-click-->
<!--    >-->
<!--      <template v-slot:prepend="{ item, open }">-->
<!--        <v-icon v-if="!item.file">-->
<!--          {{ open ? 'mdi-folder-open' : 'mdi-folder' }}-->
<!--        </v-icon>-->
<!--        <v-icon v-else>-->
<!--          {{ files[item.file] }}-->
<!--        </v-icon>-->
<!--      </template>-->
<!--    </v-treeview>-->
    <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
                icon
                @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-group
              :value="true"
              prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
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
    </v-navigation-drawer>
  </nav>
</template>
<script>
  export default {
    name: "layout-navigation-drawer",
    data () {
      return {
        drawer: true,
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