<template>
  <v-content>
    <v-container class='py-5 mt-5'>
      <v-row class='py-5 mt-5'>
        <v-col>
          <h1 class='primary--text display-3 font-weight-bold pt-5 mt-5'>
            Solusi Siap Pakai.
          </h1>
          <div class='display-3 font-weight-bold'>
            Dapat disesuaikan untuk bisnis Anda.
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax src="/solutions-logistics.jpg">
      <v-row>
        <v-col>
          <h2 class='white--text display-2 font-weight-bold py-5'>
            Logistik
          </h2>
          <h3 class='white--text display-1 font-weight-bold py-2'>
            Solusi lengkap dari awal hingga akhir untuk logistik apapun. aplikasi mobile dan portal web responsif.
          </h3>
          <p class='font-weight-bold py-2'>
            Menerima Kiriman atau sewa gudang, membuat surat jalan plus menerima pembaruan status waktu-nyata dari apa yang sedang terjadi.
            Pantau dan amati semua aktivitas melalui dasbor yang dapat disesuaikan sepenuhnya dan data statistik yang dikumpulkan untuk memberikan nilai lebih bagi bisnis dan pelanggan Anda.
          </p>
          <p class='font-weight-bold py-2'>
            Akan lebih banyak detail untuk semua yang kami tampilkan di atas,
            bicaralah kepada kami hari ini untuk melihat bagaimana kami dapat berbagi solusi dengan Anda
          </p>
        </v-col>
      </v-row>
    </v-parallax>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class Solusi extends Vue {

}

</script>
