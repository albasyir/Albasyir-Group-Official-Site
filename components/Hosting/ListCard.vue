<style scoped>
.listcard-index {
  position: absolute;
  top: -30px;
  left: -38px;
  font-weight: bold;
  font-size: 70pt;
  opacity: 0.7;
}
</style>

<template>
  <v-card class="py-4 mx-1 my-5">
    <v-card-text class="listcard-index lime--text">{{ index }}</v-card-text>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ desc }}</v-card-text>
  </v-card>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class ListCard extends Vue {
  @Prop({ required: true, type: Number }) index!: number;
  @Prop({ required: true, type: String }) title!: string;
  @Prop({ type: String }) desc!: string;
}
</script>
