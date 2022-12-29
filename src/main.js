import { createApp } from 'vue'
import App from './App.vue'

// vue router plugin
import router from './router'

// vuetify plugin
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// vuex plugin
import store from './store'

loadFonts()

createApp(App).use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
