import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
   {
       path: '/',
       component: HomeView,
       name: 'home'
   },
   {
       path: '/about',
       component: AboutView,
       name: 'about' 
   },
   {
       path: '/blog',
       component: BlogView,
       name: 'blog'
   } 

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Indicamos la url base
    routes
})

export default router