<template>
  <div class="hc-container">
    <div class="hc-posts">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="全部"
          name="all"
        >
          <div
            v-for="post in posts"
            :key="post.id"
            class="hc-post-layout"
          >
            <div class="hc-post-item">
              <div class="left-section">
                <h3>{{ post.title }}</h3>
                <span>求助内容: {{ post.content }}</span>
                <div class="post-info">
                  <span>区域: {{ post.region }}</span>
                  <span>发布人: {{ post.author }}</span>
                </div>
              </div>
              <div class="right-section">
                <el-button type="primary">查看详情</el-button>
              </div>
            </div>
            <el-divider />
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="待认证"
          name="inAuth"
        >
          <div
            v-for="post in inAuthPosts"
            :key="post.id"
            class="hc-post-layout"
          >
            <div class="hc-post-item">
              <div class="left-section">
                <h3>{{ post.title }}</h3>
                <span>求助内容: {{ post.content }}</span>
                <div class="post-info">
                  <span>区域: {{ post.region }}</span>
                  <span>发布人: {{ post.author }}</span>
                </div>
              </div>
              <div class="right-section">
                <el-button type="primary">查看详情</el-button>
              </div>
            </div>
            <el-divider />
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="待处理"
          name="inProcess"
        >
          <div
            v-for="post in inProcessPosts"
            :key="post.id"
            class="hc-post-layout"
          >
            <div class="hc-post-item">
              <div class="left-section">
                <h3>{{ post.title }}</h3>
                <span>求助内容: {{ post.content }}</span>
                <div class="post-info">
                  <span>区域: {{ post.region }}</span>
                  <span>发布人: {{ post.author }}</span>
                </div>
              </div>
              <div class="right-section">
                <el-button type="primary">查看详情</el-button>
              </div>
            </div>
            <el-divider />
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="处理中"
          name="processing"
        >
          <div
            v-for="post in processingPosts"
            :key="post.id"
            class="hc-post-layout"
          >
            <div class="hc-post-item">
              <div class="left-section">
                <h3>{{ post.title }}</h3>
                <span>求助内容: {{ post.content }}</span>
                <div class="post-info">
                  <span>区域: {{ post.region }}</span>
                  <span>发布人: {{ post.author }}</span>
                </div>
              </div>
              <div class="right-section">
                <el-button type="primary">查看详情</el-button>
              </div>
            </div>
            <el-divider />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="hc-form">
      <h3>快速发布求助信息</h3>
      <el-form
        ref="hcForm"
        :rules="rules"
        label-position="top"
        label-width="80px"
        :model="hcPostForm"
      >
        <el-form-item
          prop="title"
          label="求助标题"
        >
          <el-input v-model="hcPostForm.title" />
        </el-form-item>
        <el-form-item
          prop="content"
          label="求助内容"
        >
          <el-input
            v-model="hcPostForm.content"
            type="textarea"
            :rows="7"
          />
        </el-form-item>
        <el-form-item
          prop="region"
          label="所在区域"
        >
          <el-select
            v-model="hcPostForm.region"
            placeholder="请选择所在区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          prop="detailedAddr"
          label="详细地址"
        >
          <el-input v-model="hcPostForm.detailedAddr" />
        </el-form-item>
        <el-form-item
          prop="contactPerson"
          label="联系人"
        >
          <el-input v-model="hcPostForm.contactPerson" />
        </el-form-item>
        <el-form-item
          prop="contactDetail"
          label="联系方式"
        >
          <el-input v-model="hcPostForm.contactDetail" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('hcForm')"
          >提交</el-button>
          <el-button @click="resetForm('hcForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="hc-popup">
      <div class="pannel-header bg-color">
        <p>平台认证</p>
        <p>出于求助人信息安全问题，需要您提供对应的信息才能领取</p>
      </div>
      <div class="pannel-content bg-color">
        <el-form
          ref="form"
          label-width="80px"
        >
          <el-form-item label="活动名称">
            <el-input v-model="subPop.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="subPop.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="subPop.tele"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="subPop.card"></el-input>
          </el-form-item>
          <el-form-item label="身份证正面照">
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
            >
              <i
                slot="default"
                class="el-icon-plus"
              ></i>
              <div
                slot="file"
                slot-scope="{file}"
              >
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img
                width="100%"
                :src="dialogImageUrl"
                alt=""
              >
            </el-dialog>
          </el-form-item>
          <el-form-item label="身份证反面照">
            <!-- 这里和上面的一样的.等ui出来在搞 -->
            <el-input v-model="subPop.card"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import './overwrite.css'
