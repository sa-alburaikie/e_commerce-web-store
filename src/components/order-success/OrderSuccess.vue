<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent attach="">
      <v-card class="text-center py-7">
        <div class="icon text-center">
          <v-icon
            size="75"
            color="green"
            style="
              background-color: white;
              color: green;
              width: 100px;
              height: 100px;
              font-size: 76px;
              border: 1px solid green;
              border-radius: 50%;
            "
            class="success-icon"
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          style="font-size: 30px; font-weight: bold; color: rgb(93, 93, 93); white-space: pre-wrap"
          >Order Placed Successfully</v-card-title
        >
        <v-card-text style="font-size: 17px; color: rgb(93, 93, 93)"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci reiciendis totam vero
          et eligendi sapiente ipsam doloremque, corporis eum. Cumque voluptate reiciendis illo
          magnam ex quasi laborum dignissimos quod atque.</v-card-text
        >
        <v-card-actions class="mt-5 justify-center">
          <v-btn variant="flat" color="blue" @click="resetData">Got it !</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart'
import { mapActions } from 'pinia'
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit('close_popup')
        }, 200)
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ['resetItems']),
    resetData() {
      this.dialog = false
      this.$router.push({ name: 'home' })
      setTimeout(() => {
        this.resetItems()
      }, 1000)
    },
  },
  mounted() {
    this.dialog = this.popup
  },
}
</script>

<style lang="scss">
//Media Query
@media (max-width: 600px) {
  .order-success {
    .success-icon {
      font-size: 30px !important;
      height: 50px !important;
      width: 50px !important;
    }
    .v-card-title {
      font-size: 16px !important;
    }
    .v-card-text {
      font-size: 12px !important;
    }
  }
}
</style>
