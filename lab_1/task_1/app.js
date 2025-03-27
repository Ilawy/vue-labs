//@ts-check
//@deno-types="https://esm.sh/vue@3.5.13/dist/vue.d.mts"
import * as Vue from "https://esm.sh/vue@3.5.13/dist/vue.esm-bundler.js";

import * as _ from "https://esm.sh/lodash";

const vue = Vue.createApp({
  data: () => ({
    data: [],
    wishlist: [],
    loading: true,
    showWishlist: false
  }),
  async created() {
    const result = await fetch("./books.json").then((d) => d.json());
    this.data = _.chunk(result, 3);
    this.loading = false;
  },
  methods: {
    /**
     * @param {any} isbn
     */
    toggleWishlistItem(isbn){
      if(this.wishlist.includes(isbn)){
        this.wishlist.splice(this.wishlist.indexOf(isbn), 1)
      }else{
        this.wishlist.push(isbn)
      } 
    },
    /**
     * @param {any} isbn
     */
    getBookByISBN(isbn){
        return this.data.flat().find((/** @type {{ ISBN: any; }} */ book)=>book.ISBN === isbn)
    },
    /**
     * @param {number} price
     */
    formatPrice(price){
        return Intl.NumberFormat("ar-SA", {
            style: "currency",
            currency: "SAR"
        }).format(price)
    }
  },
  template: document.getElementById("vue")?.innerHTML,
});

vue.mount("#app");
