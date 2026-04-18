<template>
  <div class="homepage">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper :products="flashDeals" title="flashDeals" titleColor="red" :index="2" />
    <TopCategories />
    <NewProducts :products="newProducts" :index="1" />
    <QualityFeatures />
    <ProductsSwiper :products="mobilePhones" title="Top Mobile Phones" titleColor="#222020" :index="0" />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img src="@/assets/images/band.jpg" height="500" class="w-100" alt="" />
        </v-col>
        <v-col cols="6">
          <img src="@/assets/images/band.jpg" height="500" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <ProductsSwiper :products="fragrances" title="Top Fragrances" titleColor="#222020" :index="3" />
    <img src="@/assets/images/tv-banner.jpg" height="500" class="w-100" alt="" />
    <ProductsSwiper :products="sports_accessories" title="Top Sport Accessories" titleColor="#222020" :index="6" />
    <WhyShopwithus />
  </div>
</template>

<script>
import NewProducts from '@/components/home_page/NewProducts.vue'
import ProductsSwiper from '@/components/home_page/ProductsSwiper.vue'
import QualityFeatures from '@/components/home_page/QualityFeatures.vue'
import TheFeatures from '@/components/home_page/TheFeatures.vue'
import TopCategories from '@/components/home_page/TopCategories.vue'
import TopOffers from '@/components/home_page/TopOffers.vue'
import UpperBanner from '@/components/home_page/UpperBanner.vue'
import WhyShopwithus from '@/components/home_page/WhyShopwithus.vue'
import { productsModule } from '@/stores/products'
import { mapActions, mapState } from 'pinia'
export default {
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsSwiper,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopwithus,
  },
  methods: {
    ...mapActions(productsModule, ['getProducts']),
  },
  async mounted() {
    await this.getProducts()
  },
  computed: {
    ...mapState(productsModule, [
      'flashDeals',
      'newProducts',
      'mobilePhones',
      'fragrances',
      'sports_accessories',
    ]),
  },
}
</script>
