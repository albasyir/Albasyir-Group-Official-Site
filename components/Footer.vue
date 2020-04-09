<template>
  <v-footer
    padless
    color="white"
    style='padding-top: 160px;'
  >
    <v-row
      no-gutters
    >
      <v-col
        cols="12"
        class='primary darken-3'
      >
        <center>
          <v-card
            elevation='24'
            max-width="900px"
            class='py-5'
            style="margin-top: -110px;"
          >
            <v-row class='py-5 px-5'>
              <v-col cols='12' sm='3'>
                <v-img src="/icon.png" height="110px" width="110px" />
              </v-col>
              <v-col cols='12' sm='9' class="text-left">
                <div class='display-1 my-1 font-weight-bold primary--text'>
                  Gabung menjadi Partner Albasyir
                </div>
                <div>
                  Albasyir menyediakan pengembangan dan konsultasi terbaik.
                  Setiap mitra kami dapat membantu Anda membuat proyek yang indah dan dirancang dengan baik.
                </div>
              </v-col>
            </v-row>
          </v-card>
        </center>
      </v-col>

      <v-col
        cols="12"
        class='primary darken-3 py-5'
      >
        <v-container>
          <v-row>
            <v-col cols='12' sm='4' md='3'>
              <div class="headline font-weight-bold white--text">
                Servis
              </div>
              <div class='py-2'>
                <v-btn 
                  rounded 
                  text 
                  color="white"
                  nuxt
                  to="/servis/hosting"
                >
                  Hosting 
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>

                <br />

                <v-btn 
                  rounded 
                  text 
                  color="white"
                >
                  Custom Application
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols='12' sm='8' md='9'>
              <div class="headline font-weight-bold white--text">
                Klien saya yang luar biasa..
              </div>
              <p class='py-2 white--text'>
                Kami sangat senang melihat hasil kerja kami digunakan dalam Proyek Pribadi, 
                Aplikasi Perusahaan Besar, Proyek Pemerintah atau di Universitas Bergengsi. 
              </p>
              <div class="font-weight-bold white--text">
                Albasyir Group @ 2020
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col
        class="py-4 text-center"
        cols="12"
      >
        <center>
          <v-img src="/icon.png" height="45px" width="45px" />
        </center>
      </v-col>
    </v-row>
  </v-footer>
</template>
