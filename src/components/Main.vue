<template>
  <v-card
    variant="tonal"
    color="var(--primary-color)"
    style="font-size: 1rem; margin: 10px"
  >
    <v-card-text style="font-size: 1rem;">
      Torino - от людей людям. Мы заботимся о том, чтобы каждый человек смог выглядеть стильно и чувствовать себя при этом комфортно.
    </v-card-text>
  </v-card>
  <Stories/>
  <Auth v-if="!user"/>
  <ClothesMenu></ClothesMenu>
  <Ideas :ideas="ideas"></Ideas>
</template>

<script>
  export default {
    name: "Main",
  };
</script>

<script setup>
  import { computed } from "vue";
  import ClothesMenu from "@/components/ClothesMenu.vue";
  import Ideas from "@/components/Ideas.vue";
  import { ideas } from "@/data/ideas";
  import Auth from "@/components/Auth.vue";
  import Stories from "@/components/Stories.vue";
  import { useStore } from 'vuex';
  const store = useStore();

  const user = computed(() => store.state.currentUser);

</script>

<style lang="scss" scoped></style>
