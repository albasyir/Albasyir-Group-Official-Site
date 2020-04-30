import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({ name:'LayoutDrawer', stateFactory: true, namespaced: true })
export default class Drawer extends VuexModule {
  active : Boolean = false

  @Mutation toggle(forceToggle ?: boolean) {
    this.active = (forceToggle == undefined)
      ? !this.active
      : forceToggle
  }
}
