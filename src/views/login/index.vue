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
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
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
            <a style="margin-left: 65%;" href="about blank">忘记密码</a>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;border-radius: 10px;" @click.native.prevent="handleLogin">Login</el-button>
      </el-form-item>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
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
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
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
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    /*color: $cursor;*/
  }
}

.login-container {
  display: flex;
  align-items: center;
}

/* reset element-ui css */
.login-container {

  .el-input {
    display: inline-block;
    height: 30px;
    width: 100%;
    border: 1px;

    input {
      /*background: transparent;*/
      border: 0px;
      -webkit-appearance: none;
      padding: 12px 5px 12px 15px;
      border-radius: 50px;
      /*color: $light_gray;*/
      height: 30px;
      caret-color: $cursor;


      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    /*border: 1px solid rgba(255, 255, 255, 0.1);*/
    /*background: rgba(0, 0, 0, 0.1);*/
    margin-bottom: 25px;
    /*color: #454545;*/
  }
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $light_gray;

  .login-form {
    position: relative;
    width: 450px;
    max-width: 100%;
    /*padding: 160px 35px 0;*/
    margin: 0 auto;
  }
/*
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
*/
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      margin: 0px auto 30px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 20px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .el-form-item__error {
    padding-top: 6px !important;
  }

}
</style>
