import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

// Module property config
@Module({
  name: 'layout',
  stateFactory: true,
  namespaced: true
})

class Layout extends VuexModule {
  menuDrawer : boolean = false

  @Mutation toggleDrawerMenu(forceToggle ?: boolean) {
    this.menuDrawer = (forceToggle == undefined)
      ? !this.menuDrawer
      : forceToggle
  }

  get menuDrawerData() {
    return this.menuDrawer
  }
}

export default Layout;
