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
    <cart :activate="cartActivation" />
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

import { HeaderLinkInterface } from "@/components/Header.vue";

@Component({
  head: {
    titleTemplate: "%s - Albasyir Host"
  }
})
export default class HostingTemplate extends Vue {
  title: string = "ALbasyir Host";
  endpoint: string = "/hosting";

  headerRoute: Array<HeaderLinkInterface> = [
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
      name: "Hosting",
      icon: "mdi-server-network"
    },
    {
      name: "VPS",
      icon: "mdi-server"
    }
  ];

  get cartActivation() {
    return this.$store.state.hosting.Cart.active;
  }

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

  mounted() {
    console.log(this.cartActivation);
  }
}
</script>
