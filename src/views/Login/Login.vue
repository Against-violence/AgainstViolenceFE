<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-width="60px" label-position="left" hide-required-asterisk>
            <h3 class="title">登录</h3>
            <el-form-item label="用户名" prop="username" class="login-input">
                <el-input ref="username" v-model="loginForm.username" placeholder="请输入用户名" name="username" type="text" tabindex="1" />
            </el-form-item>

            <el-form-item label="密码" prop="password" class="login-input">
                <el-input ref="password" v-model="loginForm.password" placeholder="请输入密码" name="password" type="password" tabindex="2" @keyup.enter.native="handleLogin" />
            </el-form-item>

            <!-- <el-form-item label="验证码" style="margin: 0px 0px 10px 0px">
                <el-row justify="space-between">
                    <el-col :span="Number(15)">
                        <el-input class="loginForm-checkCode" name="checkCode" placeholder="请输入验证码" @keyup.enter.native="handleLogin" />
                    </el-col>
                    <el-col :span="Number(9)">
                        <div style="border: 1px solid #000000;width: 100%; display: inline-flex; justify-content: center;">checkCode</div>
                    </el-col>
                </el-row>
            </el-form-item> -->

            <el-form-item>
                <el-row justify="space-between">
                    <el-col :span="Number(12)">
                        <el-checkbox>保存密码</el-checkbox>
                    </el-col>
                    <el-col :span="Number(8)" :offset="Number(3)" class="link">
                        <a class="forget-password">忘记密码</a>
                        <a @click="$router.push('/register')">没有账号?</a>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-button :loading="loading" type="primary" class="submit-button" @click="handleLogin">登 录</el-button>

        </el-form>
    </div>
</template>


<script>
import Vue from 'vue'
export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                username: "",
                password: ""
            },
            loginRules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        max: 20,
                        message: "长度在 6 到 20 个字符",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        message: "密码不能少于6位",
                        trigger: "blur"
                    }
                ]
            },
            loading: false
        };
    },
    methods: {
        async handleLogin() {
            const isFormValid = await this.$refs.loginForm.validate();

            if (isFormValid) {
                this.loading = true;
                const loginResponse = await this.$http.post("/login", {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                });
                const { status } = loginResponse;
                if (status === 200) {
                    this.$message({
                        message: "登录成功",
                        type: "success",
                        center: true
                    });
                    localStorage.setItem(
                        "userName",
                        loginResponse.data.username
                    );
                    localStorage.setItem("userToken", loginResponse.data.token);
                    //将用户信息放入vuex
                    this.$store.dispatch(
                        "setUser",
                        loginResponse.data.username
                    );
                    this.$store.dispatch("setToken", loginResponse.data.token);
                    this.$router.push({ path: "/hc/list" });
                } else {
                    this.$message({
                        message: "登录失败",
                        type: "error",
                        center: true
                    });
                    this.$store.dispatch("setUser", null);
                }
            }
        }
    }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    height: 100vh;
    background-color: #eee;
}
.login-form {
    width: 450px;
    padding-top: 200px;
}
.title {
    font-size: 26px;
    text-align: center;
}
.link {
    color: #666; 
    text-decoration: none;
    cursor: pointer;
}
.link .forget-password {
    margin-right: 5%;
}
.login-input {
    margin-bottom: 25px;
}
.submit-button {
    width: 100%;
    border-radius: 10px;
}
</style>
