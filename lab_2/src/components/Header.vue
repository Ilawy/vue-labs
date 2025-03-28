<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Celestial</router-link>
      <div class="d-flex bg-primary">
          <router-link to="/cart">
            <button class="btn btn-primary">Cart</button>
          </router-link>
          <router-link to="/products/new">
            <button class="btn btn-primary">+</button>
          </router-link>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

 
  


</script>

<style></style>
