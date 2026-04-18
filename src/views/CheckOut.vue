<template>
  <div class="check-out">
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col cols="12" md="6" lg="7" class="order-1 order-md-0">
          <v-card
            class="w-100 check-out-left"
            color="white"
            elevation="0"
            style="padding: 60px 40px 0px 120px"
          >
            <v-card-title class="py-0">new-ella-demo</v-card-title>
            <v-breadcrumbs :items="['Cart', 'information']" style="font-size: 12px">
              <template v-slot:divider>
                <v-icon color="#686868">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-card-actions class="justify-space-between align-center mb-7">
              <v-btn color="#6200ff" variant="flat" height="45" style="flex-grow: 1"
                ><span class="pr-1">shop</span>
                <svg
                  fill="#FFF"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="20px"
                  height="20px"
                  viewBox="0 0 256 190"
                  enable-background="new 0 0 256 190"
                  xml:space="preserve"
                >
                  <path
                    d="M205.07,30.68c-27.11,0-48.86,22.04-48.86,49.15c0,26.96,21.89,48.85,48.86,48.85c26.96,0,49-21.89,49-49
	S232.18,30.68,205.07,30.68z M208.74,106.41v7.68h-6.76v-7.44c-5.85,0-11.75-1.55-14.6-3.14l2.47-9.91
	c3.14,1.55,8.07,3.38,13.29,3.38c5.6,0,8.36-2.46,8.36-5.84c0-3.39-2.66-4.79-9.14-7.3c-8.98-3.14-14.59-7.68-14.59-15.75
	c0-7.45,4.93-13.29,13.97-15.13v-8.07h6.76v7.68c5.61,0,9.67,1.16,12.66,2.76l-2.75,9.66c-2.23-0.91-5.85-2.46-10.83-2.46
	c-4.98,0-7.68,2.46-7.68,4.93c0,3.38,3.14,4.69,9.91,7.44c9.22,3.38,13.53,8.07,13.53,15.75
	C223.34,98.34,218.65,104.18,208.74,106.41z M191,139h-47V97c0-20.46-17.88-37-38-37H43C20.91,60,1.99,79.14,2,98v77
	c-0.03,8.53,6,12.99,12,13c6.01,0.01,12-4.45,12-13v-75h8v88h78v-88h8l0.08,50.37c-0.05,8.73,5.34,12.45,10.92,12.63h60
	C207.36,163,207.36,139,191,139z M74.02,2c-14.43,0-25.9,11.56-25.9,25.9c0,14.34,11.56,25.91,25.9,25.91
	c14.25,0,25.81-11.48,25.91-25.91C99.93,13.56,88.36,2,74.02,2z"
                  />
                </svg>
              </v-btn>
              <v-btn
                color="black"
                height="45"
                variant="flat"
                style="flex-grow: 1; text-transform: none"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                    fill="#34A853"
                  />
                  <path
                    d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                    fill="#EB4335"
                  />
                </svg>
                <span class="pl-1">Pay</span>
              </v-btn>
            </v-card-actions>
            <v-card-title
              style="
                font-size: 14px;
                font-weight: 700;
                color: #484848;
                white-space: pre-wrap;
                line-height: 1.2;
              "
              >Shipping Address</v-card-title
            >
            <select
              name=""
              id=""
              class="w-100 pa-3"
              placeholder="Country/Region"
              style="border: 1px solid rgb(217, 217, 217); border-radius: 3px; font-size: 14px"
            >
              <option :value="country" v-for="country in countries" :key="country">
                {{ country }}
              </option>
            </select>
            <div class="user_name d-flex align-center justify-center mt-3" style="gap: 10px">
              <input
                type="text"
                name=""
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  width: 100%;
                  font-size: 14px;
                "
                placeholder="First Name"
                class="pl-2 py-2"
                color="#606060"
                id=""
              />
              <input
                type="text"
                name=""
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  width: 100%;
                  font-size: 14px;
                "
                placeholder="Last Name (optional)"
                class="pl-2 py-2"
                color="#606060"
                id=""
              />
            </div>
            <input
              type="text"
              name=""
              style="
                border: 1px solid rgb(217, 217, 217);
                border-radius: 3px;
                width: 100%;
                font-size: 14px;
              "
              placeholder="Address"
              class="pl-2 py-2 mt-3"
              color="#606060"
              id=""
            />
            <input
              type="text"
              name=""
              style="
                border: 1px solid rgb(217, 217, 217);
                border-radius: 3px;
                width: 100%;
                font-size: 14px;
              "
              placeholder="Appartment, suite, etc... (optional)"
              class="py-2 pl-2 mt-3"
              color="#606060"
              id=""
            />
            <div class="city-parent d-flex align-center justify-center mt-3" style="gap: 10px">
              <input
                type="text"
                name=""
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  width: 100%;
                  font-size: 14px;
                "
                placeholder="City"
                class="pl-2 py-2"
                color="#606060"
                id=""
              />
              <select
                name=""
                id=""
                class="w-100 pa-2"
                placeholder="Government"
                style="border: 1px solid rgb(217, 217, 217); border-radius: 3px; font-size: 14px"
              >
                <option :value="country" v-for="country in countries" :key="country">
                  {{ country }}
                </option>
              </select>
              <input
                type="text"
                name=""
                style="
                  border: 1px solid rgb(217, 217, 217);
                  border-radius: 3px;
                  width: 100%;
                  font-size: 14px;
                "
                placeholder="Postal Code"
                class="pl-2 py-2"
                color="#606060"
                id=""
              />
            </div>
            <v-card-actions class="justify-end pr-0">
              <v-btn
                variant="flat"
                color="#1677b0"
                height="45"
                width="150"
                class="my-7 mr-0"
                @click="dialog = true"
                >Submit</v-btn
              >
            </v-card-actions>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="mb-0" style="font-size: 10px; color: #777777"
              >All Rights Reserved to new-ella-demo</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="5" class="pb-0">
          <v-card
            color="grey-lighten-3"
            elevation="0"
            width="100%"
            height="100%"
            min-height="400"
            style="padding: 60px 120px 0px 40px"
            class="check-out-right"
          >
            <v-card
              elevation="0"
              v-for="item in cartItems"
              :key="item.id"
              width="100%"
              class="d-flex align-center justify-space-between mb-3"
              style="overflow: visible"
              color="transparent"
            >
              <v-badge :content="item.quantity" color="grey-darken-1">
                <img
                  :src="item.thumbnail"
                  alt=""
                  width="50"
                  height="50"
                  style="border-radius: 7px; border: 1px solid rgb(186, 186, 186)"
                />
              </v-badge>
              <div class="title flex-grow-1">
                <v-card-title
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    color: #484848;
                    white-space: pre-wrap;
                    line-height: 1.2;
                  "
                  class="py-0"
                  >({{ item.title }}) Sample-{{ item.category }} for sale</v-card-title
                >
                <v-card-text
                  style="font-size: 12px; color: #777777; white-space: pre-wrap"
                  class="py-0"
                  >{{ item.category }}</v-card-text
                >
              </div>
              <v-card-text class="flex-grow-0 font-weight-bold" style="font-size: 12px"
                >${{
                  Math.ceil(item.price - item.price * (item.discountPercentage / 100)).toFixed(2) *
                  item.quantity
                }}</v-card-text
              >
            </v-card>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex align-center justify-space-between font-weight-bold"
              ><span>Total</span><span>${{ calcTotalPrice }}</span></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <OrderSuccess :popup="dialog" v-if="dialog" @close_popup="dialog = false" />
  </div>
</template>

<script>
import OrderSuccess from '@/components/order-success/OrderSuccess.vue'
import { cartStore } from '@/stores/cart'
import { mapState } from 'pinia'
export default {
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
      dialog: false,
      countries: ['Egypt', 'Lebanon', 'Seria', 'Yemen'],
    }
  },
  components: {
    OrderSuccess,
  },
}
</script>

<style lang="scss">
@media (max-width: 960px) {
  .check-out {
    .check-out-left {
      padding-left: 30px !important;
      padding-right: 30px !important;
    }
    .check-out-right {
      padding-left: 30px !important;
      padding-right: 30px !important;
    }
  }
}
</style>
