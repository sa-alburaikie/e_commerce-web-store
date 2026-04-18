<template>
  <div class="layout">
    <CartDrawer :windowWidth="windowWidth" />
    <MenuDrawer :windowWidth="windowWidth" />
    <AppNav v-if="$route.name != 'check-out' && windowWidth > 990" />
    <ResponsiveNav v-if="windowWidth <= 990 && $route.name != 'check-out'" />
    <FixedNav v-if="$route.name != 'check-out' && windowWidth > 990" />
    <AppFooter v-if="$route.name != 'check-out'" />
  </div>
</template>

<script>
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'
import CartDrawer from './CartDrawer.vue'
import FixedNav from './FixedNav.vue'
import ResponsiveNav from './ResponsiveNav.vue'
import MenuDrawer from './MenuDrawer.vue'
export default {
  data: () => ({
    windowWidth: 0,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
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
