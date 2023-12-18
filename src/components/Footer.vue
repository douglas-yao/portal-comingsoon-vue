<script setup>
import Contact from '@/components/Contact.vue';
</script>

<template>
  <footer>
    <div class="contact-container">
      <Contact />
    </div>
    <span class="footer-text">The Portal Planner, LLC</span>
  </footer>
</template>

<style scoped>
.contact-container {
  width: 100px;
}

footer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  color: rgb(194, 200, 208);
  height: 5%;
}

.footer-text {
  font-size: 12px;
  font-style: italic;
}
</style>
