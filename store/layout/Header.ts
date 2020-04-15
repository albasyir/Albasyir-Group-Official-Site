import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({ name:'LayoutHeader', stateFactory: true, namespaced: true })
export default class Header extends VuexModule {
  color: String = "primary"
  dark: Boolean = true

  @Mutation
  setBackgroundColor(newBackground ?: String) {
    this.color = newBackground || "primary"
  }

  @Mutation
  setDarkMode(newCondition ?: Boolean) {
    this.dark = (newCondition == undefined)
      ? true
      : newCondition
  }
}
