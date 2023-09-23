<template>
    <div>
        <h1>About</h1>
        <button @click="goBack">Back {Go}</button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            // Kembali
            this.$router.go(-1);
        },
    },
};
</script>
