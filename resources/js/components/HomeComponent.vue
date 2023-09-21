!
<template>
    <div>
        <h1>This Is Home !</h1>
        <router-link to="/example">Example {Router Link}</router-link>
        <br />
        <button @click="goForward">Forward {Go}</button>
        <br />
        <button @click="goBack">Back {Go}</button>
        <br />
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
    },
};
</script>

<style></style>
