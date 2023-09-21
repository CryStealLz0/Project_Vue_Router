<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">I'm an example component.</div>
                </div>
                <a href="/home" style="background: aqua">Home</a>
                <br />
                <router-link to="/home">Home {Router Link}</router-link>
                <br />
                <button @click="pushToHome">Home {Push}</button>
                <br />
                <button @click="goForward">Forward {Go}</button>
                <br />
                <button @click="goBack">Back {Go}</button>
                <br />
                <button @click="replaceToHome">Home {Replace}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
    methods: {
        pushToHome() {
            // link router bisa menggunakan name / path nya
            // Menggunakan name
            this.$router.push({ name: "home" });
            // Menggunakan path
            // this.$router.push("/home");
        },
        goForward() {
            // Lanjut
            this.$router.go(1);
        },
        goBack() {
            // Kembali
            this.$router.go(-1);
        },
        replaceToHome() {
            /* replace akan menghapus/ mengubah router sendiri menjadi router yg di tuju
              bisa menggunakan name / path nya */

            // Menggunakan name
            // this.$router.replace({ name: "home" });
            // Menggunakan path
            this.$router.replace("/home");
        },
    },
};
</script>
