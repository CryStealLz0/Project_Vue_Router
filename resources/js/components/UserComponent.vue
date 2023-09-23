<template>
    <div>
        <h1>Hello {{ $route.params.username }}, nice to meet you</h1>
        <h1>ID saya adalah {{ $route.query.id }}</h1>
        <br />
        <br />
        <router-link :to="routeHello">Hello</router-link> |
        <router-link :to="routeBye">Bye</router-link>
        <br />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        routeHello() {
            return "/user/" + this.$route.params.username + "/hello";
        },
        routeBye() {
            return "/user/" + this.$route.params.username + "/bye";
        },
    },
};
</script>

<style></style>
