<template>
  <v-app ref="app" dark>
    <Header :link="link" :link_show="!mobileMenu" />
    <Drawer :link="link" :link_show="mobileMenu" />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Header, { HeaderLinkInterface } from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Drawer from "@/components/Drawer.vue";

@Component({
  components: { Header, Footer, Drawer }
})
export default class Template extends Vue {
  link: Array<HeaderLinkInterface> = [
    {
      name: "Utama",
      icon: "mdi-home",
      ref: "/"
    },
    {
      name: "Host",
      icon: "mdi-server",
      ref: "/hosting"
    },
    {
      name: "Software",
      icon: "mdi-laptop",
      ref: "/servis"
    },
    {
      name: "Tentang",
      icon: "mdi-information",
      ref: "/tentang"
    }
  ];

  get mobileMenu(): Boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }

  get isMobilePhone(): Boolean {
    return (
      true &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) &&
      this.$vuetify.breakpoint.xsOnly
    );
  }

  beforeCreate() {
    let loading_indecator = document.getElementById("spa-loading-indicator")!;
    let loading_length = loading_indecator!.offsetWidth;

    document.body.appendChild(document.getElementById("spa-loading-content")!);

    document.getElementById("spa-loading-indicator")!.style.width =
      loading_length + "px";
  }

  mounted() {
    console.log(new Date());
    setTimeout(() => {
      document.getElementById("spa-loading-indicator")!.style.width = "100%";
    }, 1);

    setTimeout(() => {
      document.getElementById("spa-loading-container")!.style.opacity = "0";
      document.getElementById("spa-loading-text")!.style.opacity = "0";
    }, 2500);

    console.log("%cStop !!!", "font-weight: bold; font-size: 40px;color: red;");

    console.log(
      '%cIni adalah fitur browser yang ditujukan untuk developer. Jika seseorang meminta Anda untuk menyalin-menempel (Copy Paste) sesuatu di sini untuk mengaktifkan fitur tertentu atau disebut "meretas", ini adalah penipuan dan akan memberikannya akses tertentu yang mengatasnamakan anda.',
      "font-weight: bold; font-size: 20px;"
    );

    console.log(
      "%cLihat https://en.wikipedia.org/wiki/Self-XSS untuk informasi selengkapnya.",
      "font-weight: bold; font-size: 15px;"
    );

    let csChat: HTMLElement = document.createElement("script");
    csChat.setAttribute("src", "/other_vendor/tawk.to.js");
    document.head.appendChild(csChat);
  }
}
</script>
