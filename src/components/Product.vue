<template>
  <div class="text-center mt-16">
    <h1 class="font-weight-bold">Products</h1>
    <p class="grey--text">Order it for you or for your beloved ones</p>
    <div class="container mt-15">
      <v-row>
        <v-col v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3">
          <Card />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
};
</script>

<style lang="scss" scoped>
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
</style>
