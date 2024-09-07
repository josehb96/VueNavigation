<script setup>
  import HomeView from './views/HomeView.vue'
  import AboutView from './views/AboutView.vue'
  import BlogView from './views/BlogView.vue'
</script>

<template>
  <div>
    <div class="menu">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
    </div>
    <HomeView />
  </div>
</template>

<style scoped>

.menu {
  display: flex;
  gap: 1em;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
