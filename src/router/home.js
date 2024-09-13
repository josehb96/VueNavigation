import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import EntradaBlogView from '../views/EntradaBlogView.vue'
import SearchBlog from '../views/SearchBlogView.vue'

export const homeRoutes = [
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