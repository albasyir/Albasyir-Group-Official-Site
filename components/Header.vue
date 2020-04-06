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
            nuxt
            :to="link.ref"
            v-bind="link.bind"
            height="100%"
          >
            <v-icon>{{ link.icon }}</v-icon>
            <span> {{ link.name }}</span>
          </v-btn>
        </div>

        <v-btn icon @click="toggleDrawerMenu(true)">
          <v-icon>mdi-dots-vertical-circle</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
  import { Vue, Prop } from 'nuxt-property-decorator'

  export interface link {
    name: String,
    icon: String,
    ref: String | undefined,
    bind?: Object
  }

  export default class Header extends Vue {
    @Prop({ default: 'primary' }) readonly color : String

    mounted() {
      console.log(this.$props)
    }

    header: Object = {
      renderHeaderMenu: true as Boolean,
      link: [
        {
          name: 'Beranda',
          icon: 'mdi-home',
          ref: '/'
        },
        {
          name: 'Hosting',
          icon: 'mdi-server',
          ref: '/hosting'
        },
        {
          name: 'Treeworks',
          icon: 'mdi-xml',
          ref: undefined
        },
        {
          name: 'Shop',
          icon: 'mdi-shopping',
          ref: undefined,
          bind: {
            class : 'd-none d-sm-flex'
          }
        },
        {
          name: 'Tim Kami',
          icon: 'mdi-account-multiple',
          ref: undefined
        }
      ] as Array<link>
    }

    toggleDrawerMenu() {
      this.$store.commit('Layout/toggleDrawerMenu')
    }
  }
</script>
