import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ name: "LayoutHeader", stateFactory: true, namespaced: true })
export default class Header extends VuexModule {
  color: string = "primary";
  dark: boolean = true;
  position: string = "sticky";
  height: string = "65px";

  extentionTitle: string | undefined = undefined;
  extentionLink: object[] = [];

  @Mutation
  setExtentionTitle(newTitle?: string) {
    this.extentionTitle = newTitle || undefined;
  }

  @Mutation
  addExtentionLink(newLink: object) {
    this.extentionLink.push(newLink);
  }

  @Mutation
  deleteEextentionLink() {
    this.extentionLink = [];
  }

  @Mutation
  setHeight(newHeight?: string) {
    this.height = newHeight || "65px";
  }

  @Mutation
  setBackgroundColor(newBackground?: string) {
    this.color = newBackground || "primary";
  }

  @Mutation
  setDarkMode(newCondition?: boolean) {
    this.dark = newCondition == undefined ? true : newCondition;
  }

  @Mutation
  setPosition(newPosition?: string) {
    this.position = newPosition || "sticky";
  }
}
