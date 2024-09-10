<script setup>
    import { RouterLink } from 'vue-router';
    import { listaBlogs } from '../services/blogServices'
</script>

<template>
    <div>
        <h3>Lista Blogs</h3>
        <div v-for="blog in listaBlogs" class="blog-item">
            <RouterLink :to="{ name: 'blog-entrada' }" class="item-link">{{ blog.title }}</RouterLink>
        </div>
    </div>
</template>


<style lang="css" scoped>

.blog-item {
    display: block;
    padding: 10px;
    border: 1px solid;
    margin-bottom: 1em;
}

.item-link {
    color: white;
    display: block;
    text-align: left;
}

</style>