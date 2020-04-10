<style scoped>
  .spa-text {
    font-weight: bold;
    font-size: 60pt;
    margin: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1002;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .spa-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

  #spa-loading-container {
    opacity: 1;
    transition: opacity 1.2s ease-in-out;
  }

  #spa-loading-indicator {
    width: 50%;
    z-index: 1001;
    transition: width 2s;
  }

  @media only screen and (max-width: 1200px) {
    .spa-text {
      font-size: 50pt;
    }
  }
  @media only screen and (max-width: 768px) {
    .spa-text {
      font-size: 30pt;
    }
  }
  @media only screen and (max-width: 576px) {
    .spa-text {
      font-size: 20pt;
    }
  }
</style>

<template>
  <v-app dark>
    <div id='spa-loading-container' >
      <div id='spa-loading-background' class='spa-loading white' />
      <div id='spa-loading-indicator' class='spa-loading primary' />

      <span id='spa-loading-text' class='spa-text text-info'>
        Don't Make Same <br />
        Make Better.
      </span>
    </div>
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
        ref: undefined
      },
      {
        name: 'Solusi',
        icon: 'mdi-lightbulb-on-outline',
        ref: undefined
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

    beforeCreate() {
      setTimeout(() => {
        document.getElementById('spa-loading-indicator')!.style.width = "63%"
      }, 1)
    }

    created() {
      setTimeout(() => {
        document.getElementById('spa-loading-indicator')!.style.width = "76%"
      }, 1)
    }

    beforeMount() {
      setTimeout(() => {
        document.getElementById('spa-loading-indicator')!.style.width = "89%"
      }, 1)
    }

    mounted() {
      setTimeout(() => {
        document.getElementById('spa-loading-indicator')!.style.width = "100%";
      }, 1)

      setTimeout(() => {
        document.getElementById('spa-loading-container')!.style.opacity = "0";
        document.getElementById('spa-loading-text')!.style.opacity = "0";
      }, 2500);

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
