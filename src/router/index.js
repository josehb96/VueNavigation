import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import EntradaBlogView from '../views/EntradaBlogView.vue'

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
       path: '/entra/:id(//d+)', // Forzamos a que sólo aceptemos valores numéricos para dicho parámetro
       component: EntradaBlogView,
       name: 'blog-entrada'
   }, 
   {
       path: '/blog',
       component: BlogView,
       name: 'blog',
       children: [
           {
               path: 'detail/:id',
               component: EntradaBlogView,
               name: 'blog-detail'
           }
       ]
   }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Indicamos la url base
    routes
})

export default router