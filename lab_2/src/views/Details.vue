<template>
  <div v-if="loading">loading</div>
  <div v-else-if="error">product not found</div>
  <div v-else class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" alt="Product Image" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h1>{{ product.name }}</h1>
        <p class="lead">{{ product.description }}</p>
        <p class="h4 text-uppercase">{{ $currency(product.price) }}</p>
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-primary btn-lg" :disabled="cart.getItemQuantity(product.id) >= product.instock" @click="cart.addItem(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../stores/cart.store";

const id = useRoute().params.id;
const cart = useCartStore()

const loading = ref(true);
const error = ref(null);

const product = await fetch(`http://localhost:3000/products/${id}`)
  .then((d) => d.json())
  .catch(() => null)
  .finally(() => (loading.value = false));

if (!product) error.value = true;

function $currency(v) {
  return Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
  }).format(v);
}
</script>
