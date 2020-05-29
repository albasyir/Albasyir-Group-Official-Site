import { VuexModule, Mutation, Action, Module } from "vuex-module-decorators";

interface descListInterface {}

interface ProductInterface {
  title: string;
  price: number;
  descList: Array<descListInterface>;
}

@Module({
  name: "product",
  stateFactory: true,
  namespaced: true
})
export default class HostingProduct extends VuexModule {}
