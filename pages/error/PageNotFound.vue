<template>
  <v-container class='py-5 mt-5'>
    <v-row class='py-5 mt-5'>
      <v-col>
        <div class='py-5'>
          <h1 class='display-3 font-weight-bold pt-5 mt-5'>
            <span class='primary--text'>Halaman Tidak Ditemukan</span>
          </h1>
        </div>
        <p>
          Kami tidak yakin jika halaman ini tujuanya, mohon coba menu lain..
        </p>
        <p>
          <v-btn color="primary" nuxt to="/">
            Kembali ke beranda
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class PageNotFound extends Vue {
  mounted() {
    this.$store.commit("layout/Header/setPosition", "fixed");
  }

  beforeDestroy() {
    this.$store.commit("layout/Header/setPosition");
  }
}
</script>
