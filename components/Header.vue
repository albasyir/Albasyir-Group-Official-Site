<style lang="scss">
.v-toolbar__extension {
  background-color: #0d47a1;
}
</style>

<template>
  <v-app-bar
    :dark="isDarked"
    :color="headerColor"
    :style="`position: ${position}`"
    :height="headerHeight"
    fixed
    flat
  >
    <v-toolbar-title class="d-flex flex-row">
      <v-img src="/icon.png" max-height="45px" max-width="45px" />
      <span class="py-2 pl-2 headline font-weight-bold">Albasyir</span>
    </v-toolbar-title>

    <v-spacer />

    <div class="d-flex flex-row" v-if="link_show">
      <v-btn
        v-for="(link, key) in link"
        v-bind="link.bind"
        :key="`menu-${key}`"
        :disabled="!link.ref"
        :to="link.ref"
        :height="headerHeight"
        color="transparent"
        tile
        depressed
        nuxt
      >
        <v-icon left>{{ link.icon }}</v-icon>
        {{ link.name }}
      </v-btn>
    </div>

    <v-btn v-else icon @click="toggleDrawerMenu(true)">
      <v-icon>mdi-dots-vertical-circle</v-icon>
    </v-btn>

    <template v-if="extentionTitle" v-slot:extension>
      <v-tabs next-icon="mdi-arrow-right" prev-icon="mdi-arrow-left">
        <v-tab
          v-for="(link, key) in extentionLink"
          :key="`submenu-${key}`"
          :disabled="!link.ref"
          :to="link.ref"
          :height="headerHeight"
          color="transparent"
          exact
          v-bind="link.bind"
          class="white--text"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "nuxt-property-decorator";

export interface linkInterface {
  name: String;
  icon?: String;
  ref?: String;
  bind?: Object;
}

@Component
export default class Header extends Vue {
  @Prop({ default: "primary" }) color!: String;
  @Prop({ required: true, type: Array }) link!: Object;
  @Prop({ required: true, type: Boolean }) link_show!: Boolean;

  toggleDrawerMenu() {
    this.$store.commit("layout/Drawer/toggle");
  }

  get extensionColor(): string {
    return this.$store.state.layout.Header.extentionBackground;
  }

  get headerColor(): string {
    return this.$store.state.layout.Header.color;
  }

  get isDarked(): boolean {
    return this.$store.state.layout.Header.dark;
  }

  get position(): string {
    return this.$store.state.layout.Header.position;
  }

  get headerHeight(): string {
    return this.$store.state.layout.Header.height;
  }

  get extentionTitle(): string {
    return this.$store.state.layout.Header.extentionTitle;
  }

  get extentionLink(): linkInterface[] {
    return this.$store.state.layout.Header.extentionLink;
  }
}
</script>
