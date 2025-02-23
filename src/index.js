// Plugins
import { registerPlugins } from '@/plugins'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      currentUser: null
    }
  }
})

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(store)
app.mount('#app')

