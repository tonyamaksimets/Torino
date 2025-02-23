<template>

  <v-card-title style="text-align: center;">
    <p>{{ styles[style].name }}</p>
    <v-divider thickness="2" color="var(--primary-color)"></v-divider>
  </v-card-title>

  <v-card variant="text">
    <v-card-text style="text-align: center;">
      {{styles[style].description}}
    </v-card-text>
  </v-card>

  <ClothesMenu></ClothesMenu>
  <Ideas :ideas="ideas"></Ideas>
</template>

<script>
  export default {
    name: "Style",
  };
</script>

<script setup>
import ClothesMenu from "@/components/ClothesMenu.vue";
import Ideas from "@/components/Ideas.vue";
import { styles } from "@/data/styles";
import { ideas } from "@/data/ideas";

const params = new URL(document?.location.href).searchParams;
const style = params.get('style');
</script>

<style lang="scss" scoped></style>
