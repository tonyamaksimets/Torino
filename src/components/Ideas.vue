<template>
  <v-card-title style="text-align: center; font-size: 1rem;">
    <p>Идеи</p>
    <v-divider thickness="2" color="var(--primary-color)"></v-divider>
  </v-card-title>
  <v-expansion-panels v-model="panel" hideActions style="margin: 20px; width: calc(100% - 40px)">
    <IdeaCard
      v-for="(idea, index) in ideas"
      :key="index"
      :variant="idea.variant"
      :articles="idea.articles"
    ></IdeaCard>
  </v-expansion-panels>
</template>

<script>
  export default {
    name: "Ideas",
  };
</script>

<script setup>
  import { ref } from 'vue';
  import IdeaCard from "@/components/IdeaCard.vue";

  defineProps({
    ideas: {
      type: Array,
      default() { return []}
    },
  })

  const panel = ref(0);
</script>

<style lang="scss" scoped></style>
