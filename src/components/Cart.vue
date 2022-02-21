<template>
  <div class="mt-16 pt-16">
    <div class="text-center pb-10">
      <h1 class="mb-5">Your cart items</h1>
      <router-link to="/">Back to shopping</router-link>
    </div>
    <div class="container">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        hide-default-header
        hide-default-footer
      >
        <template v-slot:header>
          <thead>
            <tr>
              <th v-for="header in headers" :key="header.id" class="py-2">
                <h2>
                  {{ header.text }}
                </h2>
              </th>
            </tr>
          </thead>
        </template>
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="py-5">
                <div class="d-flex align-center">
                  <img :src="item.img" width="120px" height="120px" />
                  <div class="ml-10 text-start">
                    <h1 class="mb-4">Spiced Mint Candleaf®</h1>
                    <v-btn color="success" class="pl-0" text> Remove </v-btn>
                  </div>
                </div>
              </td>
              <td>
                <p>{{ item.price }}</p>
              </td>
              <td>
                <div
                  class="text-center py-2 d-flex justify-center cart__action"
                >
                  <v-icon color="success" class="mr-5">mdi-plus</v-icon>
                  <p>1</p>
                  <v-icon class="ml-5">mdi-minus</v-icon>
                </div>
              </td>
              <td>
                <h1>{{ item.price }}</h1>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <v-divider></v-divider>
      <div class="my-10 pa-10 cart__summary">
        <div class="cart__summary-checkout">
          <div class="d-flex align-cneter justify-space-between">
            <h2>Sub-total</h2>
            <h2>$ 9.99</h2>
          </div>
          <div class="d-flex align-cneter justify-space-between mt-5">
            <h3 class="">Tax and shipping cost will be calculated later</h3>
            <v-btn color=""> Check-out </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Product",
          align: "start",
          value: "product",
          sortable: false,
        },
        { text: "Price", value: "price", sortable: false },
        { text: "Quantity", value: "quantity", sortable: false },
        { text: "Total", value: "total", sortable: false },
      ],
      desserts: [
        {
          img: "https://res.cloudinary.com/frozenchicken/image/upload/v1643337430/candleleaf/whitesageamberjar_ra9gcc.jpg",
          price: "$ 9.99",
          quantity: 1,
          title: 2,
        },
        {
          img: "https://res.cloudinary.com/frozenchicken/image/upload/v1643337430/candleleaf/whitesageamberjar_ra9gcc.jpg",
          price: "$ 9.99",
          quantity: 1,
          title: 2,
        },
        {
          img: "https://res.cloudinary.com/frozenchicken/image/upload/v1643337430/candleleaf/whitesageamberjar_ra9gcc.jpg",
          price: "$ 9.99",
          quantity: 1,
          title: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}
p {
  margin-bottom: 0px !important;
}
.cart {
  &__summary {
    background: #468a6a;
    color: #fff;
    &_checkout {
      max-width: 760px;
      width: 100%;
    }
  }
  &__action {
    max-width: 125px;
    width: 100%;
    background: #fff;
    border: 2px solid #56b280;
    @media (max-width: 1280px) {
      text-align: center;
      margin: 0 auto;
    }
  }
}
.checkout {
  max-width: 605px;
  width: 100%;
}
</style>
