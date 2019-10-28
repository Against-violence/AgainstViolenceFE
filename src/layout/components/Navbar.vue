<template>
  <div>
    <el-menu class="navbar" :default-active="activeIndex" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
      <div class="logo">
        <el-menu-item index="0">发声网</el-menu-item>
      </div>
      <div class="navMain">
        <router-link to="/">
          <el-menu-item index="1">首页</el-menu-item>
        </router-link>
        <router-link to="/404">
          <el-menu-item index="2">我要揭发</el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="3">求助中心</el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="4">社区论坛</el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="5">相关资讯</el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="6">万人墙</el-menu-item>
        </router-link>
      </div>
      <div class="profile">
        <router-link to="/personalcenter">
          <el-menu-item index="7">
            <el-avatar class="myAvator" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </el-menu-item>
        </router-link>
        <el-menu-item class="logout" index="8" @click="logout">登出</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    components: {},
    data() {
        return {
            activeIndex: "1"
        };
    },
    computed: {
        ...mapGetters(["sidebar", "avatar"])
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        toggleSideBar() {
            this.$store.dispatch("app/toggleSideBar");
        },
        async logout() {
            await this.$store.dispatch("user/logout");
            this.$router.push(`/login?redirect=${this.$route.fullPath}`);
        }
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logo .el-menu-item {
        font-size: 32px;
        font-weight: 600;
        color: #fff;
    }
    .logo .el-menu-item:hover {
        background-color: rgb(84, 92, 100) !important;
    }
    .navMain {
        display: flex;
        .is-active {
            border-bottom: 3px solid red;
        }
    }
    .profile {
        display: flex;
    }
    .nav-button-group {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 660px;
        .nav-button {
            padding: 8px 17px;
        }
    }
    .hamburger-container {
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }

    .breadcrumb-container {
        float: left;
    }

    .right-menu {
        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: rgba(0, 0, 0, 0.025);
                }
            }
        }

        .avatar-container {
            margin-right: 30px;

            .avatar-wrapper {
                margin-top: 5px;
                position: relative;

                .user-avatar {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }

                .el-icon-caret-bottom {
                    cursor: pointer;
                    position: absolute;
                    right: -20px;
                    top: 17px;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
