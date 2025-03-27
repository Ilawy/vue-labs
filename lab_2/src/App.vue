<script setup>
//@ts-ignore
import { Toaster } from "vue-sonner";
import Header from "./components/Header.vue";
</script>

<template>
  <main>
    <Toaster />

    <Header />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style scoped></style>
