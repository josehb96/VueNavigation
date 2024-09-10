<script setup>
    import { ref } from 'vue'
    import { getBlogId } from '../services/blogServices';

    // state
    const blogRetrieve = ref(getBlogId(1)) // Recupera por defecto el blog con id = 1


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