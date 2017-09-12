<template>
  <div>
    <div class="banner">
      <img :class="objData.banner!==''?'banner-img':''" :src="objData.banner">
    </div>
    <swiper :aspect-ratio="5/12" dots-position="center" :auto="true" :loop="true">
      <swiper-item class="swiper-img" v-for="(item, index) in objData.swiper" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
    <div class="wrap">
      <div class="theme">
        <span class="theme-China">{{ objData.themeChina }}</span>
        <span class="theme-English">{{ objData.themeEnglish }}</span>
      </div>
      <div class="info">
        <div class="info-wrap">
          <div class="info-content">
            <img class="view" src="../images/icon/view.png">
            <span>{{ objData.view }}次</span>
          </div>
          <div class="info-content">
            <img class="time" src="../images/icon/time.png">
            <span>{{ objData.time }}</span>
          </div>
          <div class="info-content">
            <img class="address" src="../images/icon/address.png">
            <span>{{ objData.address }}</span>
          </div>
        </div>
      </div>
      <div class="content" v-for="items in objData.content">
        <p class="content-title">{{ items.title }}</p>
        <li class="content-wrap" v-for="item in items.wrap">
          <div class="content-box">
            <span :class="item.moreFont?'content-more':''">{{ item.detail }}</span>
            <span class="read" @click="readMore(item)" v-if="item.moreFont && !item.readMore">阅读更多</span>
            <span class="read" @click="readMore(item)" v-else-if="item.readMore">收起</span>
          </div>
          <img :class="item.imgUrl!==''?'content-img':''" :src="item.imgUrl">
        </li>
      </div>
    </div>
    <div class="footer">
      <p><span class="price">￥{{ objData.price }}</span> 起</p>
      <span class="grey">已有{{ objData.people }}人报名</span>
      <a :href="objData.linkUrl">
        <div class="footer-right">立即报名</div>
      </a>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      objData
    }
  },
  mounted () {
    var $this = this;
    document.title = $this.objData.title;
  },
  methods: {
    readMore(item) {
      item.readMore = !item.readMore;
      item.moreFont = !item.moreFont;
    }
  }
}
</script>

<style lang="less" scoped>

html,body {
  background: #fff;
  .banner {
    .banner-img {
      width: 100%;
      height: 8vh;
    }
  }
  .swiper-img img {
    width: 100%;
    height: 100%;
  }
  .wrap {
    padding-left: .3rem;
    padding-bottom: 1.8rem;
    .theme {
      display: flex;
      flex-direction: column;
      padding: .3rem 0 .3rem 0;
      border-bottom: 1px solid #e6e6e6;
      line-height: .5rem;
      .theme-China {
        font-size: .35rem;
      }
      .theme-English {
        width: 5.5rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: .26rem;
        color: #777;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      .info-wrap {
        padding-left: .3rem;
        .info-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: .34rem 0;
          .view, .time, .address {
            &.view {
              width: .56rem;
              height: .34rem;
            }
            &.time {
              width: .44rem;
              height: .44rem;
              margin: 0 .06rem;
            }
            &.address {
              width: .4rem;
              height: .5rem;
              margin: 0 .08rem;
            }
          }
          span {
            margin-left: .35rem;
            color: #777;
          }
        }
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      padding: .3rem .3rem .4rem 0;
      border-top: 1px solid #e6e6e6;
      .content-title {
        font-size: .35rem;
        margin-bottom: .2rem;
      }
      .content-wrap {
        .content-box {
          line-height: .5rem;
          .content-more {
            overflow:hidden;
            text-overflow:ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
          .read {
            color: #359dda;
          }
        }
        .content-img {
          width: 100%;
          border-radius: 5px;
          margin: .2rem 0;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: .8rem;
    position: fixed;
    font-family: "Microsoft Yahei";
    bottom: 0;
    left: 0;
    border-top: 1px solid #e6e6e6;
    background: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .price {
      margin-left: .3rem;
      font-size: .36rem;
      font-weight: bold;
    }
    .grey {
      color: #8a8a8a;
      font-size: .26rem;
    }
    .footer-right {
      width: 2.8rem;
      height: 100%;
      text-align: center;
      line-height: .8rem;
      background: #359dda;
      color: #fff;
      font-size: .3rem;
    }
  }
}

</style>
