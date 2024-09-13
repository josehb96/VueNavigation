import LoginView from "../users/LoginView.vue"
import PerfilUserView from "../users/PerfilUserView.vue"

export const usersRoutes = [
    {
        path: '/login',
        component: LoginView, 
        name: 'login'
    },
    {
        path: '/user-perfil',
        component: PerfilUserView, 
        name: 'user-perfil'
    }
]