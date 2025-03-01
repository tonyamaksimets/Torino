<template>
  <v-expansion-panels v-model="panel" hideActions style="margin: 20px 10px; width: calc(100% - 20px)">
    <StylistCard
      v-for="(stylist, index) in stylists"
      :key="index"
      :stylist="stylist"
    ></StylistCard>
  </v-expansion-panels>
</template>

<script>
  export default {
    name: "Ideas",
  };
</script>

<script setup>
  import { ref } from 'vue';
  import StylistCard from "@/components/StylistCard.vue";
  import { stylists } from "@/data/stylists";

  const panel = ref(0);
</script>

<style lang="scss" scoped></style>
