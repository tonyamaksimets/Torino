<template>
  <v-card-title style="text-align: center; font-size: 1rem;">
    <p v-if="user.favourite.length">Избранное</p>
    <p v-else>Список избранного пока пуст</p>
    <v-divider thickness="2" color="var(--primary-color)"></v-divider>
  </v-card-title>
  <Articles v-if="user.favourite.length" :articles="user.favourite"></Articles>

</template>

<script>
  export default {
    name: "Favourite",
  };
</script>

<script setup>
  import { ref, computed } from 'vue';
  import Articles from "@/components/Articles.vue";
  import { useStore } from 'vuex';

  const store = useStore();
  const user = computed(() => store.state.currentUser);
</script>

<style lang="scss" scoped></style>
