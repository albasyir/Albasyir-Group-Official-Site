<template>
  <v-content>
    <v-container class='py-5 mt-5'>
      <v-row class='py-5 mt-5'>
        <v-col>
          <div class='py-5'>
            <h1 class='display-3 font-weight-bold pt-5 mt-5'>
              Kami <span class='primary--text'>Albasyir Group</span>
            </h1>
          </div>
          <p>
            Kami adalah pengembang aplikasi mobile, desktop dan website dengan teknologi modern yang berbasis di Indonesia,
            dengan kantor di Palembang.
          </p>
          <p>
            Kami percaya bahwa setiap mitra kami akan mendapatkan pengalaman luar bisa atas hasil kerja keras kami.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <center>
      <Logo />
    </center>
  </v-content>
</template>

<script lang='ts'>
import { Vue, Component } from "nuxt-property-decorator";
import Logo from '@/components/Logo.vue'

@Component({ components: Logo })
export default class Tentang extends Vue{
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
