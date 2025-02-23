<template>
  <v-card-title style="text-align: center;">
    <p>Регистрация в Torino!</p>
    <v-divider thickness="2" color="var(--primary-color)"></v-divider>
  </v-card-title>

  <v-stepper
    v-model="step"
    style="box-shadow: none;"
  >
    <v-stepper-header style="box-shadow: none;" >
      <v-stepper-item
        :value="1"
        :complete="step > 1"
        color="var(--primary-color)"
      ></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item
        :value="2"
        :complete="step > 2"
        color="var(--primary-color)"
      ></v-stepper-item>
      <v-divider></v-divider>
      <v-stepper-item
        :value="3"
        color="var(--primary-color)"
      ></v-stepper-item>
    </v-stepper-header>

    <v-stepper-window style="margin: 0">
      <v-stepper-window-item :value="1">
        <v-form fast-fail @submit.prevent style="padding: 0 0 1rem">
          <v-text-field
            v-model="form.firstName"
            :rules="form.rules"
            label="Имя"
            color="var(--primary-color)"
            variant="underlined"
            style="padding: 0 1rem"
          ></v-text-field>

          <v-text-field
            v-model="form.lastName"
            :rules="form.rules"
            label="Фамилия"
            color="var(--primary-color)"
            variant="underlined"
            style="padding: 0 1rem"
          ></v-text-field>

          <v-text-field
            v-model="form.tel"
            :rules="form.rules"
            type="number"
            label="Телефон"
            color="var(--primary-color)"
            variant="underlined"
            style="padding: 0 1rem"
          ></v-text-field>

          <v-radio-group
            v-model="form.gender"
            inline
            label="Пол"
            color="var(--primary-color)"
            style="padding: 0 0.5rem"
          >
            <v-radio
              label="Женщина"
              value="woman"
            ></v-radio>
            <v-radio
              label="Мужчина"
              value="man"
            ></v-radio>
          </v-radio-group>

          <v-text-field
            v-model="form.localeBirthDate"
            :rules="form.rule"
            label="Дата рождения"
            color="var(--primary-color)"
            variant="underlined"
            style="padding: 0 1rem"
            readonly
          ></v-text-field>

          <v-date-picker
            hide-header
            first-day-of-week="1"
            color="var(--primary-color)"
            v-model="form.birthDate"
            show-adjacent-months
            width="100%"
            title=""
            @update:modelValue="handleDatePick"
          ></v-date-picker>

          <div style="padding: 1rem 0.5rem">
            <v-btn
              text="Продолжить"
              type="submit"
              variant="tonal"
              block
              color="var(--primary-color)"
              @click="handleSubmitClick"
            ></v-btn>
          </div>
        </v-form>
      </v-stepper-window-item>
      <v-stepper-window-item :value="2">
        <v-card-text>
          Torino - от людей людям. Мы заботимся о том, чтобы каждый человек смог выглядеть стильно и чувствовать себя при этом комфортно. По нашей особой программе мы предоставляем данную  возможность людям с физическими отклонениями. Команда Torino готова поддержать каждого и выполнять личные заказы для людей с ограниченными возможностями. Чтобы стилисты могли уделять Вам особое внимание, выберите ответ из предложенных
        </v-card-text>

        <v-radio-group
            v-model="form.hasDisabilities"
            color="var(--primary-color)"
            style="padding: 0 0.5rem"
          >
            <v-radio
              label="Я физически здоров"
              :value="false"
            ></v-radio>
            <v-radio
              label="У меня есть физические отклонения"
              :value="true"
            ></v-radio>
          </v-radio-group>

          <div style="padding: 1rem 0.5rem">
            <v-btn
              variant="tonal"
              block
              color="var(--primary-color)"
              @click="handleSubmitClick"
            >
              Продолжить
            </v-btn>
          </div>
      </v-stepper-window-item>
      <v-stepper-window-item :value="3">
        <v-card
          variant="text"
          width="100%"
        >
          <v-card-text style="text-align: center;">
            <p>Мы отправили код на указанный Вами номер телефона</p>
            <p>Пожалуйста, проверьте сообщения и введите код ниже</p>
          </v-card-text>
          <v-otp-input
            autofocus
            v-model="otp"
          ></v-otp-input>

          <div style="padding: 1rem 0.5rem">
            <v-btn
              variant="tonal"
              block
              color="var(--primary-color)"
              text="Завершить регистрацию"
              @click="handleDoneClick"
            ></v-btn>
          </div>
          <p class="form__info">
            <span>Не получили код?</span>
            <v-btn
              color="var(--primary-color)"
              text="Отправить снова"
              variant="plain"
              density="compact"
              size="x-small"
            ></v-btn>
          </p>
        </v-card>
      </v-stepper-window-item>
    </v-stepper-window>

  </v-stepper>

  <v-dialog v-model="dialog">
    <div class="modal">
      <v-btn
        class="modal__button"
        variant="flat"
        icon="mdi-close"
        @click="dialog = false"
      ></v-btn>
      <v-card>
        <v-card-title style="text-align: center;">
          <v-icon color="var(--primary-color)">mdi-check</v-icon>
          <p>Вы успешно зарегистрировались!</p>
        </v-card-title>
        <v-card-text>
          <p>Вы можете пройти тест на определение своего стиля или сразу перейти к поиску товаров</p>
        </v-card-text>
        <v-card-actions style="display: flex; justify-content: space-between;">
          <v-btn
            color="var(--primary-color)"
            text="Пройти сейчас"
            variant="tonal"
            to="/test"
          ></v-btn>
          <v-btn
            color="var(--primary-color)"
            text="Пройти позже"
            variant="outlined"
            @click="handleCloseClick"
            to="/"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
  export default {
    name: "Registration",
  };
</script>

<script setup>
import { ref } from "vue";
import { useStore } from 'vuex';

const store = useStore();

const step = ref(1);
const otp = ref();
const dialog = ref(false);

const form = ref({
  firstName: "",
  lastName: "",
  tel: "",
  gender: "woman",
  birthDate: null,
  localeBirthDate: null,
  hasDisabilities: false,
  rules: [
    value => {
      if (value) return true;
      return "Обязательное поле";
    },
  ],
});

const handleDatePick = () => {
  form.value.localeBirthDate = new Date(form.value.birthDate).toLocaleString("ru-Ru",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

const handleSubmitClick = () => {
  step.value += 1;
}

const handleDoneClick = () => {
  const user = {...form.value};
  delete user.rules;
  user.appointments = [];
  user.cart = [];
  user.favourite = [];
  user.initials = user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();
  store.state.currentUser = user;

  dialog.value = true;
}
</script>

<style lang="scss" scoped>
  .form__label {
    opacity: 0.6;
    margin-left: 1rem;
  }

  .form__info {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
</style>
