<template>
  <v-list v-model:opened="isOpen">
    <v-list-group :value="stylesMenu.name">
      <template v-slot:activator="{ props }">
        <v-list-item
          color="var(--primary-color)"
          v-bind="props"
          :title="stylesMenu.name"
        ></v-list-item>
      </template>

      <v-list-item
        v-for="category in stylesMenu.categories"
        :key="category[0]"
        :title="category[1].name"
        :to="`/style?style=${category[0]}`"
      ></v-list-item>

      <v-list-group value="Все стили">
        <template v-slot:activator="{ props }">
          <v-list-item
            color="var(--primary-color)"
            v-bind="props"
            title="Все стили"
          ></v-list-item>
        </template>

        <ClothesMenu style="padding-left: 20px"></ClothesMenu>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<script>
  export default {
    name: "StylesMenu",
  };
</script>

<script setup>
import { ref } from 'vue';
import ClothesMenu from "@/components/ClothesMenu.vue";
import { styles } from "@/data/styles";

const isOpen = ref(["Стили"]);
const stylesMenu = {
  name: "Стили",
  categories: Object.entries(styles),
}
</script>

<style lang="scss" scoped></style>
