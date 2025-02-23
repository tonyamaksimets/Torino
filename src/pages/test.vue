<template>
  <v-card-title style="text-align: center;">
    <p>Определите свой стиль</p>
    <v-divider thickness="2" color="var(--primary-color)"></v-divider>
  </v-card-title>
  <v-stepper
    mobile
    v-model="step"
    style="box-shadow: none;"
    show-actions
    color="var(--primary-color)"
  >
    <v-stepper-header style="box-shadow: none;" >
      <template v-for="n in steps" :key="n">
        <v-stepper-item
          :value="n.id"
          :complete="step > n.id"
          color="var(--primary-color)"
          style="padding: 1rem"
        ></v-stepper-item>
        <v-divider v-if="n.id < 5" color="var(--primary-color)"></v-divider>
      </template>
    </v-stepper-header>

    <v-stepper-window style="margin: 0">
      <v-stepper-window-item
        v-for="n in steps"
        :key="n"
        :value="n.id"
      >
        <v-card-title style="white-space: normal;">
          <p>{{ n.question }}</p>
        </v-card-title>
        
        <v-radio-group
          style="margin: 0 0.5rem;"
          v-model="answers[n.id - 1]"
          label="Выберите вариант"
          color="var(--primary-color)"
        >
          <v-radio v-for="(variant, index) in n.variants" :key="index" :label="variant.label" :value="variant.value"></v-radio>
        </v-radio-group>
      </v-stepper-window-item>

    </v-stepper-window>

    <v-stepper-actions
      @click:prev="step -= 1"
      @click:next="step += 1"
      prevText="Предыдущий"
      nextText="Следующий"
    ></v-stepper-actions>

    <div v-if="step == 5" style="padding: 1rem 0.5rem">
      <v-btn
        text="Результат"
        block
        style="color: #ffffff;"
        color="var(--primary-color)"
        @click="handleResultClick"
      ></v-btn>
    </div>

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
            <p>{{ result.style }}</p>
          </v-card-title>
          <v-card-text style="text-align: center;">
            <p>{{ result.description }}</p>
          </v-card-text>
          <v-card-actions style="display: flex; justify-content: center;">
            <v-btn
              color="var(--primary-color)"
              text="Ок"
              variant="tonal"
              to="/"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </v-stepper>
</template>

<script>
  export default {
    name: "Test",
  };
</script>

<script setup>
  import { ref } from "vue";
  import { steps, resultMap } from "@/data/test";
  import { useStore } from 'vuex';

  const store = useStore();

  const result = ref("");
  const dialog = ref(false);
  const answers = ref(["A", "A", "A", "A", "A"]);
  const step = ref(1);

  const findMostFrequentElement = (arr) => {
    const frequencyMap = {};

    arr.forEach(element => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    let mostFrequentElement = null;
    let maxCount = 0;

    for (const [element, count] of Object.entries(frequencyMap)) {
      if (count > maxCount) {
          maxCount = count;
          mostFrequentElement = element;
      }
    }

    return mostFrequentElement;
}

const handleResultClick = () => {
  result.value = resultMap[findMostFrequentElement(answers.value)];
  dialog.value = true;
  store.state.currentUser.style = result.value.id;
}
</script>

<style lang="scss" scoped></style>
