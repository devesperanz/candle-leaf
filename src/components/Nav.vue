<template>
  <div>
    <v-app-bar
      fixed
      color="white"
      elevate-on-scroll
      height="75"
      scroll-target="#scrolling-techniques-7"
      class="mb-16"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="black"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-container fluid class="d-flex align-center">
        <v-btn text large href="/" color="transparent">
          <img
            src="https://res.cloudinary.com/frozenchicken/image/upload/v1643469354/candleleaf/Images/image_2_eiokst.png"
            alt=""
            width="126"
            height="34"
          />
        </v-btn>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn href="#products" text class="black--text">Discovery</v-btn>
          <v-btn href="#about" text>About</v-btn>
          <v-btn href="#contact" text>Contact</v-btn>
          <router-view></router-view>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="black">mdi-account-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="black">mdi-cart-outline</v-icon>
        </v-btn>
      </v-container>
      <v-navigation-drawer app absolute clipped v-model="drawer">
        <v-list two-line>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                text
                class="mr-2 black--text font-weight-bold"
                :elevation="0"
                href="#token"
                >BUY TOKEN</v-btn
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                text
                class="mr-2 black--text font-weight-bold"
                :elevation="0"
                href="#litePaper"
              >
                LITEPAPER
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn
                text
                class="mr-2 black--text font-weight-bold"
                :elevation="0"
                href="#roadmap"
              >
                ROAD MAP
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-btn color="warning" class="font-weight-bold" large rounded>
              Launch App
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav__links {
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-transform: uppercase;
  font-size: 14px;
}
</style>
