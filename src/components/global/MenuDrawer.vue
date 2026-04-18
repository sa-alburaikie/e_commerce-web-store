<template>
  <div class="new-drawer">
    <v-navigation-drawer
      v-model="drawer"
      :scrim="'rgba(0,0,0,0)'"
      temporary
      :width="windowWidth <= 767 ? windowWidth / 2 : 300"
      class="pr-0 cart-drawer"
    >
      <v-container>
        <v-row class="align-start pa-0">
          <v-col class="px-3 pt-0">
            <v-card class="px-0" elevation="0">
              <v-card-title
                style="font-size: 17px; font-weight: bold"
                class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
                >Menu <v-icon @click="drawer = false">mdi-close</v-icon></v-card-title
              >
              <v-list>
                <v-list-item
                  class="px-0"
                  @click="
                    $router.push({
                      name: 'products_category',
                      query: { title: cat.title, category: cat.route },
                    })
                  "
                  v-for="cat in categories"
                  :key="cat.route"
                >
                  <v-list-item-title style="cursor: pointer" class="nav-link">{{
                    cat.title
                  }}</v-list-item-title>
                </v-list-item>
                <v-list-group>
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" class="px-0">
                      <v-list-item-title class="nav-link">Languages</v-list-item-title>
                    </v-list-item>
                  </template>
                  <v-list-item>
                    <v-list-item-title class="d-flex align-center nav-link" style="gap: 10px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
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
                      English
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="d-flex align-center nav-link" style="gap: 10px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <mask id="circleFlagsLangDe0">
                          <circle cx="256" cy="256" r="256" fill="#fff" />
                        </mask>
                        <g mask="url(#circleFlagsLangDe0)">
                          <path fill="#ffda44" d="m0 345l256.7-25.5L512 345v167H0z" />
                          <path fill="#d80027" d="m0 167l255-23l257 23v178H0z" />
                          <path fill="#333" d="M0 0h512v167H0z" />
                        </g>
                      </svg>
                      Deutsch
                    </v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products'
import { mapState } from 'pinia'

export default {
  data: () => ({
    drawer: false,
  }),
  inject: ['Emitter'],
  props: {
    windowWidth: {
      type: Number,
    },
  },
  computed: {
    ...mapState(productsModule, ['categories']),
  },
  mounted() {
    this.Emitter.on('openMenu', () => {
      this.drawer = true
    })
  },
}
</script>

<style lang="scss" scoped>

//Media Queries
@media (max-width: 580px) {
  .nav-link {
    font-size: 10px;
  }
}
</style>
