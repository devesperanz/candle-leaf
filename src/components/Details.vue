<template>
  <div class="container mt-16 details">
    <div
      class="d-flex flex-wrap details__content justify-space-between w-100 mt-10"
    >
      <div class="details__content-img">
        <div class="details__img">
          <img
            src="https://res.cloudinary.com/frozenchicken/image/upload/v1643629175/candleleaf/Images/image_np6zgl.png"
            alt=""
            max-width="528"
            width="100%"
          />
        </div>
        <div class="text-center">
          <h4 class="mt-4 px-4">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </h4>
          <p class="success--text text-capitalize font-weight-bold mt-5">
            <v-icon color="warning darken-2">mdi-truck-fast-outline</v-icon>
            FREE SHIPPING
          </p>
        </div>
      </div>

      <div class="details__description">
        <h1 class="mb-2">Spiced Mint Candleaf®</h1>
        <h3 class="success--text mb-10">$ 9.99</h3>
        <div class="details__action">
          <h3 class="mb-2">Quantity</h3>
          <div class="text-center py-2 d-flex justify-center">
            <v-icon color="success" class="mr-5">mdi-plus</v-icon>
            <p class="mb-0">1</p>
            <v-icon class="ml-5">mdi-minus</v-icon>
          </div>
        </div>
        <div class="details__info text-start pa-3 pb-0 mt-10">
          <p>
            <span class="font-weight-bold">Wax: </span>Top grade Soy wax that
            delivers a smoke less, consistent burn
          </p>
          <p>
            <span class="font-weight-bold">Fragrance: </span>Premium quality
            ingredients with natural essential oils
          </p>
          <div class="d-flex justify-space-between flex-wrap">
            <p>
              <span class="font-weight-bold">Burning Time: </span>70-75 hours
            </p>
            <p><span class="font-weight-bold">Dimension: </span> 10cm x 5cm</p>
            <p><span class="font-weight-bold">Weight: </span> 400g</p>
          </div>
        </div>
        <v-btn color="success" class="mt-10">
          <v-icon>mdi-cart-outline</v-icon>
          + Add to cart
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.details {
  &__content {
    width: 100%;
    margin: 0 auto;
    &-img {
      max-width: 540px;
      width: 100%;
      @media (max-width: 1280px) {
        flex-direction: column-reverse;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
  &__description {
    margin: 0 auto;
    @media (max-width: 1280px) {
      margin: 30px auto;
      text-align: center;
    }
  }
  &__img {
    background: #f7f8fa;
    text-align: center;
  }
  &__action {
    max-width: 125px;
    width: 100%;
    @media (max-width: 1280px) {
      text-align: center;
      margin: 0 auto;
    }
    div {
      background: #fff;
      border: 2px solid #56b280;
    }
  }
  &__info {
    max-width: 520px;
    width: 100%;
    border: 2px solid #e5e5e5;
    border-radius: 8px;
  }
  h1 {
    font-size: 40px;
    line-height: 55px;
    @media (max-width: 600px) {
      font-size: 26px;
    }
  }
}
</style>
