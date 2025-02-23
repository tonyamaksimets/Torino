<template>
  <div style="margin: 0 10px">
    <div class="article">
      <v-img
        cover
        height="150px"
        width="150px"
        :src="article.image"
        style="flex-grow: 0"
      ></v-img>
      <v-card variant="text">
        <v-card-title  style="padding: 20px 0 20px; font-size: 1rem; white-space: pre;">
          <span>{{ `${article.price} ₽   ` }}</span>
          <span style="opacity: 0.6; font-size: 1rem;">{{ article.description }}</span>
        </v-card-title>

        <v-card-actions style="flex-direction: column; padding: 0; min-height: 0;">
          <v-btn
            width="180px"
            color="var(--primary-color)"
            text="Отложить"
            variant="tonal"
            density="compact"
            @click="handleAddToFavouriteClick(article)"
          ></v-btn>
          <v-btn
            width="180px"
            color="var(--primary-color)"
            text="Удалить из корзины"
            variant="text"
            density="compact"
            @click="handleDeleteFromCartClick(article)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-divider thickness="1" color="var(--primary-color)"></v-divider>
  </div>
</template>

<script>
  export default {
    name: "CartArticleCard",
  };
</script>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const props = defineProps({
    article: {
      type: Object,
      default() { return {}}
    },
  })

  const user = computed(() => store.state.currentUser);

  const isFavourite = computed(() => user.value?.favourite.find(i => i.article == props.article.article));

  const handleDeleteFromCartClick = (article) => {
    store.state.currentUser.cart = store.state.currentUser.cart.filter(i => i.article !== props.article.article);
  }

  const handleAddToFavouriteClick = (article) => {
    if (!isFavourite.value) {
      store.state.currentUser.favourite.push(article);
    }
    store.state.currentUser.cart = store.state.currentUser.cart.filter(i => i.article !== props.article.article);
  }
</script>

<style lang="scss" scoped>
  .article {
    display: flex;
    gap: 20px;
    padding: 10px 0;
  }
</style>
