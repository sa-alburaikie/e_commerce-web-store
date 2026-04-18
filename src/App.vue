<template>
  <v-app class="position-relative">
    <AppLayout />
    <v-main
      :style="`padding-top:${$route.name == 'check-out' ? '0px' : windowWidth <= 990 ? '60px' : '150px'}; margin: 0`"
    >
      <RouterView />
      <QuickView />
      <v-snackbar v-model="bar" location="left bottom" max-width="300" timeout="3000"
        >{{ itemTitle }} has been added to your cart successfully
        <template v-slot:actions>
          <v-icon @click="bar = false">mdi-close</v-icon>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router'
import AppLayout from './components/global/AppLayout.vue'
import QuickView from './components/global/QuickView.vue'
export default {
  inject: ['Emitter'],
  components: {
    AppLayout,
    QuickView,
  },
  data: () => ({
    bar: false,
    itemTitle: '',
    windowWidth: 0,
  }),
  mounted() {
    this.Emitter.on('showMsg', (data) => {
      this.itemTitle = data
      this.bar = true
    })
    this.windowWidth = innerWidth
    window.addEventListener('resize', this.updateWidth)
  },
  methods: {
    updateWidth() {
      this.windowWidth = innerWidth
    },
  },
}
</script>

<style>
/* .v-main {
  padding-top: 41px;
} */
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button,
.v-input input[type='number']::-webkit-inner-spin-button,
.v-input input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
