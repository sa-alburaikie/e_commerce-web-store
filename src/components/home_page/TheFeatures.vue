<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="parent d-flex align-center justify-center flex-column flex-sm-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 512 448"
              class="mr-5 mb-2 mb-sm-0"
            >
              <path
                fill="#000000"
                d="M405 85h-42V43q0-18-13-30.5T320 0H43Q25 0 12.5 12.5T0 43v256q0 17 12.5 29.5T43 341h4q6 19 22.5 31t37.5 12q20 0 36.5-12t22.5-31h180q6 19 22.5 31t36.5 12q21 0 37.5-12t22.5-31h4q18 0 30.5-12.5T512 299v-77q0-17-13-30zM107 341q-8 0-15-6.5T85 320t7-14.5t15-6.5t14.5 6.5T128 320t-6.5 14.5T107 341zm213-42H166q-6-19-22.5-31T107 256q-21 0-37.5 12T47 299h-4v-86h277v86zm0-214v86H43V43h277v42zm85 256q-8 0-14.5-6.5T384 320t6.5-14.5T405 299t15 6.5t7 14.5t-7 14.5t-15 6.5zm64-42h-4q-6-19-22.5-31T405 256q-27 0-42 17V128h12l94 94v77z"
              />
            </svg>
            <span>Free Shipping & Returns</span>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="parent d-flex align-center justify-center flex-column flex-sm-row second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 24 24"
              class="mr-5 mb-2 mb-sm-0"
            >
              <path
                fill="#000000"
                d="M12.025 21.025q-3.425 0-5.725-2.475T4 12.725V5.5q0-.825.588-1.413Q5.175 3.5 6 3.5h12q.825 0 1.413.587Q20 4.675 20 5.5v1.75q0 .4-.15.762q-.15.363-.425.638l-5.775 5.775q-.575.575-1.412.575q-.838 0-1.413-.575L8 11.6l1.4-1.425L12.25 13L18 7.25V5.5H6v7.3q0 2.55 1.725 4.375Q9.45 19 12.025 19q2.5 0 4.237-1.75Q18 15.5 18 13h2q0 3.35-2.312 5.688q-2.313 2.337-5.663 2.337Z"
              />
            </svg>
            <span>Lowest Price Guarantee</span>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="parent d-flex align-center justify-center flex-column flex-sm-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 24 24"
              class="mr-5 mb-2 mb-sm-0"
            >
              <path
                fill="#000000"
                d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1.54A6 6 0 0 0 11 13.91V16h-1a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3h-1v-2.09A6 6 0 0 0 16.46 12H18a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1ZM6 10a2 2 0 0 1-2-2V6h2v2a6 6 0 0 0 .35 2Zm8 8a1 1 0 0 1 1 1v1H9v-1a1 1 0 0 1 1-1Zm2-10a4 4 0 0 1-8 0V4h8Zm4 0a2 2 0 0 1-2 2h-.35A6 6 0 0 0 18 8V6h2Z"
              />
            </svg>
            <span>Longest Warranties Offers</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.features {
  .second {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background-color: rgb(99, 99, 99);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
    &::after {
      content: '';
      position: absolute;
      background-color: rgb(125, 122, 122);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
  }
}

//Media queries
@media (max-width: 600px) {
  .features {
    .second {
      &::before,
      &::after {
        display: none;
      }
    }
  }
}
</style>
