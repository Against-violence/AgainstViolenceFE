<template>
    <div>
        <Navbar />
        <router-view :key='$route.path'></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
export default {
    name: 'Main',
    components: {
        Navbar
    },
    data() {
        return {
            msg: '',
        };
    }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>