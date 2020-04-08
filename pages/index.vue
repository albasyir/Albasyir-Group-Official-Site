<template>
  <v-content>
    <v-container>
      <Slider :slidesData="slides" />
    </v-container>
  </v-content>

</template>

<script lang="ts">
import Slider from '@/components/Slider/SimpleText.vue'

export default {
  data: function() {
    return {
      slides: [
      {
        title: "Kami Membuat Mitra",
        desc: "Tidak klien-vendor atau vendor-klien, kita kolaborasi untuk sukses bersama."
      },
      {
        title: "Kami Punya Ekosistem",
        desc: "Desain, pengembangan, dan penerapan untuk perusahaan atau start-up."
      }
    ]
    }
  },

  components: {
    Slider
  }
}
</script>
