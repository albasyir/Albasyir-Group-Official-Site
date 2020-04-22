<style scoped>
  .slide-title-text {
    font-size: 70pt;
    font-weight: bold;
    margin: 0;
  }

  .slide-desc {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 300px;
    margin-right: 50px;
    font-size: 20pt;
  }

  .slide-desc-line {
    position: absolute;
    left: -40px;
    width: 10px;
    height: 140%;
  }

  @media screen and (max-width: 950px) {
     .slide-desc {
      position: relative;
      width: 100%;
      font-size: 20pt;
    }
  }

  @media screen and (max-width: 600px) {
    .slide-title-text {
      font-size: 40pt;
    }
  }
</style>

<template>
  <v-container fluid class='primary py-5'>
    <v-container>
      <v-row no-gutters id='slide-container'>
        <div
          class='d-none fade py-3 col-12'
        >
          <div class='slide-title-text white--text' ref="slideTitle">
            <!-- TEXT TITILE HERE -->
          </div>
          <div class='slide-desc white--text'>
            <div class='slide-desc-line white' />
            <div class='slide-desc-text' ref="slideDesc">
              <!-- TEXT DESC HERE -->
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'nuxt-property-decorator'
import Typer from "typer-js"

/**
 * interface for each TextSlide Data
 */
export interface TextSlideInterface {
  /**
   * Slide description
   */
  desc: String,

  /**
   * Slide title
   */
  title: String
}

/**
 * interface for array of TextSlide Data
 */
export interface ArrayTextSlideInterface {
  /**
   * Array of TextSlide TextSlideInterface Data
   */
  [index : number] : TextSlideInterface
}

@Component
export default class TextSlide extends Vue {
  // slideData texting, remember with interface
  @Prop({ type: Array, required: true }) slidesData !: ArrayTextSlideInterface

  /**
   * Slide Configuration
   */
  slideActive : number = 0 // start from ?
  slideInterval : number = 5000 // what is interval each slide ?


  /**
   * object can be use for intervalTimeObject
   */
  slideObjectInterval : ReturnType<typeof setTimeout> | undefined;


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
  slideStart() : void {
    // stop
    this.slideStop()

    this.mountSlide()

    this.slideObjectInterval = setInterval(() => {

      this.nextSlide()
    }, this.slideInterval)
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
    this.leaveSlide()

    // next index of slide
    this.slideActive = this.slideActive + 1

    // mount new slide
    this.mountSlide()
  }


  /**
   *
   *
   */
  mountSlide() {
    let data : TextSlideInterface = this.slidesData[this.slideActive];
  }


  /**
   *
   *
   */
  async leaveSlide() {

  }


  /**
   *
   *
   */
  slideStop() {
    clearInterval(this.slideObjectInterval!) // use ! because interval can be nullable
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
