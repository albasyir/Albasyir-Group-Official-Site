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

<script>
export default {
  props: {
    slidesData: {
      type: Array,
      require: true
    }
  },

  data: () => ({
    slideActive: null,
    slideInterval: 5000,
    timeoutAndInterval: {}
  }),

  methods: {
    slideStart() {
      return new Promise(resolve => {
        this.slideActive = 0;
        resolve(this)
      })
    },

    activeSlide() {
      let el = document.getElementById(`slide-${this.slideActive}`)

      if(!el) {
        this.slideActive = 0;
        el = document.getElementById(`slide-${this.slideActive}`)
      }

      return el
    },

    mountSlide() {

      let slide = this.activeSlide();

      timeoutAndInterval['mounted'] = setTimeout(() => {
        slide.classList.remove("d-none")
        slide.style.opacity = 1;
      }, 2000)

    },

    async leaveSlide() {
      let slide = this.activeSlide();

      slide.style.opacity = 0;

      this.timeoutAndInterval['leave'] = await setTimeout(() => {
        slide.classList.add("d-none");
      }, 2000)

    },

    nextSlide() {
      this.leaveSlide()
      this.slideActive = this.slideActive + 1
      this.mountSlide()
    }
  },

  mounted() {
    if(!this.$props.slidesData) {
      console.error('Slide Text cant be run.., because slide data not available')
      return;
    }

    let slide = this.slideStart()
    slide.then(() => { this.mountSlide() })

    this.timeoutAndInterval['cyrcle'] = setInterval(() => {
      slide.then(() => { this.nextSlide() })
    }, this.slideInterval)
  },

  beforeDestroy() {
    for(waitingList in this.timeoutAndInterval) {
      console.log(typeof waitingList);
    }
  }

}
</script>
