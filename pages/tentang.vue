<template>
  <v-content>

    <!-- Splash Text "Kami AlBasyir Group" -->
    <v-container class='pt-sm-12 pt-7'>
      <v-row class='pt-sm-12 pt-7'>
        <v-col class='pt-sm-12 pt-7'>
          <div class='py-3'>
            <h1 class='display-3 font-weight-bold'>
              Kami <span class='primary--text'>Albasyir Group</span>
            </h1>
          </div>
          <p>
            Kami adalah pengembang aplikasi mobile, desktop dan website dengan teknologi modern yang berbasis di Indonesia.
          </p>
          <p>
            Kami percaya bahwa setiap mitra kami akan mendapatkan pengalaman luar bisa atas hasil kerja keras kami.
          </p>
        </v-col>
      </v-row>
    </v-container>


    <!-- Temukan Kami -->
    <v-container fluid class='blue-grey darken-4'>
      <v-container class='white--text py-10'>
        <v-row dense>

          <!-- Col Temukan Kami -->
          <v-col md="4" sm='12' class='d-flex align-start flex-column-reverse flex-wrap flex-md-column'>
            <div class="mb-auto pt-5 pt-md-0">
              <h2 class='display-1 font-weight-bold'>Temukan Kami</h2>
            </div>
            <FindUs dark class="d-flex align-start flex-row flex-md-column flex-wrap" />
          </v-col>

          <!-- Col Cabang -->
          <v-col md="8" sm='12'>
            <div
              class='d-flex flex-sm-row flex-column align-stretch'
            >
              <v-card
                v-for="(this_address, i) in address"
                :key="i"
                flat
                tile
                :width="FindUsInMobile ? '100%' : `33.3%`"
              >
                <v-img
                  class="white--text align-end"
                  :height="FindUsInMobile ? '100px' : '500px'"
                  :src="this_address.background || '/solutions-logistics.jpg'"
                  :position="FindUsInMobile ? 'center 10%' : 'center center'"
                >
                  <div class="fill-height bottom-gradient"></div>
                  <v-card-title>
                    {{ this_address.available ? this_address.city : "(Nantikan)" }}
                  </v-card-title>
                </v-img>
              </v-card>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </v-container>

  </v-content>
</template>

<script lang='ts'>
import { Vue, Component } from "nuxt-property-decorator"

import FindUs from "@/components/FindUs.vue"

@Component({
  components: { FindUs },
  head: {
    title: "Tentang Kami"
  }
})
export default class Tentang extends Vue{
  address : Array<Object> = [
    {
      city: "Palembang",
      available: true,
      background: '/city/palembang.jpeg'
    },
    {
      city: "Jakarta",
      available: false,
      background: '/city/jakarta.jpg'
    },
    {
      city: "Pekanbaru",
      available: false,
      background: '/city/pekanbaru.jpg'
    }
  ]


  get FindUsInMobile() {
    return this.$vuetify.breakpoint.xs
  }

  mounted() {
    let store = this.$store
    store.commit('layout/Header/setBackgroundColor', "white")
    store.commit('layout/Header/setDarkMode', false)
  }

  beforeDestroy() {
    let store = this.$store
    store.commit('layout/Header/setBackgroundColor')
    store.commit('layout/Header/setDarkMode')
  }
}

</script>
