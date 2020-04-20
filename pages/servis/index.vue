<template>
  <v-content>
    <v-container class='pt-sm-12 pt-7'>
      <v-row class='pt-sm-12 pt-7'>
        <v-col class='pt-sm-12 pt-7'>
          <div class='py-3'>
            <h1 class='primary--text display-3 font-weight-bold'>
              Kami membuat digitalisasi.
            </h1>
            <div class='display-3 font-weight-bold'>
              Dengan konsultasi terbaik dari kami
            </div>
          </div>
          <p>
            Kami adalah tim yang cerdas dan setiap individunya inovatif untuk menciptakan produk digital yang terbaik untuk digunakan.
          </p>
          <p>
            Kami juga bemerima konsultasi untuk menyelesaikan kebutuhkan perusahaan
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  head: { title: "Servis" }
})
export default class service extends Vue {
  mounted() {
    let store = this.$store
    store.commit('layout/Header/setBackgroundColor', "white")
    store.commit('layout/Header/setDarkMode', false)
  }

  beforeDestroy() {
    let store = this.$store
    store.commit('layout/Header/setBackgroundColor')
    store.commit('layout/Header/setDarkMode')
  }
}
</script>
