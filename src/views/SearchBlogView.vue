<script setup>
    import { onMounted, computed } from 'vue'
    import { useRoute } from 'vue-router'
  
    // services
    import { listaBlogs } from '../services/blogServices';  
    
    const route = useRoute() 

    const listResults = computed(() => {
        return listaBlogs.filter(
            blog => blog.title.includes(route.query.kword)
        )
    })

    onMounted(() => {
        console.log('query params -->', route.query.kword)
    })
   
</script>

<template>
    <div>
        <h3>Blogs Encontrados</h3>
        <p v-for="blog in listResults">
            {{ blog.title }} 
        </p> 
    </div>
</template>


<style lang="scss" scoped>

</style>