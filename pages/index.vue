<template>
  <v-content>
    <v-container fluid class="py-0 primary">
      <v-container class="py-0">
        <Slider :slidesData="slides" />
      </v-container>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

import Slider from "@/components/Slider/SimpleText.vue";

@Component({
  components: { Slider },
  head: {
    title: "Kami Punya Solusi!"
  }
})
export default class LandingPage extends Vue {
  slides: any = [
    {
      title: "Kami Membuat Mitra",
      desc:
        "Tidak klien-vendor atau vendor-klien, kita kolaborasi untuk sukses bersama."
    },
    {
      title: "Kami Punya Ekosistem",
      desc:
        "Desain, pengembangan, dan penerapan untuk perusahaan atau start-up."
    }
  ];

  mounted(): void {
    this.$store.commit("layout/Header/setPosition", "fixed");
  }

  destroyed(): void {
    this.$store.commit("layout/Header/setPosition");
  }
}
</script>
