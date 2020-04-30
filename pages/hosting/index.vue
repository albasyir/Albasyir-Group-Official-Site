<template>
  <v-content>
    <v-container fluid class="primary darken-4">
      <v-container>
        <v-row>
          <v-col lg="6" md="5" cols="12">
            <h2 class="my-lg-5 display-3 white--text pt-5">
              <span id="landing_title"></span>
            </h2>
            <p class="h4 white--text py-2 font-weight-bold">
              Proritas kecepatan, keamanan dan termurah
              <br />
              <span class="headline font-weight-bold">
                harga mulai dari 20.000
                <sub>/bln</sub>
              </span>
            </p>

            <cart>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" tile x-large color="lime">
                  <v-icon left>mdi-cart</v-icon>Order Sekarang
                </v-btn>
              </template>
            </cart>
          </v-col>
          <v-col lg="6" md="7" cols="12">
            <v-img class="my-3" width="100%" src="/hosting/landing-picture.webp" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

import Cart from "@/components/Hosting/Cart.vue";

import Typed from "typed.js";

@Component({
  components: { Cart }
})
export default class HostingIndex extends Vue {
  mounted() {
    new Typed("#landing_title", {
      strings: ["", "Hosting Terbaik Dari Kami"],
      typeSpeed: 40,
      backDelay: 1000
    });
  }
}
</script>
