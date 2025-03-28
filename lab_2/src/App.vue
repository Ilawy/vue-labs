<script setup>
//@ts-ignore
import { Toaster } from "vue-sonner";
import Header from "./components/Header.vue";
</script>

<template>
  <main>
    <Toaster position="top-center" rich-colors />

    <Header />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </keep-alive>
    </router-view>
  </main>
</template>

<style scoped></style>
