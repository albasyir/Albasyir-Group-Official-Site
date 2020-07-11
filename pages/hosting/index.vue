<template>
  <v-content>
    <!-- HOSTING TERBAIK BLA2 -->
    <v-container fluid class="py-3 primary darken-4">
      <v-container>
        <v-row>
          <!-- JUDUL -->
          <v-col cols="12" md="7" sm="7">
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

            <!-- TOMBOL MASUK KERANJANG -->
            <v-btn :to="{ name: 'hosting-order' }" nuxt x-large color="yellow">
              <v-icon left>mdi-cart</v-icon>Order Sekarang
            </v-btn>
          </v-col>

          <!-- SPALSH PICTURE -->
          <v-col cols="12" md="5" sm="5">
            <v-img
              class="my-3"
              contain
              height="90%"
              src="/illustration/to_the_moon.svg"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- VIEW LAYANAN -->
    <v-container fluid class="py-3 primary darken-4">
      <v-container>
        <!-- JUDUL LAYANAN -->
        <div class="text-center white--text">
          <h2 class="display-3 mb-2">Layanan Kami</h2>
          <p class="headline font-weight-bold">Semua ada di tangan anda</p>
        </div>

        <!-- KONTENT LAYANAN -->
        <div>
          <v-row>
            <!-- Semua Service Besar -->
            <v-col
              cols="12"
              sm="6"
              md="3"
              v-for="(service, key) in hostingService"
              :key="key"
            >
              <v-card class="mx-auto my-1 pa-1">
                <v-row dense>
                  <v-col
                    cols="4"
                    sm="12"
                    class="d-flex justify-center align-content-center"
                  >
                    <v-img height="180" contain :src="service.picture"></v-img>
                  </v-col>
                  <v-col cols="8" sm="12">
                    <!-- Judul dan Deksripsi -->
                    <v-card-title>{{ service.title }}</v-card-title>
                    <v-card-text>{{ service.desc }}</v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-container>

    <!-- ALASAN MEMILIH KAMI -->
    <v-container fluid class="py-3 primary darken-4">
      <v-container>
        <div class="text-center white--text">
          <h2 class="display-3 mb-2">Mengapa Memilih Kami?</h2>
          <p class="headline font-weight-bold">Alasanya cukup sederhana</p>
        </div>
        <v-row class="py-5">
          <v-col cols="6" class="d-flex align-center">
            <v-img src="/illustration/secure_site.svg" />
          </v-col>
          <v-col cols="6">
            <v-col cols="12">
              <list-card
                :index="1"
                title="Hosting Super Cepat"
                desc="Pengunjung tidak suka website lambat. Dengan dukungan LiteSpeed Web Server, waktu loading website Anda akan meningkat pesat."
              />
            </v-col>
            <v-col cols="12">
              <list-card
                :index="2"
                title="Keamanan Website Ekstra"
                desc="Teknologi keamanan Imunify 360 memungkinkan website Anda terlindung dari serangan hacker, malware, dan virus berbahaya setiap saat."
              />
            </v-col>
            <v-col cols="12">
              <list-card
                :index="3"
                title="Biaya Hemat, Kualitas Hebat"
                desc="Anda bisa berhemat dan tetap mendapatkan hosting terbaik dengan fitur lengkap, dari auto install WordPress, cPanel lengkap, hingga SSL gratis."
              />
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container class="pt-10" fluid>
      <center>
        <v-btn :to="{ name: 'hosting-order' }" nuxt x-large color="yellow">
          <v-icon left>mdi-cart</v-icon>Order Sekarang
        </v-btn>
      </center>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

import Cart from "@/components/Hosting/Cart.vue";
import ListCard from "@/components/Hosting/ListCard.vue";

import Typed from "typed.js";

@Component({
  head: {
    title: "Hosting Mulai 20.000 per bulan"
  },
  components: { ListCard }
})
export default class HostingIndex extends Vue {
  hostingService: Object[] = [
    {
      title: "Unlimited Hosting",
      desc: "Cocok untuk web sekala kecil dan menegah",
      picture: "/illustration/get_start.svg"
    },
    {
      title: "Cloud Hosting",
      desc: "Kapasitas tinggi dan kelolah penuh dengan mudah",
      picture: "/illustration/outer_space.svg"
    },
    {
      title: "VPS Hosting",
      desc: "Dedicated dengan akses root dan konfigurasi mandiri",
      picture: "/illustration/launch_day.svg"
    },
    {
      title: "Mail Hosting",
      desc:
        "Email khusus (@domain_anda.com) untuk meningkatkan kepercayaan pelanggan dan branding",
      picture: "/illustration/envelope.svg"
    }
  ];

  @Prop({ type: String, default: "/" })
  mounted() {
    new Typed("#landing_title", {
      strings: ["", "Hosting Terbaik Dari Kami"],
      typeSpeed: 40,
      backDelay: 1000
    });
  }
}
</script>
