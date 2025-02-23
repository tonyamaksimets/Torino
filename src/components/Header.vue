<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon to="/menu"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <v-btn size="x-large" to="/">
        <Logo height="52px"></Logo>
      </v-btn>
    </v-app-bar-title>

    <v-bottom-sheet
      v-if="!user"
      v-model="dialog"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{}">
        <v-btn icon @click="dialog = true"><v-icon>mdi-account</v-icon></v-btn>
      </template>

      <div class="modal">
        <v-btn
          class="modal__button"
          variant="flat"
          icon="mdi-close"
          @click="dialog = false"
        ></v-btn>
        <Auth/>
      </div>
    </v-bottom-sheet>
    
    <div v-else>
      <v-btn icon to="/favourite"><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn icon to="/cart"><v-icon>mdi-cart</v-icon></v-btn>
      <v-btn
        icon
        to="/profile"
        color="var(--primary-color)"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<script setup>
  import { ref, computed, watch } from "vue";
  import Logo from "@/components/Logo.vue";
  import Auth from "@/components/Auth.vue";
  import { useStore } from 'vuex';
  import useEventsBus from '@/eventBus.js';

  const { bus } = useEventsBus();

  const store = useStore();

  const user = computed(() => store.state.currentUser);
  const dialog = ref(false);

  watch(() => bus.value.get("closeAuthModal"), () => {
    dialog.value = false;
  });

  watch(() => bus.value.get("openAuthModal"), () => {
    dialog.value = true;
  });
</script>

<style lang="scss" scoped></style>
