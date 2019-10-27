<template>
<div class="hc-container">
    <div class="hc-posts">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all">全部</el-tab-pane>
            <el-tab-pane label="待认证" name="inAuth">待认证</el-tab-pane>
            <el-tab-pane label="待处理" name="inProcess">待处理</el-tab-pane>
            <el-tab-pane label="处理中" name="Processing">处理中</el-tab-pane>
        </el-tabs>
    </div>
    <div class="hc-form">
    <h3>快速发布求助信息</h3>
    <el-form :rules="rules" ref="hcForm" label-position="top" label-width="80px" :model="hcPostForm">
        <el-form-item prop="title" label="求助标题">
            <el-input v-model="hcPostForm.title"></el-input>
        </el-form-item>
        <el-form-item prop="content" label="求助内容">
            <el-input type="textarea" :rows="7" v-model="hcPostForm.content"></el-input>
        </el-form-item>
        <el-form-item prop="region" label="所在区域">
            <el-select v-model="hcPostForm.region" placeholder="请选择所在区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item prop="detailedAddr" label="详细地址">
            <el-input v-model="hcPostForm.detailedAddr"></el-input>
        </el-form-item>
        <el-form-item prop="contactPerson" label="联系人">
            <el-input v-model="hcPostForm.contactPerson"></el-input>
        </el-form-item>
        <el-form-item prop="contactDetail" label="联系方式">
            <el-input v-model="hcPostForm.contactDetail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('hcForm')">提交</el-button>
          <el-button @click="resetForm('hcForm')">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import './overwrite.css'
export default {
  name: 'Helpingcenter',
  data () {
    return {
    activeName: 'all',
    labelPosition1: 'top',
    labelPosition2: 'left',
    hcPostForm: {
        title: '',
        content: '',
        region: '',
        detailedAddr: '',
        contactPerson: '',
        contactDetail: ''
      },
    rules: {
      title: [
        { required: true, message: '请输入求助标题', trigger: 'blur' },
        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
      ],
      content: [
        { required: true, message: '请输入求助内容', trigger: 'blur' },
        { min: 15, max: 2000, message: '长度在 15 到 2000 个字符', trigger: 'blur' }
      ],
      region: [
        { required: true, message: '请输入所在区域', trigger: 'change' }
      ],
      detailedAddr: [
        { required: true, message: '请输入详细地址', trigger: 'blur' },
        { min: 8, max: 50, message: '长度在 8 到 50 个字符', trigger: 'blur' }
      ],
      contactPerson: [
        { required: true, message: '请输入联系人', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
      ],
      contactDetail: [
        { required: true, message: '请输入联系方式', trigger: 'blur' },
        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
      ]
    }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        valid ? alert('submit!') : alert('error!');
        if (!vaild) return false;
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss" scoped>
.hc-container {
    display: flex;
    flex-direction: row;
    width:65%;
    margin: 0 auto;
    padding: 15px;
    justify-content: space-between;
    .hc-posts {
        width: 68%;
    }
    .hc-form {
        width: 28%;
    }
}
</style>
