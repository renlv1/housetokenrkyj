<template>
  <div class="news">
    <div class="banner">
      <div class="wrap">
        <div class="banner-text">HouseToken<br>{{$t('news.text1')}}</div>
      </div>
    </div>
    <div class="list">
      <div class="wrap">
        <ul class="clearfix">
          <li v-for="(item, index) in $t('news.list')" :key="index" @click="jump(item, index)">
            <div class="img" :style="`background-image:url(${item.url})`">
              <!-- <img :src="item.url" alt=""> -->
            </div>
            <div class="content">
              <div class="tit">{{item.title}}</div>
              <div class="text">
                <span>{{item.time}}</span>
                <p>{{item.intro}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="video" v-show="videoShow">
      <div class="video-content">
        <i class="close" @click="close"></i>
        <video id="video" ref="video" width="100%" controls="" webkit-playsinline="true" playsinline="true">
          <source src="" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoShow: false
    }
  },
  methods: {
    jump (item, index) {
      if (item.videoUrl) {
        this.$refs.video.src = item.videoUrl
        this.$refs.video.play()
        this.videoShow = true
      } else {
        this.$router.push(`/newsDetail?id=${index}`)
      }
    },
    close () {
      this.videoShow = false
      this.$refs.video.pause()
    }
  }

}
</script>

<style lang="less" scoped>
  @green: #00a99d;
  .news{
    .banner{
      height: 300px;
      background: url(~@img/news/banner.png) no-repeat center;
      background-size: cover;
      display: flex;
      align-items: center;
      &-text{
        font-size: 48px;
        color: #fff;
        line-height: 1.5;
        text-shadow: 1px 1px rgba(0,0,0, .2), 2px 2px rgba(0,0,0, .3);
      }
    }
    ul{
      padding: 70px 0 40px;
      margin-left: -70px;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 320px;
        height: 420px;
        margin: 0 0 40px 70px;
        border: 1px solid @green;
        transition: .3s;
        cursor: pointer;
        direction: ltr;
        text-align: left;
        &:hover{
          box-shadow: 0 0 20px rgba(28,224,185,.3)
        }
      }
      img{
        max-width: 100%;
        vertical-align: top;
      }
      li:nth-child(7) .img{
        background-size: 100% 100%;
      }
      .img{
        height: 190px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-bottom: 1px solid #45b7af;
      }
      .content{
        padding: 0 18px 30px;
        // border-top: 1px solid @green;
        font-size: 13px;
        line-height: 1.5;
        span{
          color: #999;
          display: block;
          margin-bottom: 5px;
        }
        .tit{
          font-size: 16px;
          line-height: 22px;
          padding: 20px 0 10px;
          color: @green;
          min-height: 70px
        }
        p{
          max-height: 110px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      .banner{
        height: 150px;
        background-size: cover;
        &-text{
          font-size: 26px;
          padding: 0 10%;
        }
      }
      ul{
        padding: 30px 4%;
        img{
          width: 100%;
        }
        .img{
          height: 170px;
        }
        li{
          float: none;
          width: auto;
          height: auto;
        }
        .content{
          // font-size: 16px;
          // line-height: 1.5;
          .tit{
            font-size: 16px;
            line-height: 1.5;
            min-height: auto;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .video{
    position: fixed;
    background: rgba(0,0,0,.6);
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    &-content{
      width: 800px;
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      background: #000;
    }
    @media screen and (max-width: 1200px) {
      .video-content{
        width: 90%;
        video{
          width: 100%;
        }
      }
    }
    .close{
      position: absolute;
      right: 0;
      top: -18px;
      width: 20px;
      height: 20px;
      transform: rotate(-45deg);
      transform-origin: 30% 20%;
      &:before,&:after{
        content: '';
        width: 2px;
        height: 20px;
        position: absolute;
        left: 9px;
        top: 0;
        background: #999;
      }
      &:after{
        transform: rotate(90deg)
      }
      &:hover{
        &:before,&:after{
          background: #dc2f2f;
        }
      }
      cursor: pointer;
      z-index: 22;
    }
  }
</style>
