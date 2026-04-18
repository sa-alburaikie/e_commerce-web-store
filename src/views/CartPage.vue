<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="pb-0 px-0">
          <v-breadcrumbs :items="['Home', 'Your cart']" style="font-size: 13px">
            <template v-slot:divider>
              <v-icon color="#686868">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-card-title
            style="font-size: 35px; font-weight: bold; color: #000"
            class="pl-0 pb-0 pr-2 d-flex justify-space-between align-center w-100"
            >Your Cart
          </v-card-title>
          <div class="bar-parent mt-3 position-relative" v-if="cartItems.length">
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
          <v-card-text class="px-0 pt-2" style="color: #686868" v-if="!cartItems.length"
            >Free shipping for all orders over $5000.00!</v-card-text
          >
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
          <v-card-text
            class="px-0 pt-2 text-center mt-5"
            style="color: #111"
            v-if="!cartItems.length"
            >Your Cart is Empty!</v-card-text
          >
          <v-card-actions class="px-0 justify-center" v-if="!cartItems.length">
            <v-btn
              style="text-transform: none; border-radius: 30px; border-color: #d3d3d3"
              variant="outlined"
              density="compact"
              height="45"
              elevation="0"
              class="mx-0 justify-center align-center"
              width="300"
              @click="$router.push({ name: 'home' })"
              >Continue Shopping</v-btn
            >
          </v-card-actions>
        </v-col>
        <v-col cols="12" lg="8" class="px-3" v-if="cartItems.length">
          <v-table class="w-100">
            <thead>
              <tr>
                <th style="font-size: 12px; font-weight: bold">PRODUCT</th>
                <th class="text-center" style="font-size: 12px; font-weight: bold">PRICE</th>
                <th class="text-center" style="font-size: 12px; font-weight: bold">QUANTITY</th>
                <th class="text-center" style="font-size: 12px; font-weight: bold">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%">
                  <v-row class="align-center px-1 mb-4">
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </v-col>
                    <v-col cols="7">
                      <v-card-title
                        class="px-0"
                        style="white-space: pre-wrap; font-size: 14px; line-height: 1.2"
                        >{{ item.title }} Sample - {{ item.category }}</v-card-title
                      >
                      <v-card-text class="px-0 pb-0" style="color: #686868">
                        category: {{ item.category }}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15px" class="text-center">
                  ${{
                    Math.ceil(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)
                  }}
                </td>
                <td style="width: 15px" class="text-center">
                  <div
                    class="counter px-1 d-flex align-center"
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
                </td>
                <td style="width: 15px" class="text-center">
                  ${{
                    Math.ceil(item.price - item.price * (item.discountPercentage / 100)).toFixed(
                      2,
                    ) * item.quantity
                  }}
                </td>
                <td><v-icon @click="deleteItem(item.id)" size="22">mdi-close</v-icon></td>
              </tr>
            </tbody>
          </v-table>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-card-text
            class="px-0 mb-0 mt-2 d-flex align-center"
            style="color: #686868; gap: 10px"
            v-if="cartItems.length"
          >
            <img class="ml-5" src="@/assets/images/cartpage.jpg" width="60" height="60" alt="" />
            <v-col class="ml-4 mt-0">
              <v-row class="d-flex align-center" style="gap: 10px">
                <span class="pt-2">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill-rule="nonzero"
                        d="M11 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 0 1 3 13.374V5.235a1 1 0 0 1 .702-.954L11 2zm0 2.094L5 5.97v7.404a4 4 0 0 0 1.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7V5.97l-6-1.876zM11 12v3h9v-3h-9zm0-2h9V9h-9v1z"
                      />
                    </g>
                  </svg>
                </span>
                <span>Secure Shopping Guarantee</span>
              </v-row>
              <v-row class="d-flex align-center" style="gap: 10px">
                <span class="pt-2">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill-rule="nonzero"
                        d="M11 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 0 1 3 13.374V5.235a1 1 0 0 1 .702-.954L11 2zm0 2.094L5 5.97v7.404a4 4 0 0 0 1.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7V5.97l-6-1.876zM11 12v3h9v-3h-9zm0-2h9V9h-9v1z"
                      />
                    </g>
                  </svg>
                </span>
                <div class="span pt-2">
                  <span>TrustWorthy Services</span>
                </div>
              </v-row>
            </v-col>
          </v-card-text>
        </v-col>
        <v-col cols="12" lg="4" class="px-3 mt-8 mt-lg-0" v-if="cartItems.length">
          <v-card elevation="0">
            <v-card-title style="font-size: 14px; font-weight: bold">ORDER SUMMARY</v-card-title>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex align-center justify-space-between">
              <span>Subtotal</span>
              <span class="font-weight-bold" style="font-size: 15px">${{ calcTotalPrice }}</span>
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text>Get shipping estimate</v-card-text>
            <select
              name=""
              id=""
              class="w-100 pa-3"
              style="border: 1px solid #999; border-radius: 30px; font-size: 14px"
            >
              <option :value="country" v-for="country in countries" :key="country">
                {{ country }}
              </option>
            </select>
            <div class="states">
              <select
                name=""
                id=""
                class="pa-3 mt-4"
                style="
                  border: 1px solid #999;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 55%;
                  margin-right: 1%;
                "
              >
                <option :value="country" v-for="country in countries" :key="country">
                  {{ country }}
                </option>
              </select>
              <input
                type="text"
                name=""
                id=""
                placeholder="Postal Code"
                class="pa-3 mt-4"
                style="
                  border: 1px solid #999;
                  border-radius: 30px;
                  font-size: 14px;
                  width: 43%;
                  margin-left: 1%;
                "
              />
            </div>
            <v-card-actions class="px-0 my-5">
              <v-btn
                style="text-transform: none; border-radius: 30px; border-color: #d3d3d3"
                variant="elevated"
                density="compact"
                height="45"
                elevation="0"
                color="#3673e2"
                class="w-100 justify-center align-center"
                >Calculate Shipping</v-btn
              >
            </v-card-actions>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex align-center justify-space-between">
              <span>TOTAL</span>
              <span class="font-weight-bold" style="font-size: 15px">${{ calcTotalPrice }}</span>
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-actions class="px-0 my-5 flex-column" style="gap: 10px">
              <v-btn
                style="text-transform: none; border-radius: 0px; border-color: #d3d3d3"
                variant="elevated"
                density="compact"
                height="45"
                elevation="0"
                color="#3673e2"
                class="w-100 mx-0 justify-center align-center"
                @click="toCheckOut()"
                >Proceed To Checkout</v-btn
              >
              <v-btn
                style="text-transform: none; border-radius: 0px; border-color: #d3d3d3"
                variant="outlined"
                density="compact"
                height="45"
                elevation="0"
                class="w-100 mx-0 justify-center align-center"
                @click="$router.push({ name: 'home' })"
                >Continue Shopping</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart'
import { mapActions, mapState } from 'pinia'
export default {
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
  data: () => {
    return {
      countries: ['Egypt', 'Lebanon', 'Seria', 'Yemen'],
    }
  },
}
</script>

<style lang="scss">
//Media Queries
@media(max-width:767px){
  .cart-page {
    table {
      width: 800px !important;
    }
  }
}
</style>