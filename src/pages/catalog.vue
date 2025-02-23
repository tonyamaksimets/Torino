<template>
  <v-breadcrumbs
    :items="breadcrumbs"
    style="flex-wrap: wrap;"
  ></v-breadcrumbs>
  <Articles :articles="filteredArticles"></Articles>
</template>

<script>
  export default {
    name: "Catalog",
  };
</script>

<script setup>
  import { ref } from 'vue';
  import Articles from "@/components/Articles.vue";
  import { articles } from "@/data/articles";
  import { styles } from "@/data/styles";
  import { catalog } from "@/data/catalog";

  const breadcrumbs = ref([]);

  const params = new URL(document.location.href).searchParams;
  const style = styles[params.get('style')].name;

  if (style) breadcrumbs.value.push(style);

  const gender = params.get('category').startsWith("woman") ? "woman" : "man";
  const category = catalog[gender][params.get('category')].description;
  const subcategory = catalog[gender][params.get('category')].subcategory[params.get('subcategory')];

  breadcrumbs.value.push(category, subcategory);

  const filteredArticles = params.get('subcategory') === "all" ? articles[params.get('category')] : articles[params.get('category')].filter(i => i.category === params.get('subcategory'));
</script>

<style lang="scss" scoped></style>
