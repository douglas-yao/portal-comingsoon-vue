<template>
  <div
    class="contact-container"
    @click="openEmailClient"
    @mouseover="moveUp"
    @mouseleave="moveDown"
  >
    <div class="contact">
      <span>Contact Us</span>
    </div>
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="{1.5}"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  </div>
</template>

<style scoped>
.icon {
  height: 30px;
  width: 30px;
}
.contact-container {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  font-size: 20px;
  transition: transform 0.3s ease;
}

.contact-container:hover {
  cursor: pointer;
  transform: translateY(-5px);
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const openEmailClient = () => {
  const subject = encodeURIComponent('Regarding The Portal Planner');
  const body = encodeURIComponent('Dear Hasti,\n\n');

  const mailtoLink = `mailto:theportalplanner@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
};

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
