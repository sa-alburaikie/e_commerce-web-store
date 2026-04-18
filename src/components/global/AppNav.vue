<template>
  <div class="nav-bar">
    <v-app-bar color="#02218f" height="fit-content" class="pt-1" absolute>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <img
              src="@/assets/images/logo.png"
              alt=""
              height="60"
              @click="$router.push({ name: 'home' })"
              style="cursor: pointer"
            />
          </v-col>
          <v-col cols="5">
            <div class="position-relative" style="width: 90%">
              <input
                type="search"
                name="navSearch"
                id="navSearch"
                style="width: 100%; border-radius: 30px"
                outline="none"
                class="py-3 my-2 px-5 bg-white"
                placeholder="Search the store"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #000;
                "
                width="25"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5Z"
                />
              </svg>
            </div>
          </v-col>
          <v-col cols="4" class="ps-8">
            <div class="parent text-white d-flex justify-space-between align-center">
              <div class="available">
                <span>Available 24/7 at</span>
                <br />
                <strong>(090) 123-4567</strong>
              </div>
              <div class="wishlists d-flex flex-column align-center text-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style="color: #ffb547; padding-top: 2px"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 5.5L6.32 3.82a2.375 2.375 0 0 0-3.358 3.36L8 12.216l5.038-5.038A2.375 2.375 0 1 0 9.68 3.821zm0 9.546L1.548 8.594a4.375 4.375 0 0 1 6.187-6.188L8 2.672l.265-.266a4.375 4.375 0 1 1 6.187 6.188z"
                  />
                </svg>
                <span style="color: #ffb547" class="mt-1">Wish Lists</span>
              </div>
              <div class="wishlists d-flex flex-column align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style="color: #ffb547; padding-top: 2px"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"
                  />
                </svg>
                <span style="color: #ffb547" class="mt-1">Sign In</span>
              </div>
              <div
                class="cart d-flex flex-column align-center"
                :style="`cursor: pointer;pointer-events: ${$route.name == 'cart-page'?'none':'unset'}`"
                @click="openCart"
              >
                <v-badge
                  location="right top"
                  :content="cartItems.length"
                  color="#205dc2"
                  offset-x="-14"
                  v-if="cartItems.length"
                ></v-badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style="color: #ffb547; padding-top: 2px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffb547"
                    d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0V1Zm7.764 11h10.515l2.334-7H5.855l1.909 7ZM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"
                  />
                </svg>
                <span style="color: #ffb547" class="mt-1">Cart</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col cols="8" md="9" lg="8">
            <ul class="links d-flex text-white justify-space-between" style="list-style: none">
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    query: { category: category.route, title: category.title },
                  }"
                  style="color: white; text-decoration: none"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="4" md="3" lg="4" class="d-flex justify-end" style="gap: 35px">
            <div class="help d-flex align-center" style="gap: 5px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style="color: #fff; padding-top: 2px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="#02218f"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 5v.01" />
                  <path d="M12 13.5a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4" />
                </g>
              </svg>
              <span>Help</span>
            </div>
            <div class="lang d-flex align-center" style="gap: 5px; cursor: pointer" id="language">
              <span v-html="selectedLang[0].icon"></span>
              <span>{{ selectedLang[0].lang }} / {{ selectedLang[0].currency }}</span>
              <v-icon>mdi-chevron-down</v-icon>

              <v-menu activator="#language">
                <v-list v-model:selected="selectedLang" mandatory>
                  <v-list-item v-for="lang in languages" :key="lang.lang" :value="lang">
                    <v-list-item-title class="d-flex align-center" style="gap: 10px">
                      <span v-html="lang.icon"></span> {{ lang.lang }} /
                      {{ lang.currency }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart'
import { productsModule } from '@/stores/products'
import { mapState } from 'pinia'
export default {
  inject: ['Emitter'],
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    },
  },
  computed: {
    ...mapState(productsModule, ['categories']),
    ...mapState(cartStore, ['cartItems']),
  },
  data: () => {
    return {
      selectedLang: [
        {
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
              <mask id="circleFlagsLangEn0">
                <circle cx="256" cy="256" r="256" fill="#fff" />
              </mask>
              <g mask="url(#circleFlagsLangEn0)">
                <path
                  fill="#eee"
                  d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
                />
                <path
                  fill="#0052b4"
                  d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
                />
                <path
                  fill="#d80027"
                  d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"
                />
              </g>
            </svg>
          `,
          lang: 'EN',
          currency: 'USD',
        },
      ],
      languages: [
        {
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
              <mask id="circleFlagsLangEn0">
                <circle cx="256" cy="256" r="256" fill="#fff" />
              </mask>
              <g mask="url(#circleFlagsLangEn0)">
                <path
                  fill="#eee"
                  d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
                />
                <path
                  fill="#0052b4"
                  d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
                />
                <path
                  fill="#d80027"
                  d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"
                />
              </g>
            </svg>
          `,
          lang: 'EN',
          currency: 'USD',
        },
        {
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
              <mask id="circleFlagsLangDe0">
                <circle cx="256" cy="256" r="256" fill="#fff" />
              </mask>
              <g mask="url(#circleFlagsLangDe0)">
                <path fill="#ffda44" d="m0 345l256.7-25.5L512 345v167H0z" />
                <path fill="#d80027" d="m0 167l255-23l257 23v178H0z" />
                <path fill="#333" d="M0 0h512v167H0z" />
              </g>
            </svg>
          `,
          lang: 'DE',
          currency: 'EURO',
        },
      ],
    }
  },
}
</script>
