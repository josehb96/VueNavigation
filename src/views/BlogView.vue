<script setup>
    import EntradasBlog from '../components/EntradasBlog.vue';
</script>

<template>
    <div>
        <h1 class="title">Hola estás en el Blog</h1>
        <div class="panel-blog">
            <EntradasBlog />
            <div class="panel-blog-detail">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .title {
        color: orange;
    }
    .panel-blog {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .panel-blog-detail {
        border: 1px solid;
        padding: 10px;
        min-width: 200px;
    }
</style>