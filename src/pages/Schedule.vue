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
  height: 80%;

  color: rgb(242, 245, 248);
}

.schedule-coming-soon {
  margin-top: 80px;
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

@media only screen and (max-width: 600px) {
  .schedule-coming-soon {
    margin-top: 40px;
  }
}
</style>
