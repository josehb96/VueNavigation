<script setup>

    import { useRouter } from 'vue-router'

    // states
    const router = useRouter() 

    // methods
    const logout = () => {
        localStorage.setItem('isAuth', false)
        // replace a diferencia de push hace que no se guarde la búsqueda en el historial, porque reemplaza la cola de navegación
        router.replace({ name: 'login' }) 
    }

</script>

<template>
    <div>
        <h3>Bienvenido al perfil</h3>
        <button @click="logout">Cerrar sesión</button>
    </div>
</template>


<style lang="scss" scoped>

</style>