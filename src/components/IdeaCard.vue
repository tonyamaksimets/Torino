<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <template v-if="variant === 1">
        <div class="idea__imageWrapper">
          <div style="width: calc(60% - 5px)">
            <v-img
              cover
              height="145px"
              width="auto"
              :src="articles[0].image"
            ></v-img>
            <v-img
              cover
              height="145px"
              width="auto"
              :src="articles[1].image"
            ></v-img>
          </div>
          <div style="width: calc(40% - 5px)">
            <v-img
              cover
              height="100px"
              width="auto"
              :src="articles[2].image"
            ></v-img>
            <v-img
              cover
              height="100px"
              width="auto"
              :src="articles[3].image"
            ></v-img>
            <v-img
              cover
              height="100px"
              width="auto"
              :src="articles[4].image"
            ></v-img>
          </div>
        </div>
      </template>
      <template v-if="variant === 2">
        <div class="idea__imageWrapper">
          <div style="width: calc(60% - 5px)">
            <v-img
              cover
              height="300px"
              width="auto"
              :src="articles[0].image"
            ></v-img>
          </div>
          <div style="width: calc(40% - 5px)">
            <v-img
              cover
              height="100px"
              width="auto"
              :src="articles[1].image"
            ></v-img>
            <v-img
              cover
              height="100px"
              width="auto"
              :src="articles[2].image"
            ></v-img>
            <v-img
              cover
              height="100px"
              width="auto"
              :src="articles[3].image"
            ></v-img>
          </div>
        </div>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <div
        v-for="(article, index) in articles"
        :key="index"
        style="display: flex; justify-content: space-between; align-items: baseline;"
      >
        <v-card-title  style="padding: 0; font-size: 1rem; white-space: pre;">
          <span>{{ `${article.price} ₽   ` }}</span>
          <span style="opacity: 0.6; font-size: 1rem;">{{ article.description }}</span>
        </v-card-title>
        <v-card-actions style="padding: 0; min-height: 0;">
          <v-btn
            class="article__icon"
            size="small"
            icon="mdi-heart"
            :color="isFavourite(article) ? 'var(--primary-color)' : ''"
            @click="handleAddDeleteToFavouriteClick(article)"
          ></v-btn>
          <v-btn
            class="article__icon"
            size="small"
            icon="mdi-cart"
            :color="isCart(article) ? 'var(--primary-color)' : ''"
            @click="handleAddDeleteToCartClick(article)"
          ></v-btn>
        </v-card-actions>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
  export default {
    name: "IdeaCard",
  };
</script>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import useEventsBus from '@/eventBus.js';

  const { emit } = useEventsBus();
  const store = useStore();

  const props = defineProps({
    variant: {
      type: Number,
      default: 1,
    },
    articles: {
      type: Array,
      default() { return []}
    },
  })

  const user = computed(() => store.state.currentUser);

  const isFavourite = (item) => user.value?.favourite.find(i => i.article == item.article);
  const isCart = (item) => user.value?.cart.find(i => i.article == item.article);

  const handleAddDeleteToCartClick = (article) => {
    if (!user.value){
      emit("openAuthModal");
      return;
    }

    if (isCart(article)) {
      store.state.currentUser.cart = store.state.currentUser.cart.filter(i => i.article !== article.article);
    } else {
      store.state.currentUser.cart.push(article);
    }
  }

  const handleAddDeleteToFavouriteClick = (article) => {
    if (!user.value){
      emit("openAuthModal");
      return;
    }

    if (isFavourite(article)) {
      store.state.currentUser.favourite = store.state.currentUser.favourite.filter(i => i.article !== article.article);
    } else {
      store.state.currentUser.favourite.push(article);
    }
  }
</script>

<style lang="scss" scoped>
  .idea__imageWrapper {
    width: 100%;
    height: 320px;
    display: flex;
    gap: 10px;

    & > div {
      width: calc(50% - 5px);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
</style>