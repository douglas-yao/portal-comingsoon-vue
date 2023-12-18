<template>
  <div class="main-container">
    <span class="about-coming-soon">About Section Under Construction</span>
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
  margin-top: 50px;
}

.about-coming-soon {
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
