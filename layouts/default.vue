<template>
  <v-app dark>
    <Header :link="link" :link_show="!mobileMenu" />
    <Drawer :link="link" :link_show="mobileMenu" />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Drawer from "@/components/Drawer.vue"

  interface link {
    name: String,
    icon: String,
    ref: String | undefined,
    bind?: Object
  }

  @Component({
    components: { Header, Footer, Drawer }
  })

  class Template extends Vue {
    link: Array<link> = [
      {
        name: 'Utama',
        icon: 'mdi-home-outline',
        ref: '/'
      },
      {
        name: 'Kinerja',
        icon: 'mdi-home-outline',
        ref: '/kinerja'
      },
      {
        name: 'Solusi',
        icon: 'mdi-lightbulb-on-outline',
        ref: '/solusi'
      },
      {
        name: 'Servis',
        icon: 'mdi-cog-outline',
        ref: undefined,
        bind: {
          class : 'd-none d-md-flex'
        }
      },
      {
        name: 'Tim Kami',
        icon: 'mdi-account-multiple-outline',
        ref: undefined,
        bind: {
          class : 'd-none d-md-flex'
        }
      }
    ]

    get mobileMenu() : Boolean {
      return this.$vuetify.breakpoint.xsOnly
    }

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