export default {
  name: 'HelpingCenter',
  data() {
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
          {
            required: true,
            message: '请输入求助标题',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ],
        content: [
          {
            required: true,
            message: '请输入求助内容',
            trigger: 'blur'
          },
          {
            min: 15,
            max: 2000,
            message: '长度在 15 到 2000 个字符',
            trigger: 'blur'
          }
        ],
        region: [
          {
            required: true,
            message: '请输入所在区域',
            trigger: 'change'
          }
        ],
        detailedAddr: [
          {
            required: true,
            message: '请输入详细地址',
            trigger: 'blur'
          },
          {
            min: 8,
            max: 50,
            message: '长度在 8 到 50 个字符',
            trigger: 'blur'
          }
        ],
        contactPerson: [
          {
            required: true,
            message: '请输入联系人',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ],
        contactDetail: [
          {
            required: true,
            message: '请输入联系方式',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ]
      },
      posts: [
        {
          id: 1,
          title: '我天天被欺负',
          content: '我天天被欺负，真的好无奈，我该怎么办呢？',
          region: '北京市',
          detailedAddr: '北京市东城区',
          contactPerson: '葛优',
          contactDetail: '13822921101',
          author: '校长',
          status: 'inAuth'
        },
        {
          id: 2,
          title: '被揍了',
          content: '谁能替我报仇',
          region: '上海市',
          detailedAddr: '上海市',
          contactPerson: '甄子丹',
          contactDetail: '13822921101',
          author: '校长',
          status: 'inAuth'
        },
        {
          id: 3,
          title: '找大佬',
          content: '我天天被欺负，找大佬罩我',
          region: '南京市',
          detailedAddr: '南京市',
          contactPerson: '葛优',
          contactDetail: '13822921101',
          author: '校长',
          status: 'inAuth'
        },
        {
          id: 4,
          title: '老师也欺负我',
          content: '这是我没想到的，大人也不全是好人',
          region: '西安市',
          detailedAddr: '西安市',
          contactPerson: '张艺谋',
          contactDetail: '13822921101',
          author: '校长',
          status: 'inProcess'
        },
        {
          id: 5,
          title: '到底该说不该说',
          content: '被班长欺负，人面兽心',
          region: '成都市',
          detailedAddr: '成都市',
          contactPerson: '葛优',
          contactDetail: '13822921101',
          author: '校长',
          status: 'inProcess'
        },
        {
          id: 6,
          title: '不敢说',
          content: '这里会是一个好的树洞吗',
          region: '成都市',
          detailedAddr: '成都市',
          contactPerson: '葛优',
          contactDetail: '13822921101',
          author: '校长',
          status: 'processing'
        },
        {
          id: 7,
          title: '被欺负了一个学期',
          content: '没办法了只能求救',
          region: '成都市',
          detailedAddr: '成都市',
          contactPerson: '葛优',
          contactDetail: '13822921101',
          author: '校长',
          status: 'processing'
        }
      ],
      subPop: {
        name: '',
        sex: '',
        tele: '',
        card: '',
        frontPhoto: null,
        behind: null,
        area: [],
        address: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  computed: {
    inAuthPosts() {
      return this.posts.filter(post => post.status === 'inAuth')
    },
    inProcessPosts() {
      return this.posts.filter(post => post.status === 'inProcess')
    },
    processingPosts() {
      return this.posts.filter(post => post.status === 'processing')
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        valid ? alert('submit!') : alert('error!')
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.hc-container {
  display: flex;
  flex-direction: row;
  width: 65%;
  margin: 0 auto;
  padding: 15px;
  justify-content: space-between;
}
.hc-posts {
  width: 68%;
}
.hc-form {
  width: 28%;
}
.hc-post-layout {
  display: flex;
  flex-direction: column;
}
.hc-post-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
}
.hc-post-item .left-section {
  display: flex;
  flex-direction: column;
}
.hc-post-item .left-section span {
  color: #606266;
  font-size: 14px;
  margin-bottom: 1rem;
}
.hc-post-item .left-section .post-info > span {
  margin-right: 20px;
}
.hc-post-item .right-section {
  display: flex;
}
.bg-color {
  background-color: #ccc;
}
.hc-popup {
  display: none;
  position: fixed;
  z-index: 2;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
}
.hc-popup .pannel-content {
  padding: 15px;
}
.hc-popup .pannel-header {
  text-align: center;
  padding: 10px 30px;
  margin-bottom: 10px;
}
</style>
