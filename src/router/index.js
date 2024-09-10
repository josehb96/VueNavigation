import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
   {
       path: '/',
       component: HomeView
   },
   {
       path: '/about',
       component: AboutView 
   },
   {
       path: '/blog',
       component: BlogView
   } 

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Indicamos la url base
    routes
})

export default router