<template>
    <v-expansion-panel>
      <v-expansion-panel-title style="padding: 10px;">
        <div class="stylist">
          <v-img
            cover
            height="100px"
            width="100px"
            :src="stylist.photo"
            style="flex-grow: 0; border-radius: 50%"
          ></v-img>
          <v-card variant="text">
            <v-card-title style="padding: 0; white-space: normal">
              <p style="font-size: 1rem;">{{ stylist.name }}</p>
              <p style="opacity: 0.6; font-size: 0.8rem;">{{ stylist.description }}</p>
            </v-card-title>
          </v-card>
        </div>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-text-field
            v-model="appointment.localDate"
            label="Дата консультации"
            color="var(--primary-color)"
            variant="underlined"
            readonly
          ></v-text-field>

          <v-date-picker
            hide-header
            first-day-of-week="1"
            color="var(--primary-color)"
            v-model="appointment.date"
            show-adjacent-months
            width="100%"
            title=""
            @update:modelValue="handleDatePick"
          ></v-date-picker>

          <v-chip-group
            mandatory
            color="var(--primary-color)"
            v-model="appointment.time"
            @update:modelValue="handleDatePick"
          >
            <v-chip
              v-for="time in times"
              :key="time"
              :text="time"
            ></v-chip>
          </v-chip-group>
          <v-btn
            v-if="user"
            color="var(--primary-color)"
            :text="props.appointment ? 'Перенести' : 'Записаться'"
            variant="tonal"
            block
            style="margin-top: 10px;"
            @click="handleSignClick"
          ></v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>

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
            <p>Вы успешно записались!</p>
          </v-card-title>
          <v-card-text style="text-align: center;">
            <p>В ближайшее время с Вами свяжется менеджер для уточнения информации.</p>
            <p>Все записи Вы можете просмотреть в профиле.</p>
          </v-card-text>
          <v-card-actions style="display: flex; justify-content: center;">
            <v-btn
              color="var(--primary-color)"
              text="Ок"
              variant="tonal"
              to="/profile"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
</template>

<script>
  export default {
    name: "StylistCard",
  };
</script>

<script setup>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const user = computed(() => store.state.currentUser);
  const dialog = ref(false);

  const props = defineProps({
    stylist: {
      type: Object,
      default() { return {}}
    },
    appointment: {
      type: String,
    }
  });

  const times = ["10:00", "12:00", "14:00", "16:00", "18:00"];

  const appointment = ref({
    id: Math.floor(100000 + Math.random() * 900000),
    stylist: props.stylist.name,
    date: new Date(),
    localDate: null,
    time: 0,
  });

  const handleDatePick = () => {
    appointment.value.localDate = `${new Date(appointment.value.date).toLocaleString("ru-Ru",
      { year: "numeric", month: "long", day: "numeric" }
    )} ${times[appointment.value.time] ? ", " + times[appointment.value.time] : ""}`;
  };

  if (props.appointment) {
    const cur = user.value.appointments.find(i => i.id == props.appointment);

    appointment.value.id = cur.id;
    appointment.value.date = new Date(cur.date);
    appointment.value.time = times.indexOf(cur.time);
    handleDatePick();
  }

  const handleSignClick = () => {
    appointment.value.time = times[appointment.value.time];
    delete appointment.value.localDate;

    if (props.appointment) {
      store.state.currentUser.appointments[user.value.appointments.findIndex(i => i.id == props.appointment)] = appointment.value;
    } else {
      store.state.currentUser.appointments.push(appointment.value);
    }

    dialog.value = true;
  };
</script>

<style lang="scss" scoped>
  .stylist {
    display: flex;
    gap: 20px;
  }
</style>
