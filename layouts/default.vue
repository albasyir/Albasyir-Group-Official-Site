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
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Drawer from "@/components/Drawer.vue"

  export default {
    components: { Header, Footer, Drawer },

    mounted() {
      console.log(
        '%cStop !!!',
        'font-weight: bold; font-size: 50px;color: red;'
      );

      console.log(
        '%cIni adalah fitur browser yang ditujukan untuk developer. Jika seseorang meminta Anda untuk menyalin-menempel sesuatu di sini untuk mengaktifkan fitur Facebook atau "meretas" akun seseorang, ini adalah penipuan dan akan memberikannya akses ke akun Facebook Anda.',
        'font-weight: bold; font-size: 30px;'
      );

      console.log(
        '%cLihat https://www.facebook.com/selfxss untuk informasi selengkapnya.',
        'font-weight: bold; font-size: 20px;'
      );
    }
  }
</script>
