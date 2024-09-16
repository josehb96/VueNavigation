# VueNavigation

This project demonstrates advanced navigation techniques in Vue 3 using Vue Router and the Composition API. It's based on the Neunapp course "Vue Router y Composition API - Navegación en Vue 3".

## Features

- Basic routing setup with Vue Router
- Dynamic route handling
- Nested routes
- Route parameters and query parameters
- Protected routes with navigation guards
- 404 Not Found page
- Modular router structure

## Key Concepts Covered

1. **Router Setup**: Basic configuration of Vue Router in a Vue 3 project.
2. **Dynamic Navigation**: Using `<router-view>` and `<router-link>` for dynamic content rendering and navigation.
3. **Route Parameters**: Handling and validating route parameters, including regex validation.
4. **Nested Routes**: Implementing child routes and handling them in parent components.
5. **Query Parameters**: Working with query parameters for features like search functionality.
6. **Navigation Guards**: Implementing route protection using navigation guards and meta fields.
7. **404 Handling**: Setting up a catch-all route for handling non-existent routes.
8. **Router Modularization**: Organizing routes into separate files for better project structure.

## Project Structure

```
src/
├── router/
│   ├── index.js
│   ├── home.js
│   └── users.js
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── BlogView.vue
│   └── NotFoundView.vue
├── components/
│   └── HeaderMain.vue
└── users/
    ├── LoginView.vue
    └── PerfilUserView.vue
```

## Setup and Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Key Vue Router Concepts

- **createRouter**: Used to create the router instance
- **createWebHistory**: Used for creating HTML5 history mode
- **useRoute**: Composition API function for accessing the current route
- **useRouter**: Composition API function for programmatic navigation

## Advanced Features

- **Meta Fields**: Used for adding extra information to routes, useful for navigation guards
- **Navigation Guards**: Implemented using `router.beforeEach` for protecting routes
- **Dynamic Route Matching**: Using params with dynamic segments in the route path

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

- Neunapp for the excellent Vue Router course
- Vue.js team for Vue 3 and Vue Router
