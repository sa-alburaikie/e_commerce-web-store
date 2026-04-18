<template>
  <div class="product-details">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <img :src="mainImage" alt="" class="w-100" height="500px" v-if="!loading" />
          <v-skeleton-loader
            type="image,image,image"
            v-if="loading"
            class="mt-14"
          ></v-skeleton-loader>
          <v-tabs center-active height="220" v-model="tab" class="mt-10">
            <v-tab v-for="(img, i) in singleProduct.images" :key="i" class="mx-10" :value="img">
              <img :src="img" alt="" width="100" height="200" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5" class="mt-16">
          <v-skeleton-loader type="article,article,article" v-if="loading"></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title class="px-0" style="font-size: 19px; font-weight: bold">
              ({{ singleProduct.title }}) Sample - {{ singleProduct.category }} For Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="small"
                density="comfortable"
                class="mt-1"
              ></v-rating>
              <span style="color: #333; font-size: 14px">Stock: {{ singleProduct.stock }}</span>
            </div>
            <v-card-text class="px-0" style="color: #333; font-size: 14px">{{
              singleProduct.description
            }}</v-card-text>
            <v-card-text class="px-0 pt-0" style="color: #333; font-size: 14px"
              >Brand: {{ singleProduct.brand }}</v-card-text
            >
            <v-card-text class="px-0 pt-0" style="color: #333; font-size: 14px"
              >Availability:
              {{ singleProduct.stock > 0 ? 'In Stock' : 'Out of Stock' }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProduct.price }}</del> From
              <span style="font-weight: bold"
                >${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price * (singleProduct.discountPercentage / 100),
                  ).toFixed(2)
                }}</span
              >
            </v-card-text>
            <v-card-text class="px-0 pt-0" style="color: #333; font-size: 14px"
              >Quantity</v-card-text
            >
            <div
              class="counter px-1"
              style="border-radius: 30px; border: 1px solid black; width: fit-content; color: #333"
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
                  singleProduct.price -
                    singleProduct.price * (singleProduct.discountPercentage / 100),
                ).toFixed(2) * quantity
              }}
            </v-card-text>
            <v-card-actions class="mt-8 w-100 px-0">
              <v-btn
                variant="outlined"
                density="compact"
                height="50"
                class="w-75 text-white"
                style="text-transform: none; border-radius: 30px; background-color: rgb(34, 34, 34)"
                @click="addToCart(singleProduct)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products'
import { mapActions, mapState } from 'pinia'
import { cartStore } from '@/stores/cart'
export default {
  inject: ["Emitter"],
  data: () => ({
    loading: false,
    tab: '',
    quantity: 1,
    btnLoading: false,
  }),
  methods: {
    ...mapActions(productsModule, ['getProductsById']),
    ...mapActions(cartStore, ['addItem']),
    addToCart(item) {
      item.quantity = this.quantity
      this.btnLoading = true
      setTimeout(() => {
        this.btnLoading = false
        this.addItem(item)
        this.Emitter.emit('openCart')
        this.Emitter.emit('showMsg', item.title)
      }, 1000)
    },
  },
  computed: {
    ...mapState(productsModule, ['singleProduct']),
    mainImage() {
      return this.tab || this.singleProduct.thumbnail
    },
  },
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
  async mounted() {
    this.loading = true
    await this.getProductsById(this.$route.params.productId)
    this.loading = false
  },
}
</script>
