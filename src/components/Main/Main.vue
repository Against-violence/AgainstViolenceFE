<template>
    <div>
        navbar
        <router-view :key="$route.path"></router-view>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            msg: ""
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>