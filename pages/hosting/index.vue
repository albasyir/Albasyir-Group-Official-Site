<template>
  <v-content>
    <v-container fluid class="primary darken-4">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6" md="5">
            <h2 class="my-lg-5 display-3 white--text pt-5">
              <span id="landing_title"></span>
            </h2>
            <p class="h4 white--text py-2 font-weight-bold">
              Proritas kecepatan, keamanan dan termurah
              <br />
              <span class="headline font-weight-bold">
                harga mulai dari 20.000
                <sub>/bln</sub>
              </span>
            </p>

            <v-btn @click="toogleCard" tile x-large color="lime">
              <v-icon left>mdi-cart</v-icon>Order Sekarang
            </v-btn>
          </v-col>
          <v-col cols="12" lg="6" md="7">
            <v-img class="my-3" contain height="90%" src="/illustration/to_the_moon.svg" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container fluid class="py-3 primary darken-4">
      <v-container>
        <div class="text-center white--text">
          <h2 class="display-3 mb-2">Layanan Kami</h2>
          <p class="headline font-weight-bold">Semua ada di tangan anda</p>
        </div>
        <div class="d-flex align-stretch justify-space-between align-content-center flex-wrap">
          <v-card class="mx-auto pa-1" max-width="250">
            <v-img height="180" contain src="/illustration/get_start.svg"></v-img>

            <v-card-title>Unlimited Hosting</v-card-title>
            <v-card-text>Cocok untuk web sekala kecil dan menegah</v-card-text>

            <v-card-actions>
              <v-btn class="ml-auto" color="lime" flat>
                <v-icon left>mdi-cart</v-icon>Pesan
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto pa-1" max-width="250">
            <v-img height="180" contain src="/illustration/outer_space.svg"></v-img>

            <v-card-title>Cloud Hosting</v-card-title>
            <v-card-text>Kapasitas tinggi dan kelolah penuh dengan mudah</v-card-text>

            <v-card-actions>
              <v-btn class="ml-auto" color="lime" flat>
                <v-icon left>mdi-cart</v-icon>Pesan
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto pa-1" max-width="250">
            <v-img height="180" contain src="/illustration/launch_day.svg"></v-img>

            <v-card-title>VPS Hosting</v-card-title>
            <v-card-text>Dedicated dengan akses root dan konfigurasi mandiri</v-card-text>

            <v-card-actions>
              <v-btn class="ml-auto" color="lime" flat>
                <v-icon left>mdi-cart</v-icon>Pesan
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto pa-1" max-width="250">
            <v-img height="180" contain src="/illustration/envelope.svg"></v-img>

            <v-card-title>Mail Hosting</v-card-title>
            <v-card-text>Email khusus dengan @domain_anda.com untuk meningkatkan kepercayaan pelanggan dan branding</v-card-text>

            <v-card-actions>
              <v-btn class="ml-auto" color="lime" flat>
                <v-icon left>mdi-cart</v-icon>Pesan
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-container>

    <v-container fluid class="py-3 primary darken-4">
      <v-container>
        <div class="text-center white--text">
          <h2 class="display-3 mb-2">Mengapa Memilih Kami?</h2>
          <p class="headline font-weight-bold">Alasanya cukup sederhana</p>
        </div>
        <v-row class="py-5">
          <v-col cols="12" sm="6">
            <list-card
              :index="1"
              title="Hosting Super Cepat"
              desc="Pengunjung tidak suka website lambat. Dengan dukungan LiteSpeed Web Server, waktu loading website Anda akan meningkat pesat."
            />
          </v-col>
          <v-col cols="12" sm="6">
            <list-card
              :index="2"
              title="Keamanan Website Ekstra"
              desc="Teknologi keamanan Imunify 360 memungkinkan website Anda terlindung dari serangan hacker, malware, dan virus berbahaya setiap saat."
            />
          </v-col>
          <v-col cols="12" sm="12">
            <list-card
              :index="3"
              title="Biaya Hemat, Kualitas Hebat"
              desc="Anda bisa berhemat dan tetap mendapatkan hosting terbaik dengan fitur lengkap, dari auto install WordPress, cPanel lengkap, hingga SSL gratis."
            />
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container class="pt-10" fluid>
      <center>
        <v-btn @click="toogleCard" tile x-large color="lime">
          <v-icon left>mdi-cart</v-icon>Order Sekarang
        </v-btn>
      </center>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

import Cart from "@/components/Hosting/Cart.vue";
import ListCard from "@/components/Hosting/ListCard.vue";

import Typed from "typed.js";

@Component({
  components: { ListCard }
})
export default class HostingIndex extends Vue {
  toogleCard(newCondition: boolean) {
    this.$store.commit("hosting/Cart/toggle", newCondition);
  }

  mounted() {
    new Typed("#landing_title", {
      strings: ["", "Hosting Terbaik Dari Kami"],
      typeSpeed: 40,
      backDelay: 1000
    });
  }
}
</script>
