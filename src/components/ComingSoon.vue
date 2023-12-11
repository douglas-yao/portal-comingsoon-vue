<template>
  <main class="main-container">
    <div class="banner">
      <span class="portal-planner">The Portal Planner</span>
      <h1 class="coming-soon">Coming Soon</h1>
      <span class="follow-updates">Follow for updates!</span>
    </div>
    <div class="contact">
      <span>Contact Us</span>
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
  </main>
</template>

<style scoped>
main {
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  padding-top: 20px;
}

.banner {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact {
  /* border: 1px solid red; */
  color: rgb(242, 245, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
}

.contact span:hover,
.contact .down-arrow:hover {
  cursor: pointer;
  /* Add additional styling as needed for the hover effect */
}

.down-arrow {
  height: 30px;
  width: 30px;
}

.portal-planner,
.coming-soon,
.follow-updates {
  opacity: 0;
  color: rgb(242, 245, 248);
}

.portal-planner {
  font-style: italic;
  animation: fadeIn 1.5s ease-out forwards;
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
