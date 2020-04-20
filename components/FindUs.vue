<template>
  <div>
    <div class="pa-2 pa-md-0">
      <h3 class="headline font-weight-bold">Hubungi Kami</h3>
      <v-btn rounded color="white" nuxt small text href="tel:+625783821812">
        +62 57 8382 1812
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </div>

    <div class="pa-2 pa-md-0">
      <h3 class="headline font-weight-bold">Gabung Dengan Kami</h3>
      <v-btn rounded color="white" text nuxt small to="">
        Mendaftar
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </div>

    <div class="pa-2 pa-md-0">
      <h3 class="headline font-weight-bold">Kosultasi</h3>
      <v-btn
        rounded
        color="white"
        nuxt
        small
        text
        href="mailto:abdulazizalbasyir119@gmail.com"
      >
        abdulazizalbasyir119@gmail.com
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

export default class FindUs extends Vue {

}
</script>
