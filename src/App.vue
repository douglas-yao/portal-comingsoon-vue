<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div id="App">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

#App {
  height: 100dvh;
  padding: 1%;
}
</style>
