<template>
  <div class="web-news-deatil">
    <div class="banner">
      <div class="wrap">
        <div class="banner-text">HouseToken<br>{{$t('news.text1')}}</div>
      </div>
    </div>
    <div class="wrap wrap-content">
      <div class="location">
        <router-link to="/news">{{$t('news.text4')}}</router-link>
        >
        <span>{{$t('news.text5')}}</span>
      </div>
      <div class="news-deatil">
        <div class="title">{{detail.title}}</div>
        <div class="time">{{detail.time}}</div>
        <img :src="detail.url" alt="">
        <div class="content" v-html="detail.content"></div>
        <router-link to="/news" class="go-back">{{$t('news.text6')}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detail: this.$t('news.list')[parseInt(this.$route.query.id)]
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
  @green: #00a99d;
  .wrap-content{
    direction: ltr;
  }
  .web-news-deatil{
    ul{
      padding: 10px 0;
      margin-left: 18px;
    }
    li{
      list-style: disc outside none;
    }
    .banner{
      height: 300px;
      background: url(~@img/news/banner.png) no-repeat center;
      display: flex;
      align-items: center;
      background-size: cover;
      &-text{
        font-size: 48px;
        color: #fff;
        line-height: 1.5;
        text-shadow: 1px 1px rgba(0,0,0, .2), 2px 2px rgba(0,0,0, .3);
      }
    }
    .location{
      padding: 80px 0;
      span,a:hover{
        color: @green;
      }
    }
    .news-deatil{
      line-height: 1.5;
      padding-bottom: 80px;
      .title{
        font-size: 30px;
        color: @green;
        padding-bottom: 40px;
      }
      /deep/ strong, /deep/ b{
        color: @green;
      }
      .time{
        padding-bottom: 20px;
        color: #999999;
      }
      img{
        width: 750px;
        margin: 18px 0;
        max-width: 100%;
      }
      p{
        padding: 10px 0;
        color: #333;
      }
    }
    .iframe{
      text-align: center;
      margin-bottom: 40px;
    }
    .go-back{
      display: none;
    }
    @media screen and (max-width: 1200px) {
      .banner{
        display: none;
        height: 200px;
        &-text{
          font-size: 26px;
          padding-left: 10%;
        }
      }
      .news-deatil{
        padding: 30px 4%;
        .title{
          font-size: 26px;
        }
      }
      .iframe{
        width: 100% !important;
        margin-bottom: 20px;
      }
      .go-back{
        display: block;
        text-align: center;
        font-size: 16px;
        padding: 30px 0;
        color: @green;
      }
    }
  }
</style>
