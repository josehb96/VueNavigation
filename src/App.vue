<script setup>
  
  import { RouterView } from 'vue-router'
  import { ref } from 'vue'
  
  // pages
  import HomeView from './views/HomeView.vue'
  import AboutView from './views/AboutView.vue'
  import BlogView from './views/BlogView.vue'

  // states
  const pageActive = ref(HomeView)  

</script>

<template>
  <div>
    <div class="menu">
      <a href="#" @click="pageActive = HomeView">Home</a>
      <a href="#" @click="pageActive = AboutView">About</a>
      <a href="#" @click="pageActive = BlogView">Blog</a>
    </div>
    <!-- <component :is="pageActive" /> -->
    <div class="body">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

.body {
  padding: 3rem;
  background-color: aqua;
}

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
