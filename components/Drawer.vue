<template>
  <v-navigation-drawer
      absolute
      temporary
      right
      v-model='shown'
  >
      Example drawer
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator'

  @Component
  export default class Drawer extends Vue {
    @Prop({ required: true, type: Array }) link !: Object

    get shown() : Boolean {
      return this.$store.state.Layout.menuDrawer as Boolean
    }

    set shown(newCondition : Boolean) {

      this.$store.commit('Layout/toggleDrawerMenu', newCondition as Boolean);
    }

    mounted() {
    }
  }
</script>


