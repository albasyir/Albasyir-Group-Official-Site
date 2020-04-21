<style scoped>
  .slide-title-text {
    font-size: 70pt;
    font-weight: bold;
    margin: 0;
  }

  .slide-desc-text {
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
     .slide-desc-text {
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
          v-for='(slide_row, key) in slidesData'
          :key="key"
          :id='`slide-${key}`'
          class='d-none fade py-3 col-12'
          style='opacity: 0'
          :ref="`slide-${key}`"
        >
          <div class='slide-title-text white--text'>
            <div
              v-for="(part_title, key) in slide_row.title.split(' ')"
              :key="key"
            >
              {{ part_title }}
            </div>
          </div>
          <div class='slide-desc-text white--text'>
            <div class='slide-desc-line white' />
            {{ slide_row.desc }}
          </div>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'nuxt-property-decorator'

@Component
export default class SimpleText extends Vue {
  @Prop({ type: Array, required: true }) slidesData !: Array<Object>
 
  slideObject : any =  null
  slideActive : number = 0
  slideInterval : any = 5000

  /**
   * 
   * 
   */
  slideStart() {
    this.slideActive = 0

    this.mountSlide()

    let intervalSlide = setInterval(() => {
      this.nextSlide()
    }, this.slideInterval)

    return intervalSlide
  }


  /**
   * 
   * 
   */
  mountSlide() {
    let slide : HTMLElement = this.activeSlide();

    if(slide) {
      setTimeout(() => {
        slide.classList.remove("d-none")
        slide.style.opacity = "1"
      }, 2000)
    }

    
  }


  /**
   * 
   * 
   */
  activeSlide() {
    let el = document.getElementById(`slide-${this.slideActive}`)

    if(!el) {
      this.slideActive = 0
      el = document.getElementById(`slide-${this.slideActive}`)
    }

    return el as HTMLElement
  }


  /**
   * 
   * 
   */
  async leaveSlide() {
    let slide : HTMLElement = this.activeSlide()

    if(slide) {
      slide.style.opacity = "0"

      await setTimeout(() => {
        slide.classList.add("d-none")
      }, 2000)
    }
  }


  /**
   * 
   * 
   */
  nextSlide() {
    this.leaveSlide()
    this.slideActive = this.slideActive + 1
    this.mountSlide()
  }

  /**
   * 
   * 
   */
  slideStop() {
    clearInterval(this.slideObject);
  }


  /**
   * 
   * 
   */
  mounted() {
    if(!this.$props.slidesData) {
      console.error('Slide Text cant be run.., because slide data not available')
      return;
    }

    this.slideObject = this.slideStart()
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
