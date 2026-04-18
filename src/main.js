import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//vuetify imports
import 'vuetify/styles'         
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css"

import App from './App.vue'
import router from './router'

//Emitter Config
import mitt from 'mitt';
const Emitter =mitt()

//Swiper Config
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// إنشاء كائن Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.provide('Emitter',Emitter)

app.mount('#app')
