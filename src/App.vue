<template>
  <v-app id="app">
    <Nav />
    <!-- <Landing /> -->
    <!-- <Details /> -->
    <Cart />
    <Footer id="contact" />
  </v-app>
</template>

<script>
import Cart from "./components/Cart.vue";
// import Details from "./components/Details.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
// import Landing from "./views/landing.vue";
export default {
  components: { Footer, Nav, Cart },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
// p {
//   margin-bottom: 0px !important;
// }
.container {
  max-width: 1240px;
  width: 100%;
  @media (max-width: 1264px) {
    max-width: 900px;
    width: 100%;
  }
  @media (max-width: 960px) {
    max-width: 600px;
    width: 100%;
  }
}
</style>
