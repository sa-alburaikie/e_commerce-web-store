<template>
  <div class="quick-view">
    <v-dialog v-model="dialog" max-width="900" max-height="600">
      <v-icon
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: black;
          color: rgb(228, 224, 224);
          font-size: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white pt-10 px-10">
          <v-row>
            <v-col cols="12" md="7">
              <img
                :src="tab ? tab : product.thumbnail"
                alt=""
                class="w-100"
                height="400px"
                v-if="!loading"
              />
              <v-skeleton-loader
                type="image,image,image"
                v-if="loading"
                class="mt-14"
              ></v-skeleton-loader>
              <v-tabs center-active height="150" v-model="tab" class="mt-10">
                <v-tab v-for="(img, i) in product.images" :key="i" class="mx-10" :value="img">
                  <img :src="img" alt="" width="70" height="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5">
              <v-skeleton-loader type="article,article,article" v-if="loading"></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="font-size: 19px; font-weight: bold; white-space: pre-wrap"
                >
                  ({{ product.title }}) Sample - {{ product.category }} For Sale
                </v-card-title>
                <div class="rating-parent d-flex align-center" style="gap: 10px">
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="small"
                    density="comfortable"
                    class="mt-1"
                  ></v-rating>
                  <span style="color: #333; font-size: 14px">Stock: {{ product.stock }}</span>
                </div>
                <v-card-text class="px-0" style="color: #333; font-size: 14px">{{
                  product.description
                }}</v-card-text>
                <v-card-text class="px-0 pt-0" style="color: #333; font-size: 14px"
                  >Brand: {{ product.brand }}</v-card-text
                >
                <v-card-text class="px-0 pt-0" style="color: #333; font-size: 14px"
                  >Availability: {{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span style="font-weight: bold"
                    >${{
                      Math.ceil(
                        product.price - product.price * (product.discountPercentage / 100),
                      ).toFixed(2)
                    }}</span
                  >
                </v-card-text>
                <v-card-text class="px-0 pt-0" style="color: #333; font-size: 14px"
                  >Quantity</v-card-text
                >
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid black;
                    width: fit-content;
                    color: #333;
                  "
                >
                  <v-icon @click="quantity > 1 ? quantity-- : false" size="22">mdi-minus</v-icon>
                  <input
                    type="number"
                    name=""
                    style="border: none; outline: none; width: 90px"
                    class="text-center py-2"
                    min="1"
                    v-model="quantity"
                    lang="en"
                    inputmode="numeric"
                    id=""
                  />
                  <v-icon @click="quantity++" size="22">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0">
                  Subtotal: ${{
                    Math.ceil(
                      product.price - product.price * (product.discountPercentage / 100),
                    ).toFixed(2) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-2 w-100 px-0">
                  <v-btn
                    variant="outlined"
                    density="compact"
                    height="50"
                    class="w-75 text-white"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      background-color: rgb(34, 34, 34);
                    "
                    :loading="btnLoading"
                    @click="addToCart(product)"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart'
import { mapActions } from 'pinia'

export default {
  inject: ['Emitter'],
  data: () => ({
    loading: false,
    tab: '',
    quantity: 1,
    dialog: false,
    product: '',
    btnLoading: false,
  }),

  watch: {
    '$route.params.productId': {
      immediate: true,
      handler: async function (newId) {
        this.loading = true
        this.tab = ''
        this.loading = false
      },
    },
  },
  methods: {
    ...mapActions(cartStore, ['addItem']),
    addToCart(item) {
      item.quantity = this.quantity
      this.btnLoading = true
      setTimeout(() => {
        this.btnLoading = false
        this.addItem(item)
        this.Emitter.emit('openCart')
        this.Emitter.emit('showMsg', item.title)
        this.dialog = false
      }, 1000)
    },
  },
  mounted() {
    this.Emitter.on('OpenQuickView', (data) => {
      this.loading = true
      this.product = data
      this.dialog = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    })
  },
}
</script>

<style lang="scss">
.content-card {
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    width: 7px;
    background-color: rgb(146, 143, 143);
  }
  &::-webkit-scrollbar-track {
    width: 7px;
    background-color: rgb(206, 204, 204);
  }
}
</style>
