<template>
  <main class="main-container">
    <span class="portal-planner">The Portal Planner</span>
    <h1 class="coming-soon">Coming Soon</h1>
    <span class="follow-updates">Follow for updates!</span>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
}

.portal-planner,
.coming-soon,
.follow-updates {
  opacity: 0;
}

.portal-planner {
  font-style: italic;
  animation: fadeIn 1.5s ease-out forwards; /* Slower animation */
}

.coming-soon {
  animation: fadeIn 1.5s ease-out forwards;
  animation-delay: 0.5s;
}

.follow-updates {
  animation: fadeIn 1.5s ease-out forwards;
  animation-delay: 1s;
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
`
