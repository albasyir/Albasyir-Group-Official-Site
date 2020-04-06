<template>
    <v-navigation-drawer
        absolute
        temporary
        right
        v-model="shown"
    >
        Example drawer
  </v-navigation-drawer>
</template>

<script lang="ts">

  import Vue from 'vue'
  import { mapState } from "vuex"

  export default Vue.extend({

      data() {
        return {

        }
      }
  })

</script>
