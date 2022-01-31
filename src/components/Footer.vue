<template>
  <div class="footer white--text py-12">
    <div class="container pb-0">
      <v-divider color="white"></v-divider>
      <div class="d-flex flex-wrap footer__content">
        <div class="footer__img">
          <img
            src="https://res.cloudinary.com/frozenchicken/image/upload/v1643506117/candleleaf/Images/footer_pmdw2r.png"
            alt=""
          />
          <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-row class="footer__details">
          <v-col class="mt-0" cols="12" sm="4" md="4" lg="4">
            <p class="success--text">Discovery</p>
            <p class="lightgrey--text">New Season</p>
            <p class="lightgrey--text">Most Searched</p>
            <p class="lightgrey--text">Most Selled</p>
          </v-col>
          <v-col class="mt-0" cols="12" sm="4" md="4" lg="4">
            <p class="success--text">About</p>
            <p class="lightgrey--text">Help</p>
            <p class="lightgrey--text">Shipping</p>
            <p class="lightgrey--text">Affiliate</p>
          </v-col>
          <v-col class="mt-0" cols="12" sm="4" md="4" lg="4">
            <p class="success--text">Info</p>
            <p class="lightgrey--text">Contact us</p>
            <p class="lightgrey--text">Privacy Policies</p>
            <p class="lightgrey--text">Terms & Conditions</p>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- <div>
      <h3 class="success--text text-end mt-10 mb-5 mr-16">Hope Philip</h3>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: #272727;
  &__content {
    @media (max-width: 960px) {
      justify-content: center;
    }
  }
  &__img {
    max-width: 250px;
    width: 100%;
    @media (max-width: 960px) {
      margin: 0 auto;
      text-align: center;
      justify-self: center;
    }
  }
  &__details {
    // max-width: 610px;
    margin-top: 40px;
    // width: 100%;
    //text-align: center;
    @media (max-width: 960px) {
      // padding: 0 80px;
      margin-top: 10px;
      justify-items: center;
      text-align: center;
    }
  }
}
</style>
