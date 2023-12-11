<template>
  <div class="main-container">
    <div class="banner">
      <span class="portal-planner">The Portal Planner</span>
      <h1 class="coming-soon">Coming Soon</h1>
      <span class="follow-updates">Follow for updates!</span>
    </div>
    <Contact class="contact-container" />
  </div>
</template>

<style scoped>
.main-container {
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  padding-top: 20px;

  color: rgb(242, 245, 248);
}

.banner {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portal-planner,
.coming-soon,
.follow-updates {
  opacity: 0;
}

.portal-planner {
  font-style: italic;
  animation: fadeIn 2.5s ease-out forwards;
}

.coming-soon {
  animation: fadeIn 1.5s ease-out forwards;
  animation-delay: 1s;
}

.follow-updates {
  animation: fadeIn 1.5s ease-out forwards;
  animation-delay: 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<script setup lang="ts">
import Contact from '@/components/Contact.vue';
</script>
