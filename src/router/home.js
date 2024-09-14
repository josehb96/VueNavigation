import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import EntradaBlogView from '../views/EntradaBlogView.vue'
import SearchBlog from '../views/SearchBlogView.vue'
import NotFoundView from '../views/NotFoundView.vue'

export const homeRoutes = [
    {
        path: '/:pathMatch(.*)*', // Usamos una expresión regular que sirva para detectar cualquier otro texto que no esté en las rutas existentes
        component: NotFoundView
    },
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
        path: '/search-blog',
        component: SearchBlog,
        name: 'search-blog'
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