<template>
  <div class="contact-container" @mouseover="moveUp" @mouseleave="moveDown">
    <div class="contact">
      <span>Contact Us</span>
    </div>
    <svg
      class="down-arrow"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  </div>
</template>

<style scoped>
.down-arrow {
  height: 30px;
  width: 30px;
}
.contact-container {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  transition: transform 0.3s ease;
}

.contact-container:hover {
  cursor: pointer;
  transform: translateY(-5px); /* Move up by 5 pixels on hover */
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const moveUp = () => {
  const contactRef = ref(null);
  const element = contactRef.value as unknown as HTMLElement;
  if (element) {
    element.style.transform = 'translateY(-5px)';
  }
};

const moveDown = () => {
  const contactRef = ref(null);
  const element = contactRef.value as unknown as HTMLElement;
  if (element) {
    element.style.transform = 'translateY(0)';
  }
};
</script>
