<template>
  <div class="main-container">
    <span class="schedule-coming-soon"
      >Schedule Section Under Construction</span
    >
  </div>
</template>

<style scoped>
.main-container {
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 85dvh;
  padding-top: 20px;

  color: rgb(242, 245, 248);
}

.schedule-coming-soon {
  opacity: 0;
  animation: fadeIn 2.5s ease-out forwards;
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
