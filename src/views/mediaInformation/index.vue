<template>
  <div class="container">
    <div class="main-top">
      <div class="hot">
        <div class="wrapper">
          <swiper :options="swiperOption">
            <!-- 图片 -->
            <swiper-slide v-for="item of urlList" :key="item.id">
              <img class="swiper-img" :src="item.url">
            </swiper-slide>
            <!-- 控制条 -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="news news-top">科普资讯（平台自制）</div>
      <div class="news news-bottom">科普资讯（平台自制）</div>
    </div>
    <div class="main-bottom">
      <div class="item-list">
        <div class="img-wrapper">
          <img class="list-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572585737922&di=6707adee62c6f2c0b9b07baee80f886a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0370bb255ee966732f875a132e73ec1.jpg">
        </div>
        <div class="text-wrapper">
          <div class="title-container">
            <h4 class="title">新闻标题</h4>
          </div>
          <div class="text-container">
            <p class="text">
              相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯
            </p>
          </div>
          <div class="icon-container">
            <div class="icon-list">
              <div class="icon-con">
                500
                <span class="iconfont">&#xe671;</span>
              </div>
              <div class="icon-con">
                500
                <span class="iconfont">&#xe665;</span>
              </div>
              <div class="icon-con">
                500
                <span class="iconfont">&#xe613;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item-list">
        <div class="img-wrapper">
          <img class="list-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572585737922&di=6707adee62c6f2c0b9b07baee80f886a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0370bb255ee966732f875a132e73ec1.jpg">
        </div>
        <div class="text-wrapper">
          <div class="title-container">
            <h4 class="title">新闻标题</h4>
          </div>
          <div class="text-container">
            <p class="text">
              相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯
            </p>
          </div>
          <div class="icon-container">
            <div class="icon-list">
              <div class="icon-con">
                500
                <span class="iconfont">&#xe671;</span>
              </div>
              <div class="icon-con">
                500
                <span class="iconfont">&#xe665;</span>
              </div>
              <div class="icon-con">
                500
                <span class="iconfont">&#xe613;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item-list">
        <div class="img-wrapper">
          <img class="list-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572585737922&di=6707adee62c6f2c0b9b07baee80f886a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0370bb255ee966732f875a132e73ec1.jpg">
        </div>
        <div class="text-wrapper">
          <div class="title-container">
            <h4 class="title">新闻标题</h4>
          </div>
          <div class="text-container">
            <p class="text">
              相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯相关资讯
            </p>
          </div>
          <div class="icon-container">
            <div class="icon-list">
              <div class="icon-con">
                500
                <span class="iconfont">&#xe671;</span>
              </div>
              <div class="icon-con">
                500
                <span class="iconfont">&#xe665;</span>
              </div>
              <div class="icon-con">
                500
                <span class="iconfont">&#xe613;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaInformation',
  data() {
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
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1935826275,794773974&fm=15&gp=0.jpg'
        },
        {
          id: 2,
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=861041046,534112716&fm=26&gp=0.jpg'
        },
        {
          id: 3,
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=838174938,2329710263&fm=26&gp=0.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
.container {
  margin: 60px auto auto;
  width: 730px;
  height: 630px;
  .main-top {
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: 237px;
    width: 100%;
    .hot{
      width: 450px;
      height: 100%;
      background: green;
      .wrapper{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
        >>> .swiper-pagination-bullet{
          width: 23px;
          height: 11px;
          border-radius: 0;
        }
        >>> .swiper-pagination-bullet-active{
          background: #fff !important
        }
        .swiper-img{
          width: 100%;
          height: 100%;
        }
        .swiper-pagination{
          position: absolute;
          bottom: 0;
          height: 20%;
        }
      }
    }
    .news{
      position: absolute;
      right: 0;
      width: 265px;
      height: 112px;
      text-align: center;
      line-height: 112px;
      border: 1px solid #000;
    }
    .news-top{
      top: 0;
    }
    .news-bottom{
      bottom: 0;
    }
  }
  .main-bottom{
    width: 100%;
    height: 100%;
    .item-list{
      overflow: hidden;
      display: flex;
      box-sizing: border-box;
      height: 126px;
      width: 100%;
      border: 1px solid black;
      margin-top: -1px;
      .img-wrapper{
        height: 100%;
        width: 25%;
        .list-img{
          width: 100%;
          height: 100%;
          padding: 10px 6px;
        }
      }
      .text-wrapper{
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        width: 75%;
        .title-container{
          /*font-size: 0px;*/
          height: 30px;
          .title{
            padding: 10px 0;
            height: 100%;
            display: inline-block;
            /*margin-top: 2px;*/
            /*margin-left: 30px;*/
            font-size: 16px;
          }
        }
        .text-container{
          overflow: hidden;
          flex: 1;
          .text{
            padding: 18px 5px 0 0;
            line-height: 25px;
            font-size: 14px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .icon-container{
          position: relative;
          height: 20px;
          margin-bottom: 5px;
          .icon-list{
            position: absolute;
            padding-left: 15px;
            right: 0;
            bottom: 0;
            width: 180px;
            height: 100%;
            font-size: 5px;
            .icon-con{
              float: left;
              color: #666;
              font-size: 12px;
              width: 33.33%;
            }
          }
        }
      }
    }
  }
}
</style>
