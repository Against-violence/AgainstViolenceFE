<template>
    <div class="main">
        <Navbar  class="heightFix" />
        <router-view class="heightFull" :key='$route.path'></router-view>
        <footer class="heightFix">2019-2019 棒棒团 版权所有</footer>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
    name: "Main",
    components: {
        Navbar
    },
    data() {
        return {
            msg: ""
        };
    }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.heightFix {
    flex: 0 0 auto;
}
.heightFull {
    flex: 1 1 auto;
}
footer {
    height: 60px;
    background-color: #545c64;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 13px;
}
</style>