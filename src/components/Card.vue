<template>
  <div>
    <v-card class="mx-auto mb-6 card" max-width="255">
      <v-img
        class="white--text align-end img"
        height="230px"
        src="https://res.cloudinary.com/frozenchicken/image/upload/v1643337430/candleleaf/whitesageamberjar_ra9gcc.jpg"
      />

      <div
        class="py-5 px-5 d-flex text-start justify-space-between align-center"
      >
        <div>
          <p class="font-weight-bold mb-2 mt-0">Rosemary Sage</p>
          <p class="py-0 my-0 success--text">$9.99</p>
        </div>
        <v-btn color="success" fab small>
          <v-icon dark class="addBtn">mdi-plus-circle-outline</v-icon>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card:hover {
  opacity: 1 !important;
  transform: scale(1) !important;
}
.addBtn:hover {
  transform: rotate(90deg);
}
// .img:hover {
//   transform: scale(1.1);
//   opacity: 2;
// }
</style>
