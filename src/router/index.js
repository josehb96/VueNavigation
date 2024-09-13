import { createRouter, createWebHistory } from 'vue-router'

import { homeRoutes } from './home'
import { usersRoutes } from './users'

const routes = [
    ...homeRoutes,
    ...usersRoutes // Esta sintaxis es para concatenar dos arrays como haríamos con homeRoutes.concat(usersRoutes)
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Indicamos la url base
    routes
})

export default router