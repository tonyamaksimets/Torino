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
        <v-card-title>
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
  import {ref} from "vue";

  const result = ref("");
  const dialog = ref(false);
  const answers = ref(["A", "A", "A", "A", "A"]);
  const step = ref(1);
  const steps = ref([
    {
      id: 1,
      question: "Какой интерьер Вам больше нравится?",
      variants: [
        {
          label: "Элегантный и традиционный с антикварной мебелью и богатой отделкой",
          value: "A"
        },
        {
          label: "Чистый и простой, с акцентом на функциональность и отсутствие лишних деталей",
          value: "B"
        },
        {
          label: "Роскошный и экстравагантный, с яркими цветами и уникальными элементами декора",
          value: "C"
        },
        {
          label: "Уютный и с историей, с элементами винтажного стиля и семейными реликвиями",
          value: "D"
        },
        {
          label: "Современный и стильный, с акцентом на новые технологии и яркие акценты",
          value: "E"
        }
      ]
    },
    {
      id: 2,
      question: "Какой Ваш любимый материал в одежде?",
      variants: [
        {
          label: "Шерсть, кашемир, шелк — что-то классическое и дорогое",
          value: "A"
        },
        {
          label: "Хлопок, лен — натуральные и простые материалы",
          value: "B"
        },
        {
          label: "Бархат, атлас — что-то с текстурой и блеском",
          value: "C"
        },
        {
          label: "Кожа, деним — прочные и долговечные материалы",
          value: "D"
        },
        {
          label: "Синтетические ткани с яркими принтами и современными текстурамим",
          value: "E"
        }
      ]
    },
    {
      id: 3,
      question: "Какой аксессуар Вы предпочитаете?",
      variants: [
        {
          label: "Часы с классическим дизайном или ювелирные изделия",
          value: "A"
        },
        {
          label: "Минималистичный рюкзак или сумка без лишних деталей",
          value: "B"
        },
        {
          label: "Яркие украшения или необычные аксессуары",
          value: "C"
        },
        {
          label: "Винтажные украшения или аксессуары с историей",
          value: "D"
        },
        {
          label: "Модные и яркие аксессуары, которые привлекают внимание",
          value: "E"
        }
      ]
    },
    {
      id: 4,
      question: "Какой стиль одежды Вам ближе всего?",
      variants: [
        {
          label: "Классический — строгие линии и традиционные силуэты",
          value: "A"
        },
        {
          label: "Минимализм — простота и функциональность",
          value: "B"
        },
        {
          label: "Арт-деко — яркие цвета и геометрические формы",
          value: "C"
        },
        {
          label: "Old money — элегантные и сдержанные наряды с акцентом на качество",
          value: "D"
        },
        {
          label: "New money — стильные и модные вещи, которые подчеркивают статус",
          value: "E"
        }
      ]
    },
    {
      id: 5,
      question: "Какое выражение лучше всего описывает Ваш подход к моде?",
      variants: [
        {
          label: "Я предпочитаю классические вещи, которые никогда не выйдут из моды",
          value: "A"
        },
        {
          label: "Мне важно, чтобы одежда была удобной и практичной",
          value: "B"
        },
        {
          label: "Я люблю экспериментировать с модой и выделяться из толпы",
          value: "C"
        },
        {
          label: "У меня есть свой стиль, который я развиваю на основе традиций",
          value: "D"
        },
        {
          label: "Я слежу за последними трендами и люблю быть в центре внимания",
          value: "E"
        }
      ]
    },
  ]);

  const resultMap = {
    A: { style: "Ваш стиль — классический", description: "Вы цените традиции и элегантность" },
    B: { style: "Ваш стиль — минимализм", description: "Вы предпочитаете простоту и функциональность" },
    C: { style: "Ваш стиль — арт-деко", description: "Вы любите яркие цвета и уникальные детали" },
    D: { style: "Ваш стиль — old money", description: "Вы выбираете вещи с историей и качеством" },
    E: { style: "Ваш стиль — new money", description: "Вы любите современные тренды и яркие акценты, подчеркивающие ваш статус" },
  }

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
  // записать стиль в current.user
}
</script>

<style lang="scss" scoped>

</style>