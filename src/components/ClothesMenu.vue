<template>
  <div>
    <v-btn-toggle
      v-model="gender"
      divided
      class="catalog__toggle"
      mandatory
    >
      <v-btn value="woman">Женщинам</v-btn>
      <v-btn value="man">Мужчинам</v-btn>
    </v-btn-toggle>
    <v-list>
      <v-list-group v-for="item in Object.entries(catalog[gender])" :key="item[0]" :value="item[1].name">
        <template v-slot:activator="{ props }">
          <v-list-item
            :prepend-icon="item[1].icon"
            color="var(--primary-color)"
            v-bind="props"
            :title="item[1].name"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="sub in Object.entries(item[1].subcategory)"
          :key="sub[0]"
          :title="sub[1]"
          :to="`/catalog?${params}&&category=${item[0]}&subcategory=${sub[0]}`"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
  export default {
    name: "ClothesMenu",
  };
</script>

<script setup>
import {ref} from 'vue';
import { catalog } from "@/data/catalog";

const gender = ref("woman");
const params = new URL(document.location.href).searchParams;
</script>

<style lang="scss" scoped>
  .catalog__toggle {
    padding: 10px;
    display: flex;

    & > button {
      width: 50%;
    }
  }
</style>