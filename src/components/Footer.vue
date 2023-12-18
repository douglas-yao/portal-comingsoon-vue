<script setup>
import Contact from '@/components/Contact.vue';
</script>

<template>
  <footer>
    <Contact />
    <span class="footer-text">The Portal Planner, LLC</span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  text-align: center;
  color: rgb(194, 200, 208);
  height: 10%;
}

.footer-text {
  font-size: 12px;
  font-style: italic;
}
</style>
