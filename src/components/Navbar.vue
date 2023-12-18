<template>
  <nav class="navbar">
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/schedule">Schedule</router-link>
    <router-link class="router-link" to="/about">About</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  height: 5%;
  align-items: center;
}

.router-link {
  text-decoration: none;
  color: rgb(194, 200, 208);
  transition: color 0.3s ease;
  /* padding: 8px; */
  font-size: 16px;
}

.router-link:hover {
  color: #333;
}

@media only screen and (max-width: 600px) {
  nav {
    justify-content: center;
  }

  .router-link {
    font-size: 14px;
  }
}
</style>
