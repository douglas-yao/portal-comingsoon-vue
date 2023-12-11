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
  gap: 10px; /* Reduce the gap for small screens */
  height: 10vh;
  align-items: center; /* Center items vertically */
}

a {
  text-decoration: none;
  color: rgb(194, 200, 208);
  transition: color 0.3s ease;
  padding: 8px; /* Add padding for touch-friendly area */
  font-size: 16px; /* Adjust the font size for responsiveness */
}

a:hover {
  color: #333;
  text-decoration: underline;
}

/* Media query for smaller screens */
@media only screen and (max-width: 600px) {
  nav {
    justify-content: center; /* Center links for small screens */
  }

  a {
    font-size: 14px; /* Reduce font size for small screens */
  }
}
</style>
