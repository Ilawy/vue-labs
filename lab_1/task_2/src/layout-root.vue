<template>
  <main class="container">
    <AppHeader />
    <section class="layout">
      <AppAside />
      <AppBody />
    </section>
  </main>
</template>

<script>
import AppAside from './components/app-aside.vue';
import AppBody from './components/app-body.vue';
import AppHeader from './components/app-header.vue';

export default {
  components: { AppHeader, AppAside, AppBody },
  data: () => ({
    name: 'Mohamed',
  }),
};
</script>

<style scoped>
.layout{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
