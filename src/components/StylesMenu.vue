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
        v-for="sub in stylesMenu.subcategory"
        :key="sub.name"
        :title="sub.name"
        :to="`/style?style=${sub.link}`"
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
import {ref} from 'vue';
import ClothesMenu from "@/components/ClothesMenu.vue";

const isOpen = ref(["Стили"]);
const stylesMenu = {
  name: "Стили",
  subcategory: [
    {name: "Классика", link: "classic"},
    {name: "Минимализм", link: "minimalism"},
    {name: "Арт-деко", link: "artdeco"},
    {name: "Old money",link: "oldmoney"},
    {name: "New money", link: "newmoney"},
  ],
}
</script>

<style lang="scss" scoped>
</style>