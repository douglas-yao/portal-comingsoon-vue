<template>
  <nav class="navbar">
    <a href="">Home</a>
    <a href="">Schedule</a>
    <a href="">About</a>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  height: 10vh;
  align-items: center;
}

a {
  text-decoration: none;
  color: rgb(194, 200, 208);
  transition: color 0.3s ease;
  padding: 8px;
  font-size: 16px;
}

a:hover {
  color: #333;
  text-decoration: underline;
}

@media only screen and (max-width: 600px) {
  nav {
    justify-content: center;
  }

  a {
    font-size: 14px;
  }
}
</style>
