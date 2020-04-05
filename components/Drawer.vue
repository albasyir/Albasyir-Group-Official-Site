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
import { mapState } from "vuex"

export default {
    data: function() {
        return {
            
        }
    },

    computed: {
        shown: function() {
            return this.$store.state.layout.menuDrawer;
        },
    }
}
</script>

<style>

</style>