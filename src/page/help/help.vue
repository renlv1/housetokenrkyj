<template>
  <div class="help">
    <div class="banner">
      <div class="wrap">
        <div class="banner-text">{{$t('help.text1')}}</div>
      </div>
    </div>
    <div class="hor-text">
      <h3>{{$t('help.text3')}}</h3>
      <p>{{$t('help.text5')}}</p>
    </div>
   <!-- <div class="list">
      <div class="wrap">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in $t('help.list')" :key="index" class="item">
            <div class="hd">
              <div class="video-area">
                <i class="play-btn" @click="playVideo(index)"></i>
                <img :src="require(`../../assets/images/help//${index + 1}_${$lang === 'cn' ? 'cn' : 'en'}.png`)" alt="">
              </div>
              <div class="title">
                <h3>{{item.title}}</h3>
                <a href="javascript:;" @click="item.show = !item.show">{{ item.show ? $t('help.text8') : $t('help.text7')}}</a>
                <div class="number">{{index + 1}}</div>
              </div>
            </div>
            <div class="detail" :class="{show: item.show}">
              <span>{{index + 1}}. </span>{{item.text}}
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>-->
    <div class="vide-content">
      <div class="title">{{$t('help.text10')}}</div>
      <div class="video-area">
        <i class="play-btn" @click="playVideo()"></i>
        <img :src="require(`../../assets/images/help//${1}_${$lang === 'cn' ? 'cn' : 'en'}.jpeg`)" alt="">
      </div>
    </div>
    <div class="watch">
      <div class="wrap">
        <h3>{{$t('help.text6')}}</h3>
        <div class="btn-wrap">
          <a href="https://www.hotwallet.tech/signup" target="_blank">{{$t('help.text4')}}</a>
        </div>
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
      videoShow: false,
      swiperOption: {
        autoplay: 4000,
        simulateTouch: false, // 可以选中文字
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: true,
        paginationClickable: true,
        autoHeight: true,
        // direction: 'vertical',
        paginationBulletRender: function (swiper, index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
        onTransitionEnd: () => {
          this.$t('help.list').forEach(item => {
            item.show = false
          })
        }
      }
    }
  },
  methods: {
    playVideo () {
      // this.$refs.video.src = `./static/video/${this.$lang === 'cn' ? 'cn' : 'en'}/help${index + 1}.mp4`
      this.$refs.video.src = `./static/video/${this.$lang === 'cn' ? 'cn' : 'en'}/Hot-register.mp4`
      this.$refs.video.play()
      this.videoShow = true
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
  .help{
    overflow: hidden;
    img{
      max-width: 100%;
    }
    .banner{
      height: 300px;
      background: url(~@img/help/banner.png) no-repeat center top;
      display: flex;
      align-items: center;
      background-size: cover;
      &-text{
        font-size: 60px;
        color: #fff;
        line-height: 1.5;
        text-shadow: 2px 2px rgba(0,0,0, .3);
      }
    }
    .swiper-container{
      height: 550px;
      .cn &, .en &{
        height: 480px;
      }
    }
    .hor-text{
      text-align: center;
      background: #f5f5f5;
      font-size: 16px;
      color: #969696;
      padding: 55px 0;
      line-height: 1.1;
      h3{
        font-size: 24px;
        color: #000;
        padding-bottom: 24px;
      }
    }
    .list{
      .wrap{
        padding: 160px 100px 120px 160px;
        position: relative;
        &:before{
          content: '';
          width: 1px;
          height: 100%;
          background: @green;
          position: absolute;
          left: 0;
          top: 0;

        }
        .pc.ar &{
          padding: 160px 160px 120px 100px;
          &:before{
            left: auto;
            right: 0;
          }
        }
      }
      .item{
        padding: 8px 0;
      }
      .hd{
        display: flex;
        justify-content: space-between;
      }
      .title{
        width: 275px;
        height: 275px;
        border: 1px solid @green;
        border-radius: 50%;
        padding: 0 36px;
        font-size: 18px;
        color: #969696;
        position: relative;
        order: 0;
        h3{
          font-size: 26px;
          color: @green;
          line-height: 1.2;
          padding: 95px 0 10px;
          .de &{
            font-size: 23px;
          }
        }
        p{
          cursor: pointer;
        }
        .cn &{
          padding: 0 47px;
          h3{
            font-size: 34px;
            line-height: 1;
          }
        }
      }
      .detail{
        visibility: hidden;
        opacity: 0;
        transform: translateY(20%);
        transition: .4s;
        padding-top: 50px;
        color: #000;
        line-height: 2;
        span{
          color: @green;
          font-size: 16px;
        }
        &.show{
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        }
      }
      .number{
        z-index: 2;
        position: absolute;
        width: 32px;
        line-height: 32px;
        font-size: 18px;
        text-align: center;
        left: 50%;
        margin-left: -16px;
        top: -15px;
        color: @green;
        background: #fff;
        border-radius: 50%;
      }
      .video-area{
        width: 490px;
        position: relative;
        order: 1;
        /*&:after{
          content: '';
          position: absolute;
          right: 0;
          bottom: -3px;
          background: url(~@img/help/house_token.svg) no-repeat center;
          background-size: 100%;
          width: 334px;
          height: 22px;
        }*/
      }

      .play-btn{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: url(~@img/help/play.svg) no-repeat center;
        background-size: 100%;
        width: 60px;
        height: 60px;
        img{
          box-shadow:  0 1px 6px rgba(0,0,0, .45);
          border-radius: 50%;
          display: none;
        }
        border-radius: 50%;
        cursor: pointer;
      }

    }
    .vide-content{
      width: 100%;
      height: auto;
      padding: 40px 0 60px;
      .title{
        font-size: 36px;
        color: #00a99d;
        text-align: center;
        position: relative;
        margin-bottom: 60px;
        @media screen and (max-width: 1200px) {
          font-size: 29px;
        }
        &:after{
          content: '';
          position: absolute;
          display: block;
          width: 80px;
          height: 1px;
          background-color: #bbb;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .video-area{
        width: 490px;
        height: 279px;
        margin: 0 auto;
        position: relative;
        order: 1;
        @media screen and (max-width: 768px) {
          width: 100%;
          height: auto;
        }
        .play-btn{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          background: url('~@img/help/play.svg') no-repeat 50%;
          background-size: 100%;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
        }
        /*&:after{
          content: '';
          position: absolute;
          right: 0;
          bottom: -3px;
          background: url(~@img/help/house_token.svg) no-repeat center;
          background-size: 100%;
          width: 334px;
          height: 22px;
          @media screen and (max-width: 768px) {
            width: 80%;
          }
        }*/
        img{
          max-width: 100%;
        }
      }
    }
    .watch{
      background: #00a99d;
      padding: 80px 0 60px;
      color: #fff;
      text-align: center;
      .wrap{
        width: 1100px;
        margin: 0 auto;
        h3{
          font-size: 26px;
          padding: 0 138px 36px;
        }
      }
      .video{
        width: 760px;
        margin: 0 auto;
        background: #000;
        video{
          vertical-align: top;
        }
      }
      h3{
        font-size: 34px;
        color: #fff;
        padding: 0 138px 36px;
      }
      .tit{
        font-size: 14px;
        text-align: center;
        color: #b3b3b3;
        line-height: 1.5;
        padding-bottom: 56px;
      }
      .intro{
        padding-top: 40px;
        font-size: 18px;
      }
      .btn-wrap{
        width: 800px;
        margin: 0 auto;
        border-top: 1px solid #fff;
        padding: 36px 0 0;
        font-size: 0;
        display: flex;
        justify-content: center;
        a{
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 0 14px;
          width: 300px;
          text-align: center;
          height: 66px;
          background: #fff;
          border-radius: 4px;
          color: #00a99e;
          margin: 0 10px;
          font-size: 16px;
          line-height: 1.2;
          /*&:first-child:after{
            content: '';
            width: 26px;
            height: 26px;
            display: inline-block;
            margin-left: 6px;
            vertical-align: middle;
            background: url(~@img/common/down.svg) no-repeat center;
            background-size: 24px;
            margin-top: -2px;
          }*/
          /*&:first-child{
            box-shadow: 0 0 4px rgba(0, 168, 157, .1);
            transition: all .4s linear;
            &:hover{
              box-shadow: 0 0 6px rgba(0, 168, 157, .8);
            }
          }*/
          /*&:last-child{
            color: #fff;
            background-color: #0054a9;
            box-shadow: 0 0 4px rgba(0, 84, 168, .1);
            transition: all .4s linear;
            &:hover{
              box-shadow: 0 0 6px rgba(0, 84, 168, .8);
            }
          }*/
          &:hover{
            transition: .3s;
            box-shadow: 0 0 20px rgba(255,255,255,.9)
          }
        }
      }
      .hr{
        width: 1000px;
        height: 1px;
        background-color: #e9e9e9;
        margin: 60px auto 80px;
        @media screen and (max-width: 1200px) {
          width: 800px;
        }
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
      }
      .textp{
        font-size: 18px;
        color: #202938;
        line-height: 1.5;
      }
    }
    @media screen and (max-width: 1200px) {
      .banner{
        height: 150px;
        &-text{
          font-size: 26px;
          padding: 0 10%;
        }
      }
      .hor-text{
        padding: 60px 5%;
        line-height: 1.4;
      }
      .list{
        .wrap{
          padding: 140px 5% 100px;
          &:before{
            content: '';
            width: 100%;
            height: 1px;
            background: @green;
            position: absolute;
            left: 0;
            top: 70px;
          }
        }
        .swiper-container{
          height: auto;
        }
        .hd{
          display: block;
        }
        .title{
          border: none;
          padding: 0 5%;
          text-align: center;
          width: auto;
          height: auto;
          h3{
            padding-top: 50px;
            color: #000;
            font-size: 34px;
          }
        }
        .number{
          display: none;
        }
        .detail{
          border: 1px solid @green;
          padding: 3% 4%;
          margin-top: 30px;
          display: none;
          &.show{
            display: block;
          }
        }
        .video-area{
          width: auto;
          &:after{
            width: 60%;
          }
        }
      }
      .watch{
        padding: 50px 4%;
        color: #ffffff;
        .video{
          width: auto;
        }
        h3{
          font-size: 20px !important;
          padding: 10px 0 30px !important;
        }
        .intro{
          border-top: 1px solid #fff;
          padding-top: 40px;
          font-size: 18px;
        }
        .btn-wrap{
          display: block;
          width: auto;
          margin: 0 4%;
          a{
            height: 56px;
            width: auto;
            text-align: center;
            background: #FFF;
            border-radius: 4px;
            color: #00a99e !important;
            margin: 20px 0;
            /*&:first-child:after{
              content: '';
              width: 26px;
              height: 26px;
              display: inline-block;
              margin-left: 6px;
              vertical-align: middle;
              background: url(~@img/common/down.svg) no-repeat center;
              background-size: 24px;
              margin-top: -2px;
            }*/
            &:last-child{
              color: #fff;
            }
            &:hover{
              // background: #0a9289;
              // color: #fff;
              transition: .3s;
              box-shadow: 0 0 20px rgba(255,255,255,.9)
            }
          }
        }
      }
      .video-content{
        width: 90%;
        video{
          width: 100%;
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
<style lang="less">
  .help{
    .swiper-pagination{
      left: 0;
      top: 160px;
      transform: translateX(-50%);
      .pc.ar &{
        left: auto;
        right: 0;
        transform: translateX(50%);
      }
      span{
        opacity: 1;
        background: #f5f5f5;
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 20px;
        display: block;
        color: #00a99e;
        margin-bottom: 40px;
        margin-left: auto;
        margin-right: auto;
        &.swiper-pagination-bullet-active{
          width: 68px;
          height: 68px;
          line-height: 68px;
          background: #00a99e;
          font-size: 24px;
          color: #fff;
          margin-bottom: 80px;
        }
      }
      @media screen and (max-width: 1200px) {
        top: 70px;
        transform: translateY(-50%);
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 10%;
        span{
          width: 28px;
          height: 28px;
          line-height: 28px;
          font-size: 17px;
          display: inline-block;
          color: #00a99e;
          margin: 0;
          &.swiper-pagination-bullet-active{
            width: 48px;
            height: 48px;
            line-height: 48px;
            background: #00a99e;
            font-size: 20px;
            color: #fff;
            margin: 0;
            margin-right: 20px;
          }
          &:nth-child(5).swiper-pagination-bullet-active{
            margin-left: 20px;
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
