<template>
  <div class="about py-16">
    <div
      class="about__content container d-flex flex-wrap align-center justify-space-between"
    >
      <div>
        <div class="about__content-text">
          <h1 class="font-weight-bold">
            Clean and <br />
            fragrant soy wax
          </h1>
          <p class="success--text">Made for your home and for your wellness</p>
        </div>
        <v-list color="transparent" class="list-item">
          <v-list-item v-for="data in data" :key="data" class="px-0">
            <p class="">
              <v-icon class="mr-2">mdi-check-circle-outline</v-icon>
              <span class="font-weight-bold">{{ data.title }}: </span>
              {{ data.subtitle }}
            </p>
          </v-list-item>
        </v-list>
        <div class="about__btn mt-10">
          <v-btn color="success" block large> Learn more </v-btn>
        </div>
      </div>
      <div class="about__img py-6 pl-16">
        <img
          src="https://res.cloudinary.com/frozenchicken/image/upload/v1643493389/candleleaf/Images/mockups_tpb3ni.png"
          alt=""
          max-width="594"
          width="100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Eco-sustainable",
          subtitle: "All recyclable materials, 0% CO2 emissions",
        },
        {
          title: "Hyphoallergenic",
          subtitle: "100% natural, human friendly ingredients",
        },
        {
          title: "Handmade",
          subtitle: "All candles are craftly made with love",
        },
        {
          title: "Long burning",
          subtitle: "No more waste. Created for last long",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  background-color: #f7f8fa;
  position: relative;
  &__content {
    // max-width: 730px;
    // min-width: 146px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 1280px) {
      flex-direction: column-reverse;
    }
    &-text {
      max-width: 350px;
      @media (max-width: 1280px) {
        text-align: center;
        max-width: 100%;
        margin-top: 40px;
      }
      h1 {
        // letter-spacing: 10px;
        font-size: 40px;
        line-height: 55px;
        @media (max-width: 600px) {
          line-height: 42px;
          // font-size: 30px;
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
  &__img {
    background: #fff;
    max-width: 540px;
    width: 100%;
  }
  &__btn {
    max-width: 194px;
    width: 100%;
    @media (max-width: 1280px) {
      margin: 0 auto;
    }
  }
}
.list-item {
  @media (max-width: 600px) {
    padding: 0 18px;
  }
}
</style>
