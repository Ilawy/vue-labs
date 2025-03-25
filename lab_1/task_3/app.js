//@ts-check
//@deno-types="https://esm.sh/vue@3.5.13/dist/vue.d.mts"
import * as Vue from "https://esm.sh/vue@3.5.13/dist/vue.esm-bundler.js";

import * as _ from "https://esm.sh/lodash";

const form = {
  categories: ["design", "network", "database", "development"],
  series: ["first", "second", "third"],
  socialNetworks: ["facebook", "X", "youtube", "instagram"],
};

const vue = Vue.createApp({
  data: () => ({
    showModal: true,
    form,
    result: {
      title: "",
      categories: [],
      edition: "",
      networks: [],
      publishNow: false,
    },
  }),
  methods: {
    showResult() {
      const title = this.result.title.trim();
      const edition = this.result.edition.trim();
      if(!title || !edition)return alert("Please fill all fields");
      this.final = {
        ...this.result,
        title, 
        edition
      }
      this.showModal = false;
    },
  },

  template: document.getElementById("vue")?.innerHTML,
});

vue.mount("#app");
