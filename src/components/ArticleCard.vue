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
          :text="isCart ? 'Удалить из корзины' : 'Добавить в корзину'"
          variant="tonal"
          density="compact"
          @click="handleAddDeleteToCartClick(article)"
        ></v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
      class="article__icon"
      variant="text"
      size="small"
      density="compact"
      icon="mdi-heart"
      :color="isFavourite ? 'var(--primary-color)' : ''"
      @click="handleAddDeleteToFavouriteClick(article)"
    ></v-btn>
  </div>
</template>

<script>
  export default {
    name: "ArticleCard",
  };
</script>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import useEventsBus from '@/eventBus.js';

  const { emit } = useEventsBus();
  const store = useStore();

  const props = defineProps({
    article: {
      type: Object,
      default() { return {}}
    },
  })

  const user = computed(() => store.state.currentUser);

  const isFavourite = computed(() => user.value?.favourite.find(i => i.article == props.article.article));
  const isCart = computed(() => user.value?.cart.find(i => i.article == props.article.article));

  const handleAddDeleteToCartClick = (article) => {
    if (!user.value){
      emit("openAuthModal");
      return;
    }

    if (isCart.value) {
      store.state.currentUser.cart = store.state.currentUser.cart.filter(i => i.article !== props.article.article);
    } else {
      store.state.currentUser.cart.push(article);
    }
    isCart.value = !isCart.value;
  }

  const handleAddDeleteToFavouriteClick = (article) => {
    if (!user.value){
      emit("openAuthModal");
      return;
    }

    if (isFavourite.value) {
      store.state.currentUser.favourite = store.state.currentUser.favourite.filter(i => i.article !== props.article.article);
    } else {
      store.state.currentUser.favourite.push(article);
    }
    isFavourite.value = !isFavourite.value;
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
