<template>
  <v-app-bar dark :color="this.$props.color" fixed elevate-on-scroll style="position: sticky">
    <v-container>
      <v-row>
        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
  import { PropOptions } from 'vue'

  export default {
    props: {
      color: { default: "primary" } as PropOptions<String>
    },

    data: function() {
      return {}
    }
  }
</script>
