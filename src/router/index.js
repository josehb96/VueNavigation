import { createRouter, createMemoryHistory } from 'vue-router'

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
    history: createMemoryHistory(), // Para crear el historial de navegación en memoria
    routes
})

export default router