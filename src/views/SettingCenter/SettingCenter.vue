<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-active="$route.path">
        <el-menu-item>
          <template slot="title"><i class="el-icon-user-solid"></i>我的主页</template>
        </el-menu-item>
        <el-menu-item index="/hc">
          <template slot="title"><i class="el-icon-chat-round"></i>我的发帖</template>
        </el-menu-item>
        <el-menu-item>
          <template slot="title"><i class="el-icon-chat-dot-round"></i>我的评论</template>
        </el-menu-item>
        <el-menu-item>
          <template slot="title"><i class="el-icon-success"></i>评论我的</template>
        </el-menu-item>
        <el-menu-item>
          <template slot="title"><i class="el-icon-s-tools"></i>个人设置</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="基本资料" name="first">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-tab-pane>
        <el-tab-pane label="修改头像" name="second">
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="third">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="邮箱认证" name="fourth">

        </el-tab-pane>
      </el-tabs>
    </el-main>

  </el-container>

</template>
<style>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

<script>
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };

        return {
            activeName: "first",
            fileList: [
                {
                    name: "food.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                },
                {
                    name: "food2.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                }
            ],
            ruleForm: {
                pass: "",
                checkPass: ""
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }]
            }
        };
    },
    methods: {
        handleClick() {},
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>
