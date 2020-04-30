<style scoped>
#sub_navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}
</style>

<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

import { linkInterface } from "@/components/Header.vue";

@Component
export default class HostingTemplate extends Vue {
  title: string = "ALbasyir Host";
  endpoint: string = "/hosting";
  headerRoute: Array<linkInterface> = [
    {
      name: "Penawaran",
      ref: "/",
      icon: "mdi-cart"
    },
    {
      name: "Domain",
      icon: "mdi-earth"
    },
    {
      name: "Server",
      icon: "mdi-server"
    },
    {
      name: "Lamda",
      icon: "mdi-math-integral"
    },
    {
      name: "Reseller",
      icon: "mdi-cash-plus"
    }
  ];

  createHeaderMenu() {
    this.$store.commit("layout/Header/setExtentionTitle", "Host");

    this.headerRoute.forEach(linkObject => {
      linkObject.ref = linkObject.ref
        ? this.endpoint + linkObject.ref
        : undefined;

      this.$store.commit("layout/Header/addExtentionLink", linkObject);
    });
  }

  beforeMount() {
    this.createHeaderMenu();
  }

  beforeDestroy() {
    this.$store.commit("layout/Header/setExtentionTitle");
    this.$store.commit("layout/Header/deleteEextentionLink");
  }
}
</script>
