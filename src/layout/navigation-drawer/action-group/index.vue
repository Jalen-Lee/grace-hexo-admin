<template>
  <div class="gha-action-group">
    <ul class="gha-action-group-ul">
      <li class="gha-action-group-ul-li">
        <v-btn
                rounded
                color="primary"
                block
        >
          <v-icon left>mdi-refresh-circle</v-icon>
          同步
        </v-btn>
      </li>
      <li class="gha-action-group-ul-li">
        <v-btn
                rounded
                color="primary"
                block
        >
          <v-icon left>mdi-folder-plus</v-icon>
          新建
        </v-btn>
      </li>
      <li class="gha-action-group-ul-li">
        <v-btn
                rounded
                color="primary"
                block
        >
          <v-icon left>mdi-server-network</v-icon>
          部署
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "nav-action-group",

  }
</script>

<style scoped lang="scss">
  .gha-action-group{
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    padding: 0 35px;
    &-ul{
      padding: 0;
      &-li{
        &:not(:last-child){
          margin-bottom: 10px;
        }
      }
    }
  }
</style>