<template>
  <div class="uncertified-container">
    <div class="pannel-right">
      <p>求助标题：{{ resData.title }}</p>
      <p>求助内容: {{ resData.content }}</p>
      <p>
        <span>区域：{{ resData.region }}</span>
        <span>发布人：{{ resData.name }}</span>
      </p>
      <div class="btn-wrap">
        <el-button type="primary">我要领取</el-button>
        <span>真实（{{ resData.truth }}）</span>
        <span>虚假（{{ resData.fake }}）</span>
      </div>
    </div>
    <div class="pannel-left">
      <p>任何人都可以发布求助信息，无需登录</p>
      <p>求助标题:</p>
      <el-input
        v-model="message.title"
        placeholder="请输入内容"
      ></el-input>
      <p>求助内容:</p>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="message.content"
      >
      </el-input>
      <div class="select-wrap">
        <p>所在区域：</p>
        <template>
          <el-select
            v-model="provinceVal"
            placeholder="请选择"
          >
            <el-option
              v-for="item in province"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </template>
        <template>
          <el-select
            v-model="cityVal"
            placeholder="请选择"
          >
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </template>
        <template>
          <el-select
            v-model="areaVal"
            placeholder="请选择"
          >
            <el-option
              v-for="item in area"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </template>
      </div>
      <p>详细地址:</p>
      <el-input
        v-model="message.address"
        placeholder="请输入内容"
      ></el-input>
      <p>联系人:</p>
      <el-input
        v-model="message.connect"
        placeholder="请输入内容"
      ></el-input>
      <p>联系方式:</p>
      <el-input
        v-model="message.number"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary">发布求助</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resData: {
        title: '我真的很苦逼的哦',
        content: '我天天被欺负，真的好无奈啊，我该怎么办呢',
        region: '北京市',
        address: '三元里家里蹲小学',
        name: '王晓晓'
      },
      message: {
        title: '',
        content: '',
        region: '',
        address: '',
        connect: '',
        number: ''
      },
      area: [
        {
          value: 'pudongqu',
          label: '浦东区'
        },
        {
          value: 'Tianhe',
          label: '天河区'
        },
        {
          value: 'zhangjiagang',
          label: '张家港'
        }
      ],
      cities: [
        {
          value: 'Beijing',
          label: '北京'
        },
        {
          value: 'Shanghai',
          label: '上海'
        },
        {
          value: 'Nanjing',
          label: '南京'
        },
        {
          value: 'Chengdu',
          label: '成都'
        },
        {
          value: 'Shenzhen',
          label: '深圳'
        },
        {
          value: 'Guangzhou',
          label: '广州'
        }
      ],
      province: [
        {
          value: 'Guangdong',
          label: '广东省'
        },
        {
          value: 'zhejiang',
          label: '浙江省'
        },
        {
          value: 'anhui',
          label: '安徽省'
        }
      ],
      provinceVal: '省',
      cityVal: '市',
      areaVal: '区'
    }
  }
}
</script>
<style lang="scss" scoped>
.uncertified-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .pannel-left {
    width: 35%;
    font-size: 12px;
    margin: 16px;
    padding: 20px;
    background-color: #ccc;
  }
}
</style>
