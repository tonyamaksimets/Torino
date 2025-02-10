<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>

</template>

<script>
  export default {
    name: "App",
  };
</script>

<script setup>
import Header from "@/components/Header.vue"
</script>

<style lang="scss" scoped>

</style>
