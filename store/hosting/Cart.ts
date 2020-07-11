import { VuexModule, Module, Mutation } from "vuex-module-decorators";

@Module({
  name: "Cart",
  stateFactory: true,
  namespaced: true
})
export default class Card extends VuexModule {}
