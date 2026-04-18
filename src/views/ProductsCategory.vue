<template>
  <div class="products-category">
    <h1 class="text-center pt-10">{{ $route.query.title }}</h1>
    <v-container fluid>
      <v-card :loading="loading" class="mt-5 pt-5" elevation="0">
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="num in 4" :key="num" v-if="loading">
            <v-skeleton-loader type="image, article, button"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-10 px-sm-5"
          >
            <v-lazy>
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="img-parent position-relative" style="height: 200px; overflow: hidden">
                    <img
                      :src="showInItem[item.title] ? showInItem[item.title] : item.thumbnail"
                      class="w-100"
                      :style="`height: 100%;transition: 0.5s all ease-in-out;scale: ${isHovering ? 1.05 : 1};cursor:pointer;`"
                      alt=""
                      v-bind="props"
                    />
                    <v-btn
                      density="compact"
                      variant="outlined"
                      class="bg-white quick-view-btn"
                      width="90"
                      height="30"
                      style="
                        text-transform: none;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 30px;
                        font-size: 12px;
                        transition: 0.2 all ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-0 pb-1">
                  {{
                    `(${item.title}) ${item.description}`.length <= 57
                      ? `(${item.title}) ${item.description}`
                      : `(${item.title}) ${item.description}`.substring(0, 57) + ' ...'
                  }}</v-card-text
                >
                <v-rating
                  v-model="item.rating"
                  half-increments
                  readonly
                  color="yellow-darken-2"
                  size="x-small"
                  density="comfortable"
                  class="pb-1"
                ></v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ item.price }}</del> From
                  <span class="text-red" style="font-weight: bold"
                    >${{
                      Math.ceil(item.price - item.price * (item.discountPercentage / 100)).toFixed(
                        2,
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle v-model="showInItem[item.title]" class="d-flex flex-wrap">
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :key="i"
                    :value="pic"
                    size="x-small"
                    rounded="circle"
                    :ripple="false"
                  >
                    <img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="border-radius: 50%; border: 1px solid rgb(221 221 221)"
                    />
                  </v-btn>
                </v-btn-toggle>
                <div class="mt-5">
                  <v-btn
                    density="compact"
                    class="py-2 px-12"
                    style="text-transform: none; border-radius: 30px"
                    height="40"
                    variant="outlined"
                    @click="
                      $router.push({ name: 'product_details', params: { productId: item.id } })
                    "
                    >Chooose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products'
import { mapActions, mapState } from 'pinia'
export default {
  inject: ['Emitter'],
  data: () => {
    return {
      showInItem: {},
      loading: false,
    }
  },
  methods: {
    ...mapActions(productsModule, ['getProductsByCategory']),
    openQuickView(product) {
      this.Emitter.emit('OpenQuickView', product)
    },
  },
  watch: {
    async $route() {
      if (this.$route.name == 'products_category') {
        document.documentElement.scrollTo(0, 0)
        this.loading = true
        await this.getProductsByCategory(this.$route.query.category)
        this.loading = false
      }
    },
  },
  async mounted() {
    if (!this.$route.query.category) {
      return this.$router.go(-1)
    }
    this.loading = true
    await this.getProductsByCategory(this.$route.query.category)
    this.loading = false
  },
  computed: {
    ...mapState(productsModule, ['categoryProducts']),
  },
}
</script>

<style lang="scss">
.products-category {
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}

//Media Queries
@media (max-width: 600px) {
  .products-category {
    text-align: center;
    .v-btn-group {
      justify-content: center;
    }

    .img-parent {
      height: 200px !important;
    }
  }
}
</style>
