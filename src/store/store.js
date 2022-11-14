import { createApp } from 'vue'
import { createStore } from 'vuex'
import { App } from '../App.vue'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        entries: [],
        entriesCount: 0
    }
  },
  mutations: {
    addEntry (state) {
      state.entriesCount++
    }
  }
})

const app = createApp({App})

// Install the store instance as a plugin
app.use(store)