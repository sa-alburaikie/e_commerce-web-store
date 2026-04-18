<template>
  <div class="new-products pt-12">
    <div class="title px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px" class="text-black">New Products</h2>
      <router-link
        style="text-decoration: underline; color: black; font-weight: bold"
        :to="{
          name: 'products_category',
          query: { title: categories[index].title, category: categories[index].route },
        }"
        >Shop All</router-link
      >
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="7" v-if="!products.length" class="pt-16">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader type="image, article, button"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="7" class="order-1 order-md-0" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            :breakpoints="breakpoints"
            class="pb-9 px-5"
          >
            <swiper-slide v-for="item in products" :key="item.id">
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
                      width="60"
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
                  ({{ item.title }})
                  {{
                    item.title.split(' ').length + item.description.split(' ').length <= 6
                      ? item.description
                      : item.description
                          .split(' ')
                          .slice(0, 7 - item.title.split(' ').length)
                          .join(' ') + ' ...'
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
                <div class="toggle">
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
                </div>
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
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="5" class="pt-16">
          <img src="@/assets/images/bannerLogo.jpg" alt="" class="w-100" height="400" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination } from 'swiper'
import { mapState } from 'pinia'
import { productsModule } from '@/stores/products'
import { breakpoints } from 'vuetify/lib/composables/display'
export default {
  inject: ['Emitter'],
  methods: {
    openQuickView(product) {
      this.Emitter.emit('OpenQuickView', product)
    },
  },
  props: {
    products: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },
  setup() {
    return {
      modules: [Pagination],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(productsModule, ['categories']),
  },
  data: () => {
    return {
      showInItem: {},
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        580: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    }
  },
}
</script>

<style lang="scss">
.new-products {
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}

//Media Queries
@media (max-width: 580px) {
  .new-products {
    text-align: center;
    .v-btn-group {
      justify-content: center;
    }
    .swiper-button-next,
    .swiper-button-prev {
      top: 50%;
    }
    .img-parent {
      height: 300px !important;
    }
  }
}
</style>
