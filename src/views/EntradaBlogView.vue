<script setup>
    import { useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue'
    import { getBlogId } from '../services/blogServices';

    // state
    const route = useRoute()
    const blogRetrieve = ref(getBlogId(1)) // Recupera por defecto el blog con id = 1

    // methods
    onMounted(() => { // mientras se este cargando el componente
        blogRetrieve.value = getBlogId(route.params.id)
    })

</script>

<template>
    <div>
        <h1>Entrada del Blog</h1>
        <div>
            <p>id: {{ $route.params.id }}</p>
            <h3>title: {{ blogRetrieve.title }}</h3>
            <p>contenido: {{ blogRetrieve.content }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>