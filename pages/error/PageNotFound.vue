<template>
  <v-container class="py-5 my-5">
    <v-row>
      <v-col cols="12" sm="6">
        <v-img src="/illustration/404.svg" />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center align-content-center">
        <div>
          <h1 class="primary--text">Halaman Tidak Ditemukan</h1>
          <p>Maaf, seharusnya ini tidak terjadi, kami harap untuk dimaklumi dan coba kunjungi halaman lainnya...</p>
          <v-btn color="primary" to="/" nuxt>Ke Menu Utama</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class PageNotFound extends Vue {
  mounted() {
    this.$store.commit("layout/Header/setPosition", "sticky");
  }

  beforeDestroy() {
    this.$store.commit("layout/Header/setPosition");
  }
}
</script>
