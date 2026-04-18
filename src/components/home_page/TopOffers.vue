<template>
  <div class="top-offers bg-grey-lighten-4 pt-5 pb-9">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" class="px-3 pr-lg-6" style="height: 330px;">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden;height: 100%;border-radius: 7px;">
              <img
                src="../../assets/images/playstation.jpg"
                :style="`width: 100%;cursor:pointer; height: 100%;transition: 0.5s all ease-in-out;scale: ${isHovering ? 1.05 : 1}`"
                alt="playstation"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="px-3 pr-lg-6"  style="height: 330px;">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden;height: 100%;border-radius: 7px;">
              <img
                src="../../assets/images/headset.jpg"
                :style="`width: 100%;cursor:pointer; height: 100%;transition: 0.5s all ease-in-out;scale: ${isHovering ? 1.05 : 1}`"
                alt="headset"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="px-3 pr-lg-6" style="height: 330px;">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden;height: 100%;border-radius: 7px;">
              <img
                src="../../assets/images/chairs.png"
                :style="`width: 100%;cursor:pointer; height: 100%;transition: 0.5s all ease-in-out;scale: ${isHovering ? 1.05 : 1}`"
                alt="playstation"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" class="mt-2 px-3 pr-sm-6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden;height: 100%;border-radius: 7px;">
              <img
                src="../../assets/images/iphones.jpg"
                :style="`width: 100%;height:100%;cursor:pointer;transition: 0.5s all ease-in-out;scale: ${isHovering ? 1.05 : 1}`"
                alt="playstation"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" class="mt-2 px-3 pl-sm-6" >
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden;height: 100%;border-radius: 7px;">
              <img
                src="../../assets/images/laptops.jpg"
                :style="`width: 100%;height:100%;cursor:pointer;transition: 0.5s all ease-in-out;scale: ${isHovering ? 1.05 : 1}`"
                alt="playstation"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
