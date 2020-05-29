<template>
  <v-dialog v-model="activate" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card flat>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Order</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="closeCard">Tutup</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-stepper v-model="paging" vertical>
        <v-stepper-step :complete="paging > 1" step="1">
          Pilih Layanan
          <small>Mau Hosting ? VPS ? Atau lainya</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" tile @click="paging++">Lanjut</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="paging > 2" step="2">
          Tentukan Domain
          <small>Sudah ada atau order satu</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          <div class="d-flex flex-wrap">
            <div>
              <v-text-field
                @change="checkDomain"
                placeholder="domain anda"
                v-model="form.domain.name"
              />
            </div>
            <div>
              <v-autocomplete
                @change="checkDomain"
                placeholder=".com"
                v-model="form.domain.ltd"
                style="width: 150px"
                :items="ltdList"
                :loading="ltdList.length < 1"
                :disabled="ltdList.length < 1"
              />
            </div>
          </div>
          <div
            class="d-flex flex-row flex-wrap"
            v-if="form.domain.onsearch || apiDomainAvaiable.length > 0"
          >
            <v-card v-for="(row, key) in apiDomainAvaiable" :key="key" outlined class="ma-2">
              <v-card-title>{{ row.period }}</v-card-title>
              <v-card-subtitle>Register</v-card-subtitle>
              <v-card-text>Rp. {{ row.price }} ,-</v-card-text>
            </v-card>
          </div>
          <div>
            <v-btn text @click="paging++" :loading="form.domain.onsearch">Punya Sendiri</v-btn>
            <v-btn text @click="paging--">Kembali</v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-step :complete="paging > 3" step="3">
          Checkout
          <small>Coba kita lihat apa yang kamu order</small>
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary">Pesan / Negosiasi Sekarang</v-btn>
          <v-btn text @click="paging--">Kembali</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface apiDomainPrice {
  period: string;
  price: number;
}

interface apiDomainChecker {
  available: boolean;
  result: Array<apiDomainPrice>;
}

export interface domainInterface extends apiDomainPrice {
  domain: string; // misal albasyir.com
  eppCode?: string; // kalau domainya transfer
  contract: string; // periode, misal 1 tahun
}

export interface productInterface {
  feature: object[];
  pricing: string;
}

export interface choiceInterface {
  domain?: domainInterface;
  product?: productInterface;
}

@Component
export default class HostingCart extends Vue {
  @Prop({ type: Boolean, default: false }) activate!: boolean;

  userChoice: choiceInterface = {};

  form: any = {
    domain: {
      ltd: "",
      name: "",
      onsearch: false
    }
  };

  apiDomainAvaiable: Array<apiDomainPrice> = [];

  ltdList: Array<string> = [];
  paging: number = 1;

  closeCard(): void {
    this.$emit("activate", false);
  }

  getLtd(): void {
    let getData: Promise<Response> = fetch(
      "https://albasyir.glitch.me/domain/ltd"
    );
    getData.catch(e => {});

    getData
      .then(res => res.json())
      .then(json => {
        this.ltdList = json;
      });
  }

  checkDomain(): void {
    // salah satu form domain kosong, maka fungsi di abaikan
    if (!this.form.domain.ltd || !this.form.domain.name) {
      return;
    }

    // chnage status domain lagi di cari
    this.form.domain.onsearch = true;

    // buat card pilihan domain ilang
    this.apiDomainAvaiable = [];

    // rapikan vaiable
    let domainName: string = this.form.domain.name;
    let domainLtd: string = this.form.domain.ltd;
    let fullDomain: string = domainName + domainLtd;

    // coba di ambil
    let getData: Promise<Response> = fetch(
      `https://albasyir.glitch.me/domain/checker/${fullDomain}`
    );

    // ambil error
    getData.catch(() => {
      this.form.domain.onsearch = false;
    });

    //return data
    getData
      .then(res => res.json())
      .then(res => {
        let data: apiDomainChecker = res;

        if (data.available) {
          this.apiDomainAvaiable = data.result;
        } else {
        }

        this.form.domain.onsearch = false;
      });
  }

  created() {
    this.getLtd();
  }
}
</script>
