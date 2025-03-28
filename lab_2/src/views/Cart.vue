<template>
  <div>
    <div v-if="!cart.items.length">
      <h1 class="text-center mt-8">No items yet</h1>
    </div>
    <table v-else class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cartItem, index) in cart.items">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ cartItem.item.name }}</td>
          <td>
            {{ cartItem.item.price }} X {{ cartItem.quantity }} =
            {{ $currency(cartItem.quantity * cartItem.item.price) }}
          </td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary" @click="cart.removeItem(cartItem.item)">-</button>
              <button type="button" class="btn btn-primary" :disabled="cartItem.quantity >= cartItem.item.instock" @click="cart.addItem(cartItem.item)">+</button>
              <button type="button" class="btn btn-danger" @click="cart.removeItem(cartItem.item, true)">
                <svg
                  version="1.1"
                  class="has-solid"
                  viewBox="0 0 36 36"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  focusable="false"
                  role="img"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path
                    class="clr-i-outline clr-i-outline-path-1"
                    d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z"
                  />
                  <path
                    class="clr-i-outline clr-i-outline-path-2"
                    d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z"
                  />
                  <path
                    class="clr-i-outline clr-i-outline-path-5"
                    d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z"
                  />
                  <path
                    class="clr-i-solid clr-i-solid-path-1"
                    d="M6,9V31a2.93,2.93,0,0,0,2.86,3H27.09A2.93,2.93,0,0,0,30,31V9Zm9,20H13V14h2Zm8,0H21V14h2Z"
                    style="display: none"
                  />
                  <path
                    class="clr-i-solid clr-i-solid-path-2"
                    d="M30.73,5H23V4A2,2,0,0,0,21,2h-6.2A2,2,0,0,0,13,4V5H5A1,1,0,1,0,5,7H30.73a1,1,0,0,0,0-2Z"
                    style="display: none"
                  />
                  <rect
                    class="clr-i-outline clr-i-outline-path-3"
                    x="21"
                    y="13"
                    width="2"
                    height="15"
                  />
                  <rect
                    class="clr-i-outline clr-i-outline-path-4"
                    x="13"
                    y="13"
                    width="2"
                    height="15"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart.store";

const cart = useCartStore();
function $currency(v) {
  return Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
  }).format(v);
}
</script>

<style></style>
