<template>
  <div>
    <!-- <Nav /> -->
    <Hero />
    <Product id="products" />
    <About id="about" />
    <Testimonials />
    <Popular />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Product from "@/components/Product.vue";
import About from "@/components/About.vue";
import Testimonials from "@/components/Testimonials.vue";
export default {
  components: {
    // Nav,
    Hero,
    Product,
    About,
    Testimonials,
  },
};
</script>

<style lang="scss" scoped></style>
