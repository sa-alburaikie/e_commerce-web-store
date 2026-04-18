<template>
  <div class="shop-with-us py-10">
    <div class="title">
      <h2 class="text-center"><span>Why Shop</span> With Us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" class="text-center text-white" color="transparent">
            <div class="content-card d-flex align-center justify-center">
              <div class="card">
                <div class="img-parent" style="position: relative;height: 220px;">
                  <img src="@/assets/images/free-shipping.png" height="200" alt="" />
                  <v-card-title
                    class="mt-"
                    style="
                      white-space: pre-wrap;
                      line-height: 1.2;
                      font-weight: 700;
                      position: absolute;
                      bottom: 0px;
                    "
                    >Free Absolutelly Shipping On First Order</v-card-title
                  >
                </div>
                <v-card-text class="pb-0 pt-1" style="font-size: 16px;">Praesent suscipit mattis facilisis</v-card-text>
                <a href="#" style="color: white;text-decoration: underline;font-weight: 700;">Learn More</a>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" class="text-center text-white" color="transparent">
            <div class="content-card d-flex align-center justify-center">
              <div class="card">
                <div class="img-parent" style="position: relative;height: 220px;">
                  <img src="@/assets/images/flash-deals.png" height="180" alt="" />
                  <v-card-title
                    class="mt-"
                    style="
                      white-space: pre-wrap;
                      line-height: 1.2;
                      font-weight: 700;
                      position: absolute;
                      bottom: 22px;
                      left:30px
                    "
                    >Weekly Flash Sale</v-card-title
                  >
                </div>
                <v-card-text class="pb-0 pt-1" style="font-size: 16px;">Praesent suscipit mattis facilisis</v-card-text>
                <a href="#" style="color: white;text-decoration: underline;font-weight: 700;">Learn More</a>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" class="text-center text-white" color="transparent">
            <div class="content-card d-flex align-center justify-center">
              <div class="card">
                <div class="img-parent" style="position: relative;height: 220px;">
                  <img src="@/assets/images/discount.png" height="200" alt="" />
                  <v-card-title
                    class="mt-"
                    style="
                      white-space: pre-wrap;
                      line-height: 1.2;
                      font-weight: 700;
                      position: absolute;
                      bottom: 0px;
                    "
                    >Anual Payment Discount</v-card-title
                  >
                </div>
                <v-card-text class="pb-0 pt-1" style="font-size: 16px;">Praesent suscipit mattis facilisis</v-card-text>
                <a href="#" style="color: white;text-decoration: underline;font-weight: 700;">Learn More</a>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" class="text-center text-white" color="transparent">
            <div class="content-card d-flex align-center justify-center">
              <div class="card">
                <div class="img-parent" style="position: relative;height: 220px;">
                  <img src="@/assets/images/cash.png" height="150" alt="" />
                  <v-card-title
                    class="mt-"
                    style="
                      white-space: pre-wrap;
                      line-height: 1.2;
                      font-weight: 700;
                      position: absolute;
                      bottom: 0px;
                    "
                    >Cashback Reward Programr</v-card-title
                  >
                </div>
                <v-card-text class="pb-0 pt-1" style="font-size: 16px;">Praesent suscipit mattis facilisis</v-card-text>
                <a href="#" style="color: white;text-decoration: underline;font-weight: 700;">Learn More</a>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.shop-with-us {
  background-image: url(../../assets/images/banner-bg.jpg);
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgba(13, 202, 76, 0.862);
      font-weight: bold;
    }
  }
}

//Media Queries
@media (max-width: 600px) {
  .shop-with-us {
    .v-row {
      justify-content: center;
    }
  }
}
</style>
