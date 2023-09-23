<template>
    <div>
        <h1>This Is Home !</h1>
        <router-link to="/example">Example {Router Link}</router-link>
        <br />
        <button @click="goForward">Forward {Go}</button>
        <br />
        <button @click="goBack">Back {Go}</button>
        <br />
        <button @click="testQuery">Test Query</button>
        <br />
        <button @click="about">About</button>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("This Mounted");
    },
    methods: {
        goForward() {
            // Lanjut
            this.$router.go(1);
        },
        goBack() {
            // Kembali
            this.$router.go(-1);
        },
        testQuery() {
            // Dynamic Route memiliki 2 cara

            // Cara pertama
            // this.$router.push({
            //     name: "user",
            //     params: { username: "Dimas" },
            //     query: { id: 123 },
            // });

            // Cara kedua
            this.$router.push("/user/Dimas?id=123");
        },
        about() {
            this.$router.push("/about");
        },
    },
};
</script>

<style></style>
