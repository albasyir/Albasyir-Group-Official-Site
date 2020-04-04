<template>
  <v-app-bar dark :color="this.$props.color" fixed elevate-on-scroll style="position: sticky">
    <v-container>
      <v-row>
        <v-toolbar-title class='d-flex flex-row'>
            <v-img src="/icon.png" height="45px" width="45px" />
            <span class='py-2 pl-2 headline'>Albasyir Group</span>
        </v-toolbar-title>

        <v-spacer />

        <div class="d-flex flex-row">
          <v-btn 
            v-for="(link, key) in header.link" 
            :key="key"
            tile
            depressed
            color="transparent"
            :disabled="!link.ref"
            :nuxt="true"
            :to="link.ref"
            v-bind="link.bind"
            height="100%"
          >
            <v-icon>{{ link.icon }}</v-icon>
            <span> {{ link.name }}</span>
          </v-btn>
        </div>

        <v-btn icon @click="openDrawerMenu">
          <v-icon>mdi-dots-vertical-circle</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
  import { PropOptions } from 'vue'

  export interface link {
    name: String,
    icon: String,
    ref: String | undefined,
    bind?: Object
  }

  export default {
    props: {
      color: { default: "primary" } as PropOptions<String>
    },

    data: function() {
      return {
        header: {
          renderHeaderMenu: true as Boolean,
          link: [
            {
              name: 'Beranda',
              icon: 'mdi-home',
              ref: '/'
            } as link,
            {
              name: 'Hosting',
              icon: 'mdi-server',
              ref: '/hosting'
            } as link,
            {
              name: 'Treeworks',
              icon: 'mdi-xml',
              ref: undefined
            } as link,
            {
              name: 'Shop',
              icon: 'mdi-shopping',
              ref: undefined,
              bind: {
                class : 'd-none d-sm-flex'
              }
            } as link,
            {
              name: 'Tim Kami',
              icon: 'mdi-account-multiple',
              ref: undefined
            } as link
          ]
        }
      }
    },

    methods: {
      openDrawerMenu() {
        this.$store.commit('toggleDrawer');
      }
    }
  }
</script>
