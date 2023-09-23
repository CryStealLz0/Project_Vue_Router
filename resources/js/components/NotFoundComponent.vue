<template>
    <div>
        <h1>404 Not Found</h1>
        <button @click="goBack">Go Back</button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>
