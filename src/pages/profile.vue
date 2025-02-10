<template>
  <v-card variant="text">
    <v-card-text>
      <p class="profile__wrapper">
        <v-avatar
          color="var(--primary-color)"
        >
          <span style="color: #ffffff; font-size: 1rem;">{{ user.initials }}</span>
        </v-avatar>
        <p style="font-size: 1rem;">{{ user.firstname }} {{ user.lastname }}</p>
      </p>
      <br>
      <p>Телефон: {{ user.tel }}</p>
      <p>День рождения: {{ user.birthDate }}</p>

      <v-divider style="margin: 0.5rem 0;"></v-divider>

      <p class="profile__wrapper">
        <p>Стиль: {{ styles[user.style] || "Не определен" }}</p>
        <v-btn
          to="/test"
          color="var(--primary-color)"
          :text="user.style ? 'Пройти тест еще раз' : 'Определить стиль'"
          variant="tonal"
          density="compact"
        ></v-btn>
      </p>
      <v-divider style="margin: 0.5rem 0;"></v-divider>
      <p>{{ user.hasDisabilities ? "Есть физические отклонения" : "Нет физических отклонений" }}</p>
      <v-divider style="margin: 0.5rem 0;"></v-divider>

      <div v-if="user.appointments.length">
        <p>Предстоящие консультации:</p>
         <div
          v-for="(appointment, index) in user.appointments"
          :key="index"
         >
          <div style="display: flex">
            <v-icon color="var(--primary-color)">mdi-circle-small</v-icon>
            <div>
              <p>{{ user.appointments[index].date }}, {{ user.appointments[index].time }}</p>
              <p>{{ user.appointments[index].stylist }}</p>
            </div>
          </div>
          <div style="display: flex">
            <v-btn
              to="/stylist"
              color="var(--primary-color)"
              text="Перенести"
              variant="tonal"
              density="compact"
            ></v-btn>
            <v-btn
              color="var(--primary-color)"
              text="Отменить"
              variant="text"
              density="compact"
              @click="handleCancelClick(index)"
            ></v-btn>
          </div>
         </div>

      </div>
      <p v-else="user.appointment.length">Нет предстоящих консультаций</p>
      <v-divider style="margin: 0.5rem 0;"></v-divider>
      <v-btn
        color="var(--primary-color)"
        text="Выйти"
        variant="outlined"
        block
        @click="handleExitClick"
      ></v-btn>
    </v-card-text>
  </v-card>

  <v-dialog v-model="dialog">
    <div class="modal">
      <v-card>
        <v-btn
          class="modal__button"
          variant="flat"
          icon="mdi-close"
          @click="dialog = false"
        ></v-btn>
        <v-card-text>
          <p>Вы уверены, что хотите отменить запись?</p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="var(--primary-color)"
            text="Отменить"
            variant="outlined"
            block
            @click="cancel"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
  export default {
    name: "Profile",
  };
</script>

<script setup>
  import {ref} from 'vue';
  import users from "@/data/users";
  import styles from "@/data/styles";

  const dialog = ref(false);
  const dialogIndex = ref(null);
  const user = ref(users[0]);

  const handleCancelClick = (index) => {
    dialog.value = true;
    dialogIndex.value = index;
  }

  const cancel = () => {
    user.value.appointments.splice(dialogIndex.value, 1);
    dialogIndex.value = null;
    dialog.value = false;
  }

  const handleExitClick = () => {
    //удалить currentUser
  }
</script>

<style lang="scss" scoped>
  .profile__wrapper {
    display: flex;
    gap: 20px;
    align-items: center;
  }
</style>