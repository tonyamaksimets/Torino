<template>
  <div class="article">
    <v-img
      cover
      height="auto"
      width="100%"
      :src="article.image"
    ></v-img>
    <v-card variant="text">
      <v-card-title  style="padding: 0; font-size: 1rem; white-space: pre;">
        <span>{{ `${article.price} ₽   ` }}</span>
        <span style="opacity: 0.6; font-size: 1rem;">{{ article.description }}</span>
      </v-card-title>

      <v-card-actions style="padding: 0; min-height: 0;">
        <v-btn
          color="var(--primary-color)"
          text="Добавить в корзину"
          variant="tonal"
          density="compact"
          @click="handleAddToCartClick(article.article)"
        ></v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
      class="article__icon"
      variant="text"
      size="small"
      density="compact"
      icon="mdi-heart"
      @click="handleAddToFavouriteClick(article.article)"
    ></v-btn>
  </div>
</template>

<script>
  export default {
    name: "ArticleCard",
  };
</script>

<script setup>
  defineProps({
    article: {
      type: Object,
      default() { return {}}
    },
  })

  const handleAddToCartClick = (article) => {
    // добавить в корзину currentUser
  }

  const handleAddToFavouriteClick = (article) => {
    // добавить в избранное currentUser
  }
</script>

<style lang="scss" scoped>
  .article {
    position: relative;

    .article__icon {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
</style>