<template>
  <v-app-bar
    dark
    :color="`primary`"
    max-height="80px"
    height="80px"
    fixed elevate-on-scroll
    style="position: sticky"
  >
    <v-container>
      <v-row>
        <v-toolbar-title class='d-flex flex-row'>
            <v-img src="/icon.png" height="45px" width="45px" />
            <span class='py-2 pl-2 headline'>Albasyir</span>
        </v-toolbar-title>

        <v-spacer />

        <div class="d-flex flex-row" v-if="link_show">
          <v-btn
            v-for="(link, key) in this.$props.link"
            :key="key"
            tile
            depressed
            color="transparent"
            :disabled="!link.ref"
            nuxt
            :to="link.ref"
            v-bind="link.bind"
            height="100%"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.name }}
          </v-btn>
        </div>

        <v-btn
          v-else
          icon
          @click="toggleDrawerMenu(true)"
        >
          <v-icon>mdi-dots-vertical-circle</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'nuxt-property-decorator'

  @Component
  export default class Header extends Vue {
    @Prop({ default: 'primary' }) color !: String
    @Prop({ required: true, type: Array }) link !: Object
    @Prop({ required: true, type: Boolean }) link_show !: Boolean

    toggleDrawerMenu() {
      this.$store.commit('Layout/toggleDrawerMenu')
    }
  }
</script>
