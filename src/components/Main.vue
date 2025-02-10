<template>
  <Logo width="80%" style="margin: auto;"></Logo>
  <v-card color="var(--primary-color)" class="main__text">
    <v-card-text color="#ffffff" style="font-size: 20px">
      «Torino - от людей людям. Мы заботимся о том, чтобы каждый человек смог выглядеть стильно и чувствовать себя при этом комфортно. По нашей особой программе мы предоставляем данную  возможность людям с физическими отклонениями. Команда Torino готова поддержать каждого и выполнять личные заказы для людей с ограниченными возможностями. Чтобы стилисты могли уделять Вам особое внимание, выберите ответ из предложенных»
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "Main",
  };
</script>

<script setup>
import Logo from "@/components/Logo.vue"
</script>

<style lang="scss" scoped>
  .main__text {
    color: #ffffff;
    margin: 20px;
    font-family: 'Yanone'; 
  }
</style>