<template>
  <div class="articles">
    <ArticleCard
      v-for="article in shownArticles"
      :key="article.article"
      :article="article"
      class="articles__article"
    ></ArticleCard>
  </div>
  <v-pagination
    v-model="page"
    :length="pages"
    color="var(--primary-color)"
   ></v-pagination>
</template>

<script>
  export default {
    name: "Articles",
  };
</script>

<script setup>
  import { ref, computed } from 'vue';
  import ArticleCard from "@/components/ArticleCard.vue";

  const props = defineProps({
    articles: {
      type: Array,
      default() {return {}}
    },
  })

  const page = ref(1);
  const pages = computed(() => Math.ceil(props.articles.length / 6));
  const shownArticles = computed(() => JSON.parse(JSON.stringify(props.articles)).splice((page.value - 1) * 6, 6));
</script>

<style lang="scss" scoped>
  .articles {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    gap: 20px 10px;
  }
  .articles__article {
    width: calc(50% - 5px);
  }
</style>
