<template>
  <v-expansion-panels v-model="panel" hideActions style="margin: 20px 10px; width: calc(100% - 20px)">
    <StylistCard
    :stylist="stylist"
    :appointment="appointmentId"
  ></StylistCard>
  </v-expansion-panels>
</template>

<script>
  export default {
    name: "Appointment",
  };
</script>

<script setup>
  import { ref } from 'vue';
  import { stylists } from "@/data/stylists";
  import StylistCard from "@/components/StylistCard.vue";

  const params = new URL(document.location.href).searchParams;
  const stylist = stylists.find(i => i.name == params.get('stylist'));
  const appointmentId = params.get('id');

  const panel = ref(0);
</script>

<style lang="scss" scoped></style>
