<template>
    <div class="video">
      <div class="video-mask" v-show="videoMaskShow">
        <div class="video-content">
          <i class="close" @click="close"></i>
          <video ref="indexVideo" width="100%" controls="" webkit-playsinline="true" playsinline="true">
            <source src="" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="banner">
        <div class="title wow slideInDown">{{$t('video.text1')}}</div>
      </div>
      <div class="main">
        <div class="tit">{{$t('video.text2')}}</div>
        <div class="list-box">
          <div class="li wow zoomIn" v-for="(item,index) in $t('video.videoDatas')" :key="index">
            <!-- :style="{backgroundImage:'url('+ $t('hot.bgUrl04') +')'}"-->
            <div class="video-bg" :style="{backgroundImage:'url('+ item.bgUrl +')'}" @click="play(index)">
              <div class="play-btn"></div>
            </div>
            <div class="describe">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  data () {
    return {
      videoMaskShow: false,
      videoDatas: this.$t('video.videoDatas'),
      videoList: ['', '', '', '', '', '', '']
    }
  },
  mounted () {
    new WOW({live: false}).init()
    this.videoList = ['what-is-HoT', 'HOT-advantage', 'Hot_ppt', 'HoT_Newest', 'HOT-introduce', 'baozhupo1', 'baozhupo2']
  },
  methods: {
    play (index) {
      this.videoMaskShow = true
      let url = this.videoList[index]
      // console.log('mp4', `./static/video/cn/${url}.mp4`)
      this.$refs.indexVideo.src = `./static/video/${this.$lang === 'cn' ? 'cn' : 'en'}/${url}.mp4`
      this.$refs.indexVideo.play()
    },
    close () {
      this.videoMaskShow = false
      this.$refs.indexVideo.pause()
    }
  }
}
</script>

<style lang="less" scoped>
  @width: 100%;
  .video{
    width: @width;
    background-color: #fff;
    .video-mask{
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 500;
      background-color: rgba(0,0,0, .6);
      .video-content{
        width: 800px;
        height: auto;
        /*background: none;*/
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media screen and (max-width: 1024px){
          width: @width;
        }
      }
      .close{
        position: absolute;
        right: 0;
        top: -18px;
        width: 20px;
        height: 20px;
        z-index: 600;
        cursor: pointer;
        transform: rotate(-45deg);
        transform-origin: 30% 20%;
        &:before,&:after{
          content: '';
          width: 2px;
          height: 20px;
          position: absolute;
          left: 9px;
          top: 0;
          background: #00a99e;
          @media screen and (max-width: 1024px){
            left: 9px;
            top: -18px;
          }
        }
        &:after{
          transform: rotate(90deg)
        }
        &:hover{
          &:before,&:after{
            background: #dc2f2f;
          }
        }
      }
    }
    .banner{
      width: @width;
      height: 400px;
      background: url("../../assets/images/hot-origin/banner/banner.jpg") no-repeat center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1200px){
        height: 360px;
      }
      .title{
        width: 1100px;
        font-size: 38px;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.2), 2px 2px rgba(0, 0, 0, 0.3);
        @media screen and (max-width: 1100px){
          width: @width;
          padding: 0 20px;
        }
        .pc.en &{
          width: 800px;
          margin: 0 auto;
        }
        @media screen and (max-width: 1200px){
          width: @width;
          padding: 0 20px;
        }
        @media screen and (max-width: 1024px){
          font-size: 30px;
        }
      }
    }
    .main{
      width: 1100px;
      margin: 0 auto;
      @media screen and (max-width: 1100px){
        width: @width;
        padding: 0 20px;
      }
      .tit{
        font-size: 28px;
        color: #808080;
        padding: 120px 0 36px;
        text-align: left;
        @media screen and (max-width: 1024px){
          text-align: center;
        }
      }
      .list-box{
        width: @width;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @media screen and (max-width: 768px){
          display: block;
        }
        .li{
          width: 348px;
          height: auto;
          margin-bottom: 20px;
          padding-bottom: 40px;
          background-color: #fff;
          color: #1a1a1a;
          position: relative;
          transition: color .6s;
          @media screen and (max-width: 768px){
            margin: 0 auto 20px;
            padding-bottom: 24px;
          }
          @media screen and (max-width: 375px){
            width: 280px;
          }
          cursor: pointer;
          &:hover{
            .video-bg{
              box-shadow: 0 0 0 1px #00a99d;
              &::after{
                background-color: rgba(0,0,0, .59);
              }
            }
          }
          &:hover{
            color: #00a99e;
            .video-bg{
              .play-btn{
                background: url("../../assets/images/introduce/play-btn.png") no-repeat center;
                background-size: 100% 100%;
              }
            }
            .describe{
              bottom: 60px;
              @media screen and (max-width: 768px){
                bottom: 46px;
              }
            }
          }
          .video-bg{
            border: 1px solid #00ab9f;
            width: @width;
            height: 238px;
            background-color: transparent;
            box-shadow: 0 0 0 1px transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: relative;
            transition: box-shadow .6s;
            &::after{
              display: block;
              content: '';
              width: @width;
              height: @width;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
              background-color: transparent;
              transition: background-color .4s;
            }
            @media screen and (max-width: 375px){
              height: 54vw;
            }
            .play-btn{
              width: 60px;
              height: 60px;
              position: absolute;
              left: 50%;
              top: 50%;
              z-index: 10;
              transform: translate(-50%,-50%);
              border-radius: 100%;
              background: url("../../assets/images/video/play-btn.svg") no-repeat center;
              transition: background .4s;
              background-size: 100% 100%;
              @media screen and (max-width: 768px){
                width: 46px;
                height: 46px;
              }
            }
          }
          .describe{
            width: @width;
            // position: absolute;
            z-index: 10;
            // left: 50%;
            bottom: 2px;
            // transform: translateX(-50%);
            font-size: 16px;
            text-align: center;
            transition: bottom .8s;
            padding: 10px;
            @media screen and (max-width: 768px){
              font-size: 16px;
              bottom: -15px;
            }
          }
          &:nth-child(6){
            .describe{
              bottom: -14px;
            }
          }
        }
      }
    }
  }
</style>
