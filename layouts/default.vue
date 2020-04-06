<template>
  <v-app dark>
    <Header />
    <Drawer />
    <v-content style="height:2000px">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Drawer from "@/components/Drawer.vue"

@Component({
  components: { Header, Footer, Drawer }
})

class Template extends Vue {
  mounted() {
    console.log(
      '%cStop !!!',
      'font-weight: bold; font-size: 40px;color: red;'
    );

    console.log(
      '%cIni adalah fitur browser yang ditujukan untuk developer. Jika seseorang meminta Anda untuk menyalin-menempel (Copy Paste) sesuatu di sini untuk mengaktifkan fitur tertentu atau disebut "meretas", ini adalah penipuan dan akan memberikannya akses tertentu yang mengatasnamakan anda.',
      'font-weight: bold; font-size: 20px;'
    );

    console.log(
      '%cLihat https://en.wikipedia.org/wiki/Self-XSS untuk informasi selengkapnya.',
      'font-weight: bold; font-size: 15px;'
    );
  }
}


export default Template;
</script>
