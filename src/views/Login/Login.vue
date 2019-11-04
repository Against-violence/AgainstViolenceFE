<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      size="mini"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-width="60px"
      label-position="left"
      hide-required-asterisk>

      <div class="title-container">
        <h3 class="title">登陆</h3>
      </div>

      <el-form-item label="用户名" prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入邮箱登录地址"
          name="username"
          type="text"
          tabindex="1"
          size="mini"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          ref="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          :key="passwordType"
          :type="passwordType"
          @keyup.enter.native="handleLogin"
        />
        <!--<span class="show-pwd" @click="showPwd">-->
          <!--<svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
        <!--</span>-->
      </el-form-item>

      <el-form-item label="验证码" style="margin: 0px 0px 10px 0px">
        <el-row justify="space-between">
          <el-col :span="Number(15)">
            <el-input
              class="loginForm-checkCode"
              name="checkCode"
              placeholder="请输入验证码"
              @keyup.enter.native="handleLogin"/>
          </el-col>
          <el-col :span="Number(9)">
            <div style="border: 1px solid #000000;width: 100%; display: inline-flex; justify-content: center;">checkCode</div>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-row justify="space-between">
          <el-col :span="Number(12)">
            <el-checkbox>保存密码</el-checkbox>
          </el-col>
          <el-col :span="Number(12)">
            <a style="margin-left: 50%;" href="about blank">忘记密码</a>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;border-radius: 10px;" @click.native.prevent="handleLogin">Login</el-button>
      </el-form-item>

      <el-form-item>
        <el-row justify="end">
          <el-col :span="Number(12)">
            <router-link to="/register">注册用户</router-link>
          </el-col>
        </el-row>
      </el-form-item>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div>
</template>

<script>
  //import { validUsername } from '@/utils/validate'

  export default {
    name: 'Login',
    data() {
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能少于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            { required: true, message: '邮箱地址不能为空', trigger: 'blur' },
            { trigger: ['blur', 'change'], type: 'email', message: '请输入正确的邮箱地址' }
          ],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$router.push({path: '/'})
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
<style scope>

  .login-container {
    --bg: #2b3a4b;
    --dark_gray: #889aa4;
    --light_gray: #eee;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
    background-color: var(--light_gray);
  }

  .login-container .el-input {
    display: inline-block;
    height: 30px;
    width: 100%;
    border: 1px;
  }

  .login-container .el-input input {
    border: 0px;
    padding: 12px 5px 12px 15px;
    border-radius: 50px;
    height: 30px;
  }

  .login-container .login-form {
    position: relative;
    width: 450px;
    max-width: 100%;
    margin: 0 auto;
  }

  .login-container .title {
    font-size: 26px;
    margin: 0px auto 30px auto;
    text-align: center;
    font-weight: bold;
  }

  .el-form-item_error {
    padding-top: 6px !important;
  }
</style>
