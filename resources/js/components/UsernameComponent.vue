<template>
    <div>
        <h1>Hello {{ $route.params.username }}, nice to meet you</h1>
        <h1>ID saya adalah {{ $route.query.id }}</h1>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
