<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-width="60px" label-position="left" hide-required-asterisk>
            <h3 class="title">登录</h3>
            <el-form-item label="用户名" prop="username" class="login-input">
                <el-input ref="username" v-model="loginForm.username" placeholder="请输入用户名" name="username" type="text" tabindex="1" />
            </el-form-item>

            <el-form-item label="密码" prop="password" class="login-input">
                <el-input ref="password" v-model="loginForm.password" placeholder="请输入密码" name="password" tabindex="2" @keyup.enter.native="handleLogin" />
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
                    <el-col :span="Number(12)">
                        <a style="margin-left: 65%; color: #666; text-decoration: none;" href="about blank">忘记密码</a>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-button :loading="loading" type="primary" class="submit-button" @click="handleLogin">登 录</el-button>

        </el-form>
    </div>
</template>


<script>
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
                        min: 6,
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
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    setTimeout(() => {
                        this.$router.push({ path: "/hc/list" });
                        this.$message({
                            message: "登录成功",
                            type: "success",
                            center: true
                        });
                    }, 2000);
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.login-container {
    display: flex;
    padding-top: 200px;
    justify-content: center;
    min-height: 100vh;
    height: 100vh;
    background-color: #eee;
}
.login-form {
    width: 450px;
}
.title {
    font-size: 26px;
    text-align: center;
}
.login-input {
    margin-bottom: 25px;
}
.submit-button {
    width: 100%;
    border-radius: 10px;
}
</style>
