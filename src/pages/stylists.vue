<template>
  <v-card
    variant="tonal"
    color="var(--primary-color)"
    style="font-size: 1rem; margin: 10px"
  >
    <v-card-text style="font-size: 1rem;">
      Мы заботимся о том, чтобы каждый человек смог выглядеть стильно и чувствовать себя при этом комфортно. Запишитесь на консультацию к нашему стилисту
    </v-card-text>
  </v-card>
  <Auth v-if="!user"/>
  <Stylists />
</template>

<script>
  export default {
    name: "Stylists",
  };
</script>

<script setup>
  import { computed } from 'vue';
  import Auth from "@/components/Auth.vue";
  import Stylists from "@/components/Stylists.vue";
  import { useStore } from 'vuex';

  const store = useStore();
  const user = computed(() => store.state.currentUser);
</script>

<style lang="scss" scoped></style>
