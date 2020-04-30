<template>
  <v-navigation-drawer
    temporary
    right
    fixed
    v-model="shown"
    tag="v-card"
    width="300"
    class="pa-5"
  >
    <v-list>
      <v-list-item
        justify-end
        v-for="(link, key) in $props.link"
        :key="key"
        link
        nuxt
        :to="link.ref"
        :disabled="!link.ref"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class Drawer extends Vue {
  @Prop({ required: true, type: Array }) link !: Object;
  @Prop({ type: Boolean }) link_show !: Boolean;
  @Prop({ type: Boolean, default: false }) bottom_link !: Boolean;

  get shown(): Boolean {
    return this.$store.state.layout.Drawer.active && (this.$props.link_show as Boolean);
  }

  set shown(newCondition: Boolean) {
    this.$store.commit('layout/Drawer/toggle', newCondition as Boolean)
  }
}
</script>
