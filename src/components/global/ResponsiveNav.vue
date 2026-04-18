<template>
  <div class="responsive-nav">
    <v-app-bar>
      <v-container>
        <v-row class="align-center">
          <v-col cols="3" class="d-flex align-center">
            <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-7" width="25" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5Z"
              />
            </svg>
          </v-col>
          <v-col cols="5" class="d-flex align-center justify-start">
            <img
              src="@/assets/images/logo.png"
              style="height: 40px; cursor: pointer; width: 40px"
              @click="$router.push({ name: 'home' })"
            />
            <span
              style="
                color: black;
                font-weight: bold;
                font-size: 15px;
                margin-left: 10px;
                text-decoration: underline;
              "
              >E-Commerce Project</span
            >
          </v-col>
          <v-col cols="4" class="d-flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
              />
            </svg>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-7"
              @click="openCart"
              style="cursor: pointer"
            >
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <v-badge
              location="right top"
              :content="cartItems.length"
              color="black"
              offset-x="-3"
              offset-y="-3"
              v-if="cartItems.length"
            ></v-badge>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import { productsModule } from '@/stores/products';
export default {
  inject: ['Emitter'],
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    },
    openMenu(){
      this.Emitter.emit('openMenu')
    }
  },
  computed: {
    ...mapState(cartStore, ['cartItems']),
  },
}
</script>
