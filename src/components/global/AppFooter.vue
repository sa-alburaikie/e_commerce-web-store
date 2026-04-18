<template>
  <div class="footer">
    <v-footer :app="true" color="grey-lighten-4" absolute>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0" color="transparent">
              <v-card-title style="font-size: 14px; font-weight: 900" class="px-0"
                >SHOP</v-card-title
              >
              <v-card-text
                class="pt-0 pb-3 px-0"
                style="color: #444444"
                v-for="category in categories"
                :key="category.title"
                ><router-link
                  :to="{
                    name: 'products_category',
                    query: { category: category.route, title: category.title },
                  }"
                  style="color: #444444; text-decoration: none"
                  >{{ category.title }}</router-link
                ></v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0" color="transparent">
              <v-card-title style="font-size: 14px; font-weight: 900" class="px-0"
                >Further Info</v-card-title
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444">About</v-card-text>
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Customer Service</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Reward Program</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Shipping & Returns</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Privacy Policy</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Terms & Conditions</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444">Blog</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card elevation="0" color="transparent">
              <v-card-title style="font-size: 14px; font-weight: 900" class="px-0"
                >Customer Service</v-card-title
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444">Search Terms</v-card-text>
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Advanced Search</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Orders And Returns</v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444">Contact Us</v-card-text>
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444">Theme FAQs</v-card-text>
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444">Consultant</v-card-text>
              <v-card-text class="pt-0 pb-3 px-0" style="color: #444444"
                >Store Locations</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" class="pt-3">
            <v-card elevation="0" color="transparent">
              <div class="img-parent px-0" width="100%">
                <img
                  src="@/assets/images/logo.png"
                  class="w-25"
                  style="height: 75px; cursor: pointer"
                  @click="$router.push({ name: 'home' })"
                />
              </div>
              <v-card-text class="pt-0 pb-3 px-2 d-flex" style="color: #444444; gap: 16px">
                <span class="pt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#686868"
                      d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0zm0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85c58.9 0 106.7 47.8 106.7 106.8S314.9 298.6 256 298.6z"
                    />
                  </svg>
                </span>
                <span>685 Market Street, San Francisico, CA 94105 US</span>
              </v-card-text>
              <v-card-text class="pt-0 pb-3 px-2 d-flex" style="color: #444444; gap: 16px"
                ><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#686868"
                      d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"
                    />
                  </svg> </span
                ><span> Call us at (415) 555-5555 </span></v-card-text
              >
              <v-card-text class="pt-0 pb-3 px-2 d-flex" style="color: #444444; gap: 16px"
                ><span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 432 384"
                  >
                    <path
                      fill="#686868"
                      d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h341zm0 86V64L213 171L43 64v43l170 106z"
                    />
                  </svg> </span
                ><span> example@domain.com </span></v-card-text
              >
            </v-card>
            <div class="socials d-flex mt-4" style="gap: 16px">
              <span
                class="d-flex align-center justify-center"
                style="height: 40px; width: 40px; border-radius: 50%; background-color: #454545"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 224 432"
                >
                  <path
                    fill="#FFF"
                    d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"
                  />
                </svg>
              </span>
              <span
                class="d-flex align-center justify-center"
                style="height: 40px; width: 40px; border-radius: 50%; background-color: #454545"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path
                    fill="#FFF"
                    d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67ZM15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89Zm-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59Zm3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z"
                  />
                </svg>
              </span>
              <span
                class="d-flex align-center justify-center"
                style="height: 40px; width: 40px; border-radius: 50%; background-color: #454545"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    fill="#FFF"
                    d="M10.015 0C4.484 0 0 4.473 0 9.99c0 4.232 2.638 7.847 6.364 9.3c-.088-.79-.166-2.002.034-2.865c.183-.78 1.175-4.964 1.175-4.964s-.3-.6-.3-1.484c0-1.386.808-2.426 1.811-2.426c.855 0 1.268.64 1.268 1.406c0 .858-.545 2.14-.829 3.327c-.238.994.502 1.804 1.483 1.804c1.778 0 3.148-1.87 3.148-4.572c0-2.384-1.723-4.058-4.184-4.058c-2.848 0-4.518 2.135-4.518 4.333c0 .86.329 1.786.742 2.284c.083.1.094.188.071.288c-.075.312-.244.999-.279 1.135c-.044.188-.143.226-.335.138c-1.249-.575-2.032-2.398-2.032-3.872c0-3.146 2.296-6.043 6.616-6.043c3.474 0 6.175 2.472 6.175 5.769c0 3.446-2.178 6.218-5.207 6.218c-1.014 0-1.966-.524-2.304-1.149l-.625 2.374c-.225.87-.84 1.96-1.252 2.621A10.07 10.07 0 0 0 9.988 20C15.508 20 20 15.53 20 10.01C20 4.493 15.507.023 9.988.023L10.015 0Z"
                  />
                </svg>
              </span>
              <span
                class="d-flex align-center justify-center"
                style="height: 40px; width: 40px; border-radius: 50%; background-color: #454545"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#FFF"
                    d="M12.206.793c.99 0 4.347.276 5.93 3.821c.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51c.075.045.203.09.401.09c.3-.016.659-.12 1.033-.301a.996.996 0 0 1 .464-.104c.182 0 .359.029.509.09c.45.149.734.479.734.838c.015.449-.39.839-1.213 1.168c-.089.029-.209.075-.344.119c-.45.135-1.139.36-1.333.81c-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014c.255.044.435.27.42.509a.606.606 0 0 1-.045.225c-.24.569-1.273.988-3.146 1.271c-.059.091-.12.375-.164.57c-.029.179-.074.36-.134.553c-.076.271-.27.405-.555.405h-.03a3.19 3.19 0 0 1-.538-.074a6.034 6.034 0 0 0-1.273-.135c-.3 0-.599.015-.913.074c-.6.104-1.123.464-1.723.884c-.853.599-1.826 1.288-3.294 1.288c-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288c-.599-.42-1.107-.779-1.707-.884a6.623 6.623 0 0 0-.928-.074c-.54 0-.958.089-1.272.149a2.879 2.879 0 0 1-.54.074c-.374 0-.523-.224-.583-.42c-.061-.192-.09-.389-.135-.567c-.046-.181-.105-.494-.166-.57c-1.918-.222-2.95-.642-3.189-1.226a.6.6 0 0 1-.055-.225a.496.496 0 0 1 .42-.509c3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869c-.195-.434-.884-.658-1.332-.809a2.233 2.233 0 0 1-.346-.119c-1.107-.435-1.257-.93-1.197-1.273c.09-.479.674-.793 1.168-.793c.146 0 .27.029.383.074c.42.194.789.3 1.104.3c.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"
                  />
                </svg>
              </span>
              <span
                class="d-flex align-center justify-center"
                style="height: 40px; width: 40px; border-radius: 50%; background-color: #454545"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M20 3.894a8.299 8.299 0 0 1-2.357.636a4.062 4.062 0 0 0 1.804-2.234a8.298 8.298 0 0 1-2.605.98A4.13 4.13 0 0 0 13.847 2c-2.266 0-4.103 1.808-4.103 4.04c0 .316.036.624.106.92a11.71 11.71 0 0 1-8.457-4.22a3.974 3.974 0 0 0-.556 2.03a4.02 4.02 0 0 0 1.826 3.362a4.143 4.143 0 0 1-1.859-.505v.05c0 1.957 1.414 3.59 3.29 3.961a4.189 4.189 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.805a8.317 8.317 0 0 1-5.096 1.73A8.42 8.42 0 0 1 0 16.185A11.747 11.747 0 0 0 6.29 18c7.547 0 11.674-6.155 11.674-11.492c0-.175-.004-.35-.012-.523A8.249 8.249 0 0 0 20 3.895Z"
                  />
                </svg>
              </span>
            </div>
          </v-col>
          <v-col cols="12" class="cards_img">
            <div
              class="img_parent text-center mt-0"
            >
              <img
                src="@/assets/images/footer.png"
                style="width: 500px;"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
        <v-row class="bg-white">
          <v-col cols="12" class="d-flex justify-center">
            <div class="copy-right text-center mt-5" style="font-size: 16px; color: #686868">
              <p>
                &copy; {{ new Date().getFullYear() }} Ella Demo, All Rights Reserved. Powered By
                Ella
              </p>
              <p>Programmed By, Salem Mobarek Alburaikie</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(productsModule, ['categories']),
  },
}
</script>

<style lang="scss" scoped>
//Media Queries
@media (max-width: 767px) {
  .cards_img {
    .img_parent {
      img {
        width: 75% !important;
      }
    }
  }
}
</style>
