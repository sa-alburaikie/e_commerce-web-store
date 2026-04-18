import { defineStore } from 'pinia'

import axios from 'axios'
export const productsModule = defineStore('productModule', {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: [],
    fragrances: [],
    sports_accessories: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        title: 'Smart Phones',
        route: 'smartphones',
      },
      {
        title: 'Laptops',
        route: 'laptops',
      },
      {
        title: 'Furniture',
        route: 'furniture',
      },
      {
        title: "Fragrances",
        route: 'fragrances',
      },
      {
        title: "Men's Watches",
        route: 'mens-watches',
      },
      {
        title: "Women's Bags",
        route: 'womens-bags',
      },
      {
        title: 'Sports Accessories',
        route: 'sports-accessories',
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get('https://dummyjson.com/products?limit=200')
        .then((res) => {
          this.newProducts = res.data.products.filter((el) => el.category === 'laptops')
          this.flashDeals = res.data.products.slice(0, 8)
          this.mobilePhones = res.data.products.filter((el) => el.category === 'smartphones')
          this.fragrances = res.data.products.filter((el) => el.category === 'fragrances')
          this.sports_accessories = res.data.products.filter(
            (el) => el.category === 'sports-accessories',
          )
        })
        .catch((err) => console.log(err))
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) =>{
        this.categoryProducts = res.data;
        })
    },
    async getProductsById(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) =>{
        this.singleProduct = res.data;
        })
    },
  },
})
