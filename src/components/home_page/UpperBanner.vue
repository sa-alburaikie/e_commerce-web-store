<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/bannerLogo.jpg" alt="" />

      <div class="cont">
        <h3><span>Huge Saving</span> on UHD Televisions</h3>
        <p class="hint">Sale up to 70% off on selected items</p>
        <v-btn
          variant="outlined"
          class="py-2 px-10 btn"
          height="40"
          density="compact"
          style="border-radius: 30px; text-transform: none"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  width: 100%;
  .parent {
    height: 470px;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cont {
    color: white;
    padding: 50px 0 0 100px;
    position: absolute;
    left: 40px;
    top: 20px;
    width: 600px;
    h3 {
      font-size: 45px;
      font-weight: 900;
      span {
        font-weight: 900;
        color: rgba(13, 202, 76, 0.862);
      }
    }
    .hint {
      margin: 10px 0 30px;
    }
    .btn {
      margin-left: 40px;
    }
  }
}

//Media Queries
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        h3 {
          font-size: 35px;
        }
        width: 500px;
        left: 0;
      }
    }
  }
}
@media (max-width: 776px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        h3 {
          font-size: 30px;
        }
        width: 500px;
        left: 0;
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .cont {
        padding-left: 20px;
        padding-top: 20px;
        h3 {
          font-size: 24px;
        }
        width: 80%;
        left: 0;
        .hint {
          font-size:12px;
        }
        button {
          height: 30px !important;
          width: 130px;
          font-size: 11px;

        }
      }
    }
  }
}
</style>
