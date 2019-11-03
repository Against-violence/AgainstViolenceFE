<template>
  <el-container class="sc-container">
    <el-aside width="200px">
      <el-menu router :default-active="$route.path">
        <el-menu-item>
          <template slot="title"><i class="el-icon-user-solid"></i>我的主页</template>
        </el-menu-item>
        <el-menu-item index="/hc/list">
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
          <el-tab-pane label="基本资料" name="first">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-tab-pane>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="third">
          <el-form :model="passwordFrom" status-icon :rules="passwordRules" ref="passwordFrom" label-width="100px">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="passwordFrom.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="passwordFrom.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('passwordFrom')">提交</el-button>
              <el-button @click="resetForm('passwordFrom')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="实名认证" name="fourth">
          <el-form label-position="left" :model="idVerifiedFrom" status-icon ref="idVerifiedFrom" label-width="100px">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="idVerifiedFrom.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码" prop="idCardNumber">
              <el-input v-model="idVerifiedFrom.idCardNumber" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div class="up-button">
            <div class="right-distance20">
              <el-button type="primary">上传<i class="el-icon-upload el-icon--right "></i></el-button>
            </div>
            <span>建议尺寸200*200，支持jpg、png、gif，最大不能超过500KB</span>
          </div>
          <div class="idcard-warpper top-distance20">
            <div class="left-idcard">
              <span class="bottom-distance20">请输入学生证正面或身份证正面</span>
              <el-upload action="#" list-type="picture-card" :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handleFontPictureCardPreview(file)">
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!fontDisabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                      <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!fontDisabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="fontDialogVisible">
                <img width="100%" :src="fontDialogImageUrl" alt="">
              </el-dialog>
            </div>
            <div class="right-idcard">
              <span class="bottom-distance20">请输入学生证反面或身份证反面</span>
              <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handleBackPictureCardPreview(file)">
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!backDisabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                      <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!backDisabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="backDialogVisible">
                <img width="100%" :src="backDialogImageUrl" alt="">
              </el-dialog>
            </div>
          </div>
          <div class="top-distance20">
            <el-button type="primary">确认修改</el-button>
          </div>
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
    background-color: rgb(238, 241, 246);
}

.sc-container {
    width: 65%;
    margin: 0 auto;
    border: 1px solid #eee
}
.sc-container .el-menu {
    height: 100%;
}
.up-button {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.right-distance20 {
    margin-right: 20px;
}
.idcard-warpper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.left-idcard {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-right: 20px;
}
.right-idcard {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}
.bottom-distance20 {
    margin-bottom: 20px;
}
.top-distance20 {
    margin-top: 40px;
}
</style>

<script>
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.passwordFrom.checkPass !== "") {
                    this.$refs.passwordFrom.validateField("checkPass");
                }
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.passwordFrom.pass) {
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
            passwordFrom: {
                pass: "",
                checkPass: ""
            },
            idVerifiedFrom: {
                name: "",
                idCardNumber: ""
            },
            idVerifiedRules: {
                name: [
                    {
                        required: true,
                        message: "请输入姓名",
                        trigger: "blur"
                    }
                ],
                idCardNumber: [
                    {
                        required: true,
                        message: "请输入身份证号码",
                        trigger: "blur"
                    },
                    {
                        pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                        message: "你的身份证格式不正确"
                    }
                ]
            },
            passwordRules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                checkPass: [{ validator: validatePass2, trigger: "blur" }]
            },
            fontDialogImageUrl: "",
            fontDialogVisible: false,
            fontDisabled: false,
            backDialogImageUrl: "",
            backDialogVisible: false,
            backDisabled: false
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
        },
        handleFontPictureCardPreview(file) {
            this.fontDialogImageUrl = file.url;
            this.fontDialogVisible = true;
        },
        handleBackPictureCardPreview(file) {
            this.backDialogImageUrl = file.url;
            this.backDialogVisible = true;
        }
    }
};
</script>
