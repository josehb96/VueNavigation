<script setup>
  
  import { RouterView } from 'vue-router'
  import HeaderMain from './components/HeaderMain.vue';
  
  // pages
  import HomeView from './views/HomeView.vue'

</script>

<template>
  <div>
    <HeaderMain />
    <!-- <component :is="pageActive" /> -->
     <div class="content">
        <RouterView />
     </div>
  </div>
</template>

<style scoped>

.content {
  width: 600px;
  padding: 1em;
}

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
