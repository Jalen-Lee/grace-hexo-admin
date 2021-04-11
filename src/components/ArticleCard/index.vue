<template>
  <div class="article-card-container">
    <v-card
            color="#ffffff"
    >
      <v-card-title class="headline">
        Unlimited music now
      </v-card-title>
      <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
      <v-card-text>2020-1-3</v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "article-card",
    props:{
      data:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped lang="scss">
  .article-card-container{
    width: 100%;
  }
</style>