<template>
  <div class="top-cat">
    <div class="cyber-banner">
      <img src="../../assets/images/home-banner.jpg" class="w-100" style="height: 300px" alt="" />
    </div>
    <div class="categories pt-10">
      <div class="title d-flex justify-center mb-3">
        <h3 class="text-center flex-grow-1" style="font-weight: 900">Top Categories</h3>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="6" sm="4" md="3" lg="2" v-for="cat in categories" :key="cat.title">
            <v-card elevation="0" class="text-center px-2 py-3">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent pt-1"
                  style="
                    overflow: hidden;
                    width: 100%;
                    height: 210px;
                    border-radius: 50%;
                    padding: 5px;
                    position: relative;
                  "
                >
                  <img
                    :src="cat.image"
                    class=""
                    alt=""
                    height="100%"
                    width="100%"
                    :style="`border-radius: 50%;
                        position:absolute;
                        top:0;
                        left:0;
                        object-fit: cover;
                        cursor: pointer;
                        transition: 0.4s all ease-in-out;
                        transform:scale(${isHovering ? 1.05 : 1});`"
                    v-bind="props"
                  />
                </div>
              </v-hover>
              <v-card-text>{{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      categories: [
        {
          title: 'Mobile Phones',
          image:
            'https://www.conquest-phones.com/wp-content/uploads/2022/03/conquest-s20-5g-rugged-phone-tough-smartphone-1-200x200.jpg',
        },
        {
          title: 'Laptops & Tablets',
          image:
            'data:image/jpeg;base64,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',
        },
        {
          title: 'Televisions',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWZYSRlMVDETd8BATac-hfixE_6eGDDzzmQ&s',
        },
        {
          title: 'PCs & Accessories',
          image:
            'https://assets.pcbyte.com.au/newsite/images/202507/thumb_img/Gaming-PCs-Ready2Go-G5-Intel-i5-14400F-GeForce-RTX-5060-Gaming-PC-58938-11.webp',
        },
        {
          title: 'Audio & Video',
          image: 'https://www.costanzo-law.com/wp-content/uploads/2024/05/Recording-200x200.jpg',
        },
        {
          title: 'Gaming & Accessories',
          image: 'https://www.theodist.com/images/CategoryImages/gaming-accessories_1.jpg',
        },
        {
          title: 'Home Appliances',
          image: 'https://triggerappliances.com.au/wp-content/uploads/2025/02/10-200x200.png',
        },
        {
          title: 'Kitchen Appliances',
          image:
            'https://www.wakefords.com/wp-content/uploads/2023/08/bosch-designline-2-slice-toaster-stainless-steel-tat3p420-200x200.png.webp',
        },
        {
          title: 'Cameras',
          image: 'https://dtz3um9jw7ngl.cloudfront.net/p/s/2010967C/2010967C.jpg',
        },
        {
          title: 'Consumables',
          image: 'https://galagar.com/wp-content/uploads/2022/01/Estuche_MIG550W-200x200.jpg',
        },
        {
          title: 'Smart Homes',
          image: 'https://s.alicdn.com/@sc04/kf/Hebf7a9c9c63c47cfaf027a1715a4fa07x.jpg_200x200.jpg',
        },
        {
          title: 'Accessories',
          image:
            'https://www.pointekonline.com/wp-content/uploads/2025/11/vaib-powerboost-PD-20k-200x200.webp',
        },
      ],
    }
  },
}
</script>
