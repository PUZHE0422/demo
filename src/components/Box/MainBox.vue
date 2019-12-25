<template>
  <div class="mainBox">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
          return{
            isRouterAlive:true
          }
        }
    }
</script>

<style scoped>

</style>
