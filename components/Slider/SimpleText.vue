<style>
.typed-cursor {
  font-size: 70pt !important;
}

#slide-container {
  min-height: 100vh;
}

#slide_title_text {
  font-size: 70pt !important;
  font-weight: bold;
  margin: 0;
  line-height: 1.3;
  padding: 10px 0;
}

.slide-desc {
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 300px;
  margin-right: 80px;
  font-size: 20pt;
  padding: 10px 0;
}

.slide-desc-line {
  position: absolute;
  left: -40px;
  width: 10px;
  height: 100%;
  bottom: 0;
}

@media screen and (max-width: 950px) {
  .slide-desc {
    position: relative;
    width: 100%;
    font-size: 20pt;
  }

  .slide-desc-line {
    left: 0px;
    bottom: 0;
    width: 100%;
    height: 10px;
  }
}

@media screen and (max-width: 600px) {
  #slide_title_text {
    font-size: 40pt !important;
  }

  .typed-cursor {
    font-size: 40pt !important;
  }
}
</style>

<template>
  <v-container class="pa-0" style="position: relative">
    <v-row no-gutters id="slide-container">
      <div class="fade col-12 pt-12">
        <div class="white--text pt-12">
          <span id="slide_title_text">
            <!-- TEXT TITILE HERE -->
          </span>
        </div>
        <div class="slide-desc white--text">
          <div class="slide-desc-line white" />
          <div class="slide-desc-text" ref="slideDesc">
            <!-- TEXT DESC HERE -->
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from "nuxt-property-decorator";

import Typed from "typed.js";

/**
 * interface for each TextSlide Data
 */
export interface TextSlideInterface {
  /**
   * Slide description
   */
  desc: string;

  /**
   * Slide title
   */
  title: string;
}

/**
 * interface for array of TextSlide Data
 */
export interface ArrayTextSlideInterface {
  /**
   * Array of TextSlide TextSlideInterface Data
   */
  [index: number]: TextSlideInterface;
}

@Component
export default class TextSlide extends Vue {
  // slideData texting, remember with interface
  @Prop({ type: Array, required: true }) slidesData!: ArrayTextSlideInterface;

  @Ref("slideDesc") readonly descEl!: HTMLElement;

  /**
   * Slide Configuration
   */
  slideActive: number = 0; // start from ?
  slideInterval: number = 7000; // what is interval each slide ?

  /**
   * object can be use for intervalTimeObject
   */
  slideObjectInterval: ReturnType<typeof setTimeout> | undefined;
  slideTypedTitle: Typed | undefined;

  /**
   * Start this slide
   *
   * this method will do : \n
   *   1. stop slide (if already run)
   *   2. mount slide
   *   3. set interval from "slideInterval"
   *   4. next slide
   *
   */
  slideStart(): void {
    // stop
    this.slideStop();

    this.mountSlide();

    this.slideObjectInterval = setInterval(() => {
      this.nextSlide();
    }, this.slideInterval);
  }

  /**
   * Next slide
   *
   * this method will do : \n
   *   1. leaveSlide()
   *   2. increment slide ()
   *   3. mountSlide()
   */
  nextSlide() {
    // leave active slide
    this.leaveSlide();

    this.slideActive = this.slideActive + 1;

    // mount new slide
    this.mountSlide();
  }

  /**
   *
   *
   */
  mountSlide() {
    //
    let data: TextSlideInterface = this.slidesData[this.slideActive];

    // if slide data not found then we reset slide active and try get data with index 0
    if (!data) {
      this.slideActive = 0;
      data = this.slidesData[this.slideActive];
    }

    this.slideTypedTitle = new Typed("#slide_title_text", {
      typeSpeed: 30,
      strings: [data.title.split(" ").join("<br />")]
    });

    this.descEl.innerHTML = data.desc as string;
  }

  /**
   *
   *
   */
  async leaveSlide() {
    this.slideTypedTitle!.stop();
    this.slideTypedTitle!.destroy();
  }

  /**
   *
   *
   */
  slideStop() {
    clearInterval(this.slideObjectInterval!); // use ! because interval can be nullable
  }

  /**
   *
   *
   */
  mounted() {
    this.slideStart();
  }

  /**
   *
   *
   */
  beforeDestroy() {
    this.slideStop();
  }
}
</script>
