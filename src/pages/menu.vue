<template>
  <StylesMenu></StylesMenu>
  <v-divider thickness="2" color="var(--primary-color)"></v-divider>
  <v-list-item
    title="Онлайн стилист"
    :to="`/stylists`"
  ></v-list-item>

</template>

<script>
  export default {
    name: "Menu",
  };
</script>

<script setup>
  import StylesMenu from "@/components/StylesMenu.vue";
</script>

<style lang="scss" scoped></style>
