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

// El callback ejecutar siempre antes de que la ruta cambie
router.beforeEach((to, from) => { // to representa la ruta al que queremos ir y from la ruta desde la que estamos

    console.log(to.fullPath)    

})

export default router