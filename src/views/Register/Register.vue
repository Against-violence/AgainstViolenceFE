<template>
    <div class="register-container">
        <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form" auto-complete="on" label-width="60px" label-position="left" hide-required-asterisk>
            <h3 class="title">注册</h3>
            <el-form-item label="用户名" prop="username" class="register-input">
                <el-input ref="username" v-model="registerForm.username" placeholder="请输入用户名" name="username" type="text" tabindex="1" />
            </el-form-item>

            <el-form-item label="密码" prop="password" class="register-input">
                <el-input ref="password" v-model="registerForm.password" placeholder="请输入密码" name="password" type="password" tabindex="2" @keyup.enter.native="handleRegister" />
            </el-form-item>

            <!-- <el-form-item label="验证码" style="margin: 0px 0px 10px 0px">
                <el-row justify="space-between">
                    <el-col :span="Number(15)">
                        <el-input class="registerForm-checkCode" name="checkCode" placeholder="请输入验证码" @keyup.enter.native="handleregister" />
                    </el-col>
                    <el-col :span="Number(9)">
                        <div style="border: 1px solid #000000;width: 100%; display: inline-flex; justify-content: center;">checkCode</div>
                    </el-col>
                </el-row>
            </el-form-item> -->

            <el-form-item>
                <el-row justify="end">
                    <el-col :span="Number(4)" :offset="Number(19)" class="link">
                        <a @click="$router.push('/login')">已有账号?</a>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-button :loading="loading" type="primary" class="submit-button" @click="handleRegister">注 册</el-button>

        </el-form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            registerForm: {
                username: "",
                password: ""
            },
            registerRules: {
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
        buildMessageBox(message, type) {
            this.$message({
                message,
                type,
                center: true
            });
        },
        async handleRegister() {
            const isFormValid = await this.$refs.registerForm.validate();

            if (isFormValid) {
                this.loading = true;
                try {
                    const registerResponse = await this.$http.post(
                        "/register",
                        {
                            username: this.registerForm.username,
                            password: this.registerForm.password
                        }
                    );
                    const { status } = registerResponse;
                    if (status === 200) {
                        this.buildMessageBox(
                            "注册成功,跳转至登录页面",
                            "success"
                        );
                        setTimeout(() => {
                            this.$router.push({ path: "/login" });
                        }, 2000);
                        
                    }
                    if (status === 422) {
                        this.buildMessageBox("用户已存在", "warning");
                    }
                    if (status === 500) {
                        this.buildMessageBox(
                            "注册失败，请检查网络设置",
                            "error"
                        );
                    }
                } catch (error) {
                    this.loading = false;
                    console.log(error);
                }
            }
        }
    }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    height: 100vh;
    background-color: #eee;
}
.register-form {
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
    visibility: hidden;
}
.register-input {
    margin-bottom: 25px;
}
.submit-button {
    width: 100%;
    border-radius: 10px;
}
</style>
