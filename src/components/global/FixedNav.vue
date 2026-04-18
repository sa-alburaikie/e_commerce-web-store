<template>
  <div class="fixed-nav">
    <v-app-bar color="#02218f">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <img
              height="60"
              src="../../assets/images/logo.png"
              alt=""
              @click="$router.push({ name: 'home' })"
              style="cursor: pointer"
            />
          </v-col>
          <v-col cols="7" md="8" lg="7" class="mt-5">
            <ul class="links d-flex text-white justify-space-between" style="list-style: none">
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    query: { category: category.route, title: category.title },
                  }"
                  style="color: white; text-decoration: none"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="3" md="2" lg="3" class="d-flex justify-end align-center" style="gap: 20px">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 24 24">
              <path
                fill="white"
                d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5Z"
              />
            </svg>
            <div
              class="cart d-flex flex-column align-center"
              :style="`cursor: pointer;pointer-events: ${$route.name == 'cart-page'?'none':'unset'}`"
              @click="openCart"
            >
              <v-badge
                location="right top"
                color="red"
                offset-x="-14"
                :content="cartItems.length"
                v-if="cartItems.length"
              ></v-badge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style="color: #ffb547; padding-top: 2px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0V1Zm7.764 11h10.515l2.334-7H5.855l1.909 7ZM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"
                />
              </svg>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart'
import { productsModule } from '@/stores/products'
import { mapState } from 'pinia'
export default {
  inject: ['Emitter'],
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    },
  },
  computed: {
    ...mapState(productsModule, ['categories']),
    ...mapState(cartStore, ['cartItems']),
  },
}
</script>
