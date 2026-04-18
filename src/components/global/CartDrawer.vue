<template>
  <div class="drawer">
    <v-navigation-drawer
      location="right"
      v-model="drawer"
      :scrim="'rgba(0,0,0,0)'"
      temporary
      :width="windowWidth <= 767 ? windowWidth / 2 : 370"
      class="pr-1 cart-drawer"
    >
      <v-container>
        <v-row>
          <v-col>
            <v-card class="px-0" elevation="0">
              <v-card-title
                style="font-size: 17px; font-weight: bold"
                class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
                >Shopping Cart <v-icon @click="drawer = false">mdi-close</v-icon></v-card-title
              >
              <v-card-text class="px-0 py-0" style="color: #686868"
                >{{ cartItems.length }} Items</v-card-text
              >
              <v-card-text class="px-0" style="color: #686868" v-if="!cartItems.length"
                >Free shipping for all orders over $5000.00</v-card-text
              >
              <v-card-text class="px-0 text-center" style="color: #686868" v-if="!cartItems.length"
                >Your cart is empty</v-card-text
              >
              <div class="bar-parent mt-4 position-relative" v-if="cartItems.length">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  viewBox="0 0 24 24"
                  :style="`
                    position: absolute;
                    bottom: 50%;
                    z-index: 1;
                    left: calc(${
                      parseInt((calcTotalPrice / 5000) * 100) <= 100
                        ? parseInt((calcTotalPrice / 5000) * 100)
                        : 100
                    }% - 20px);
                    transition: 0.15s all ease-in-out;
                    `"
                >
                  <path
                    :fill="
                      parseInt((calcTotalPrice / 5000) * 100) < 50
                        ? 'red'
                        : parseInt((calcTotalPrice / 5000) * 100) >= 50 &&
                            parseInt((calcTotalPrice / 5000) * 100) < 100
                          ? 'orange'
                          : 'green'
                    "
                    d="M2.237 2.288a.75.75 0 1 0-.474 1.423l.265.089c.676.225 1.124.376 1.453.529c.312.145.447.262.533.382c.087.12.155.284.194.626c.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.982 2.26c.601.602 1.36.86 2.26.981c.866.117 1.969.117 3.336.117H18a.75.75 0 0 0 0-1.5h-7c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248c.376-.248.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508C19.533 6 18.506 6 16.45 6H5.745a8.996 8.996 0 0 0-.047-.833c-.055-.485-.176-.93-.467-1.333c-.291-.404-.675-.66-1.117-.865c-.417-.194-.946-.37-1.572-.58l-.305-.1ZM7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"
                  />
                </svg>
                <v-progress-linear
                  :color="
                    parseInt((calcTotalPrice / 5000) * 100) < 50
                      ? '#f57167'
                      : parseInt((calcTotalPrice / 5000) * 100) >= 50 &&
                          parseInt((calcTotalPrice / 5000) * 100) < 100
                        ? 'orange'
                        : 'green'
                  "
                  height="10"
                  :model-value="
                    parseInt((calcTotalPrice / 5000) * 100) <= 100
                      ? parseInt((calcTotalPrice / 5000) * 100)
                      : 100
                  "
                  striped
                ></v-progress-linear>
              </div>
              <v-card-text
                class="px-0 pt-2"
                style="color: #686868"
                v-if="cartItems.length && 5000 - calcTotalPrice > 0"
                >Only ${{ 5000 - calcTotalPrice }} away from Free Shipping</v-card-text
              >
              <v-card-text
                class="px-0 pt-2"
                style="color: #686868"
                v-if="cartItems.length && 5000 - calcTotalPrice <= 0"
                >Your order now is included Free Shipping</v-card-text
              >
              <v-card-actions v-if="!cartItems.length">
                <v-btn
                  style="text-transform: none; border-radius: 30px; border-color: #d3d3d3"
                  class="w-100"
                  height="45"
                  variant="outlined"
                  density="compact"
                  @click="drawer = false"
                  >Continue Shopping</v-btn
                >
              </v-card-actions>
            </v-card>
            <v-card
              class="px-0 mt-5 items-card"
              elevation="0"
              v-if="cartItems.length"
              max-height="400"
              style="overflow-y: auto"
            >
              <v-row v-for="item in cartItems" :key="item.id" class="align-center px-1 mb-4">
                <v-col cols="12" sm="5">
                  <img :src="item.thumbnail" class="w-100" alt="" />
                </v-col>
                <v-col cols="12" sm="7">
                  <v-card-title
                    class="px-0"
                    style="white-space: pre-wrap; font-size: 14px; line-height: 1.2"
                    >{{ item.title }} Sample - {{ item.category }}</v-card-title
                  >
                  <v-card-text class="px-0 pb-0" style="color: #686868">
                    category: {{ item.category }}
                  </v-card-text>
                  <v-card-text class="px-0 pt-2 font-weight-bold">
                    ${{
                      Math.ceil(item.price - item.price * (item.discountPercentage / 100)).toFixed(
                        2,
                      ) * item.quantity
                    }}
                  </v-card-text>
                  <div class="item-footer d-flex justify-space-between align-center">
                    <div
                      class="counter px-1"
                      style="
                        border-radius: 30px;
                        border: 1px solid black;
                        width: fit-content;
                        color: #333;
                      "
                    >
                      <v-icon
                        @click="item.quantity > 1 ? item.quantity-- : false"
                        size="19"
                        color="#606060"
                        >mdi-minus</v-icon
                      >
                      <input
                        type="number"
                        name=""
                        style="border: none; outline: none; width: 35px; font-size: 12px"
                        class="text-center py-2"
                        min="1"
                        v-model="item.quantity"
                        lang="en"
                        inputmode="numeric"
                        color="#606060"
                        id=""
                      />
                      <v-icon @click="item.quantity++" size="19" color="#606060">mdi-plus</v-icon>
                    </div>
                    <v-icon @click="deleteItem(item.id)" size="22">mdi-close</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-card>
            <v-card class="pa-0 mt-5" elevation="0" v-if="cartItems.length">
              <v-card-actions class="flex-column" style="gap: 15px">
                <v-btn
                  style="text-transform: none; border-radius: 30px; border-color: #d3d3d3"
                  variant="elevated"
                  density="compact"
                  height="45"
                  elevation="0"
                  color="blue"
                  class="w-100 justify-center align-center"
                  @click="toCheckOut"
                  >Check Out</v-btn
                >
                <v-btn
                  style="text-transform: none; border-radius: 30px; border-color: #d3d3d3"
                  variant="outlined"
                  density="compact"
                  height="45"
                  class="w-100 justify-center align-center"
                  @click="$router.push({ name: 'cart-page' })"
                  >View Cart</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart'
import { mapActions, mapState } from 'pinia'
export default {
  inject: ['Emitter'],
  data() {
    return {
      drawer: false,
    }
  },
  props: {
    windowWidth: {
      type: Number,
    },
  },
  mounted() {
    this.Emitter.on('openCart', () => {
      this.drawer = true
    })
    this.getCartItems()
  },
  methods: {
    ...mapActions(cartStore, ['getCartItems', 'deleteItem', 'setToLocalStorage']),
    toCheckOut() {
      this.setToLocalStorage()
      this.$router.push({ name: 'check-out' })
    },
  },
  computed: {
    ...mapState(cartStore, ['cartItems']),
    calcTotalPrice() {
      let total = 0
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(product.price - product.price * (product.discountPercentage / 100)) *
          product.quantity
      })
      return total
    },
  },
}
</script>

<style scoped lang="scss">
.drawer {
  .cart-drawer {
    .items-card {
      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-thumb {
        width: 7px;
        background-color: rgb(171, 167, 167);
      }
      &::-webkit-scrollbar-track {
        width: 7px;
        background-color: rgb(219, 216, 216);
      }
    }
  }
}
//Media Queries
@media (max-width: 580px) {
  .drawer {
    .v-card-text {
      font-size: 12px;
    }
    button {
      height: 30px !important;
      font-size: 11px;
    }
  }
}
</style>
