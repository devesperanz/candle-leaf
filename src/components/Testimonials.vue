<template>
  <div class="testimonials py-16">
    <div class="pb-10 text-center testimonials__header">
      <h1 class="font-weight-bold">Testimonials</h1>
      <p class="grey--text">Some quotes from our happy customers</p>
    </div>
    <div class="container">
      <v-row>
        <v-col
          ols="12"
          sm="6"
          md="4"
          lg="4"
          v-for="card in cardData"
          :key="card"
        >
          <v-card max-width="350" class="mx-auto fill-height" :key="card">
            <div class="text-center testimonials__card pt-10 pb-5">
              <v-avatar size="50">
                <img :src="card.img" alt="John" />
              </v-avatar>
              <v-rating
                v-model="card.rating"
                color="success"
                empty-icon="$ratingFull"
                half-increments
                size="24"
                readonly
                class="my-4"
              ></v-rating>
              <div class="px-5">
                <p class="">“{{ card.title }}”</p>
                <p class="grey--text">{{ card.name }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.5,
      cardData: [
        {
          title: "I love it! No more air fresheners",
          img: "https://res.cloudinary.com/frozenchicken/image/upload/v1643626823/candleleaf/Images/images_uvcnal.jpg",
          name: "Luisa",
          rating: 4.5,
        },
        {
          title: "Recommended for everyone",
          img: "https://res.cloudinary.com/frozenchicken/image/upload/v1643626823/candleleaf/Images/images_uvcnal.jpg",
          name: "Edoardo",
          rating: 5,
        },
        {
          title: "Looks very natural, the smell is awesome",
          name: "Mart",
          img: "https://res.cloudinary.com/frozenchicken/image/upload/v1643626823/candleleaf/Images/images_uvcnal.jpg",
          rating: 4.5,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.testimonials {
  background: rgba(86, 178, 128, 0.1);
  &__card {
    max-width: 224px;
    margin: 0 auto;
    p {
      max-width: 304;
    }
  }
  &__header {
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
}
</style>
