<template>
  <v-breadcrumbs :items="['Классический стиль', 'Женская одежда', 'Все товары']"></v-breadcrumbs>
  <Articles :articles="womanClothes"></Articles>
</template>

<script>
  export default {
    name: "Catalog",
  };
</script>

<script setup>
import Articles from "@/components/Articles.vue";
import { womanClothes, womanShoes, womanAccessories } from "@/data/articles";
</script>

<style lang="scss" scoped>

</style>