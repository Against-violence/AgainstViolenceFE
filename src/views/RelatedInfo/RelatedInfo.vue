<template>
  <div class="info-container">
    <div class="info-top">
      <div class="info-swiper">
        <swiper :options="swiperOption">
          <!-- 图片 -->
          <swiper-slide v-for="item of urlList" :key="item.id">
            <img class="swiper-img" :src="item.url">
          </swiper-slide>
          <!-- 控制条 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="info-news">
        <div class="news news-top">科普资讯（平台自制）</div>
        <div class="news news-bot">科普资讯（平台自制）</div>
      </div>
    </div>
    <div class="info-bottom" v-for="item of newsList" :key="item.id">
      <div class="img-wrapper">
        <img class="img-wrapper-src" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572969467895&di=8cb5a0a418e2f4dab97abba326eca305&imgtype=0&src=http%3A%2F%2Fst.cdn.yestone.com%2F3268323%2F4538%2Fi%2F170%2Fdepositphotos_45385251-stock-photo-vintage-wallpaper.jpg">
      </div>
      <div class="info-list">
        <div class="info-list-title">
          <h4 class="title-text">标题标题标题标题标题标题</h4>
        </div>
        <div class="info-list-content">
          <p class="content-text">相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相资关资讯相关资讯相关资讯相资关资讯相关资讯相关资讯相资关资讯相关资关资讯</p>
        </div>
        <div class="icon-container">
          <div class="icon-con">
            <span class="iconfont">&#xe665;</span>
            500
          </div>
          <div class="icon-con">
            <span class="iconfont">&#xe62a;</span>
            500
          </div>
          <div class="icon-con">
            <span class="iconfont">&#xe613;</span>
            500
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RelatedInfo',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          notNextTick: true,
          loop: true,
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          speed: 2000,
          grabCursor: true
        },
        urlList: [
          {
            id: 1,
            url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572952867976&di=17ae625c57ffda51a9f976959e26c52a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0134b3594e420fa8012193a3d8479b.jpg%40900w_1l_2o_100sh.jpg'
          },
          {
            id: 2,
            url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572952867976&di=17ae625c57ffda51a9f976959e26c52a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0134b3594e420fa8012193a3d8479b.jpg%40900w_1l_2o_100sh.jpg'
          },
          {
            id: 3,
            url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572952867976&di=17ae625c57ffda51a9f976959e26c52a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0134b3594e420fa8012193a3d8479b.jpg%40900w_1l_2o_100sh.jpg'
          }
        ],
        newsList:[
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 3
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../styles/penetrate.css";
  *{
    margin: 0;
    padding: 0;
  }
.info-container {
  /*display: flex;*/
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  padding: 40px 0 40px;
}
.info-top{
  display: flex;
  padding-bottom: 15px;
}
.info-top .info-swiper{
  border: 1px solid #ccc;
  width: 60%;
}
.info-swiper .swiper-img{
  width: 100%;
  height: 100%;
}
.info-top .info-news{
  padding-left: 15px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
.info-news .news{
  height: 50%;
  line-height: 120px;
  text-align: center;
  border: 1px solid #ccc;
}
.info-news .news-bot{
  margin-top: 15px;
}
.info-bottom{
  margin-top: -1px;
  display: flex;
  border: 1px solid #ccc;
}
.info-bottom .img-wrapper{
  padding: 10px;
  width: 25%;
}
.info-bottom .info-list{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.info-list .info-list-title{
  height: 25%;
  margin-top: 10px;
}
.info-list .info-list-content{
  height: 50%;
  overflow: hidden;
}
.info-list .title-text{
  display: inline-block;
}
.info-list-content .content-text{
  overflow: hidden;
  font-size: 16px;
  line-height: 30px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.info-list .icon-container{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  height: 25%;
}
.icon-container .icon-con{
  font-size: 12px;
  color: #666;
  margin-left: 15px;
}
</style>

