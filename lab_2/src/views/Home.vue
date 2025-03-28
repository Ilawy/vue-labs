<template>
  <div v-if="loading">...</div>
  <div v-else>
    <section class="gallery">
      <div v-for="item in data" class="card" style="width: 18rem">
        <img :src="item.image" class="card-img-top" alt="..." />
        <div class="card-body d-flex flex-column">
          <RouterLink :to="`/products/${item.id}`">
            <h5 class="card-title">{{ item.name }}</h5>
          </RouterLink>
          <p class="card-text flex-grow-1">
            {{ item.description.slice(0, 64)
            }}{{ item.description.length > 64 ? "..." : "" }}
          </p>
          <h5>{{ $currency(item.price) }}</h5>
          <a
            @click.prevent="cart.addItem(item)"
            :disabled="cart.getItemQuantity(item.id) >= item.instock"
            class="btn btn-primary"
            >Add to cart</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCartStore } from "../stores/cart.store";
const cart = useCartStore();

const data = ref([]);
const loading = ref(true);

function $currency(v) {
  return Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
  }).format(v);
}

onMounted(async () => {
  loading.value = true;
  const response = await fetch("http://localhost:3000/products")
    .then((d) => d.json())
    .then((d) => (data.value = d))
    .finally(() => (loading.value = false));
});
</script>

<style scoped>
.gallery {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

*[disabled="true"] {
  background: gray;
  border-color: transparent;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
