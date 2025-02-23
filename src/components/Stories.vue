<template>
  <v-slide-group class="stories">
    <v-bottom-sheet
      v-for="(story, index) in stories"
      :key="index"
      v-model="dialog[index]"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{}">
        <div class="stories__preview">
          <v-img
            style="border-radius: 50%; flex-grow: 0;"
            cover
            height="90px"
            width="90px"
            :src="story.items[0]"
            @click="dialog[index] = true"
          ></v-img>
          <span style="font-size: 0.8rem; text-align: center; width: 90px;">{{ story.header }}</span>
        </div>
      </template>

      <div class="modal">
        <v-btn
          class="modal__button"
          variant="flat"
          icon="mdi-close"
          @click="dialog[index] = false"
        ></v-btn>
        <Stories :stories="story.items" />
      </div>
    </v-bottom-sheet>
  </v-slide-group>
</template>

<script>
  export default {
    name: "Stories",
  };
</script>

<script setup>
import { ref } from "vue";
import { Stories } from "vue-insta-stories";
import { stories } from "@/data/stories";

const dialog = ref(stories.map(i => false));

</script>

<style lang="scss" scoped>
  .stories {
    margin: 20px 0;

    .stories__preview {
      display: flex;
      flex-direction: column;
      margin: 10px;
    }
  }
</style>
