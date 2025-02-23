<template>
  <v-card variant="text" style="background-color: #ffffff;">
    <v-card-title style="padding-bottom: 0; text-align: center;">
      <p>Добро пожаловать в Torino!</p>
    </v-card-title>

      <v-card-text style="padding-bottom: 0;">
        <p style="margin-bottom: 1.5rem; text-align: center;">
          <span>Впервые у нас?</span>
          <v-btn
            to="/registration"
            color="var(--primary-color)"
            text="Зарегистрируйтесь"
            variant="plain"
            density="compact"
            @click="emit('closeAuthModal')"
          ></v-btn>
        </p>

        <v-text-field
          label="Введите телефон"
          color="var(--primary-color)"
          variant="underlined"
          v-model="tel"
          :hint="error"
          persistent-hint
          type="number"
          @input="error = null"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="var(--primary-color)"
          text="Войти"
          variant="outlined"
          block
          @click="handleAuthClick"
        ></v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "Auth",
  };
</script>

<script setup>
  import { ref } from "vue";
  import users from "@/data/users";
  import { useStore } from 'vuex';
  import useEventsBus from '@/eventBus.js';

  const { emit } = useEventsBus();

  const store = useStore();
  const tel = ref("");
  const error = ref(null);

  const handleAuthClick = () => {
    const tels = users.map(i => i.tel);

    if (tels.includes(tel.value)) {
      const user = users.find(user => user.tel == tel.value);
      store.state.currentUser = user;
      emit("closeAuthModal");
    } else {
      error.value = "Пользователя с таким телефоном не существует";
    }
  }
</script>

<style lang="scss" scoped></style>
