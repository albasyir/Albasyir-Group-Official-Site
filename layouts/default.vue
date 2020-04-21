<template>
  <v-app ref='app' dark>
    <Header :link="link" :link_show="!mobileMenu"  />
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
        icon: 'mdi-home',
        ref: '/'
      },
      {
        name: 'Hosting',
        icon: 'mdi-server',
        ref: '/hosting'
      },
      /*
      {
        name: 'Kinerja',
        icon: 'mdi-home-outline',
        ref: undefined
      },
      {
        name: 'Solusi',
        icon: 'mdi-lightbulb-on-outline',
        ref: '/solusi'
      },
      */
      {
        name: 'Servis',
        icon: 'mdi-cog',
        ref: '/servis'
      },
      {
        name: 'Tentang',
        icon: 'mdi-information',
        ref: '/tentang'
      }
    ]

    get mobileMenu() : Boolean {
      return this.$vuetify.breakpoint.smAndDown;
    }

    get isMobilePhone() : Boolean {
      return true &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        &&
        this.$vuetify.breakpoint.xsOnly
    }

    beforeCreate() {
      let loading_indecator = document.getElementById('spa-loading-indicator')!;
      let loading_length = loading_indecator!.offsetWidth;

      document.body.appendChild(document.getElementById('spa-loading-content')!);

      document.getElementById('spa-loading-indicator')!.style.width = loading_length + "px";
    }

    mounted() {
      console.log(new Date());
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
