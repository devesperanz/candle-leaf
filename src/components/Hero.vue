<template>
  <div class="hero">
    <div class="hero__content text-center">
      <div class="mt-13 mb-16">
        <img
          src="https://res.cloudinary.com/frozenchicken/image/upload/v1643478931/candleleaf/Images/hero-title_xg7zvl.png"
          alt="hero-img"
          class="mb-4"
        />
        <h1 class="mb-4 font-weight-bold">The nature candle</h1>
        <p>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>

        <v-btn color="success" large class="mt-7">
          Discover our collection
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1643478378/candleleaf/Images/bg-image_dmlpnd.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  position: relative;
  @media (max-width: 600px) {
    background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1643480600/candleleaf/Images/bg-image_nykplx.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__content {
    background: rgba(247, 248, 250, 0.8);
    backdrop-filter: blur(24px);
    max-width: 730px;
    min-width: 146px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // @media (max-width: 600px) {
    //   width: 346px !important;
    // }
    div {
      max-width: 540px;
      width: 100%;
      margin: 0 auto;
    }
    h1 {
      font-size: 40px;
      @media (max-width: 600px) {
        font-size: 30px;
      }
    }
    p {
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
  &__button {
    max-width: 210px;
    width: 100%;
  }
}
</style>
