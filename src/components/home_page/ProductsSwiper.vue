<template>
  <div class="products-swiper py-12">
    <div class="title mb-4 px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px" :class="[`text-${titleColor}`]">{{ title }}</h2>
      <router-link
        style="text-decoration: underline; color: black; font-weight: bold"
        :to="{
          name: 'products_category',
          query: { title: categories[index].title, category: categories[index].route },
        }"
        >Shop All</router-link
      >
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12" class="pt-16">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader type="image, article, button"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-9 px-5"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      :autoplay="{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }"
      :breakpoints="breakpoints"
      :loop="true"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="img-parent position-relative"
              style="height: 200px; overflow: hidden; position: relative"
            >
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
            {{
              `(${item.title}) ${item.description}`.length <= 57
                ? `(${item.title}) ${item.description}`
                : `(${item.title}) ${item.description}`.substring(0, 57) + ' ...'
            }}
            <!-- ({{ item.title }})
            {{
              item.description.split(' ').length <= 10
                ? item.description
                : item.description.split(' ').slice(0, 10).join(' ') + ' ...'
            }} -->
          </v-card-text>
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
                Math.ceil(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)
              }}</span
            >
          </v-card-text>
          <v-btn-toggle v-model="showInItem[item.title]" class="d-flex flex-wrap" mandatory>
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
              @click="$router.push({ name: 'product_details', query: { productId: item.id } })"
              >Chooose Options</v-btn
            >
          </div>
        </v-card>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img
              :src="showInItem[item.title] ? showInItem[item.title] : item.thumbnail"
              class="w-100"
              style="height: 200px"
              alt=""
            />
            <v-card-text class="pl-0 pb-1">
              ({{ item.title }})
              {{
                item.description.split(' ').length <= 10
                  ? item.description
                  : item.description.split(' ').slice(0, 10).join(' ') + ' ...'
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
                  Math.ceil(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)
                }}</span
              >
            </v-card-text>
            <v-btn-toggle v-model="showInItem[item.title]">
              <v-btn v-for="(pic, i) in item.images" :key="i" :value="pic" size="x-small">
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
                >Chooose Options</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import { productsModule } from '@/stores/products'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { mapState } from 'pinia'
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
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => {
    return {
      showInItem: {},
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        805: {
          slidesPerView: 3,
        },
        990: {
          slidesPerView: 4,
        },
      },
    }
  },
  computed: {
    ...mapState(productsModule, ['categories']),
  },
}
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid rgb(83, 81, 81);
    background-color: white;
    top: 36%;
    &::after {
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(77, 74, 74);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}

//Media Queries
@media (max-width: 550px) {
  .products-swiper {
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
