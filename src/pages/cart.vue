<template>
  <v-card-title v-if="!user.cart.length" style="text-align: center; font-size: 1rem;">
    <p>В корзине пока нет товаров</p>
    <v-divider thickness="2" color="var(--primary-color)"></v-divider>
  </v-card-title>
  <div v-if="user.cart.length">
    <CartArticleCard
      v-for="article in user.cart"
      :key="article.article"
      :article="article"
    ></CartArticleCard>
    <v-card variant="text">
      <v-card-title style="display: flex; justify-content: space-between">
        <span style="opacity: 0.6;">Итого:</span>
        <span>{{ `${price} ₽` }}</span>
      </v-card-title>

      <v-card-actions>
        <v-btn
          color="var(--primary-color)"
          text="Перейти к оформлению заказа"
          variant="tonal"
          block
        ></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "Cart",
  };
</script>

<script setup>
  import { ref, computed } from 'vue';
  import CartArticleCard from "@/components/CartArticleCard.vue";
  import { useStore } from 'vuex';

  const store = useStore();
  const user = computed(() => store.state.currentUser);
  const price = computed(() => store.state.currentUser.cart.reduce((acc, i) => acc + i.price, 0));
</script>

<style lang="scss" scoped></style>
