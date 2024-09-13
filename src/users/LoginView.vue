<script setup>

    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    // states
    const router = useRouter()
    const loading = ref(false) 

    // methods
    const login = () => {
        
        // proceso de login
        localStorage.setItem('isAuth', true) // Con esto hemos establecido una variable en la memoria del navegador
        loading.value = true 
        setTimeout(() => {
            loading.value = false // Volvemos este estado a su valor default 
            router.push({ name: 'user-perfil' })
        }, 1000)
    }

</script>

<template>
    <div>
        <h1>Ingresar al sistema</h1>
        <button @click="login">Acceder</button>

        <p v-if="loading">...accediendo</p>
    </div>
</template>


<style lang="scss" scoped>

</style>