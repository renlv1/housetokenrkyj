<template>
    <div class="origin">
      <!-- <div class="video-mask" v-show="videoMaskShOw">
        <div class="video-content">
          <i class="close" @click="closeApp"></i>
            <video ref="indexVideoApp" v-show="item.videvShow" v-for="(item, index) in bannerMp4DatasApp" :key="index" width="100%" controls="" webkit-playsinline="true" playsinline="true">
               <source :src="item.videoUrl" type="video/mp4">
            </video>
        </div>
      </div> -->
      <!--<div class="banner">
        <div class="swiper-wrap assetRecite-swiper">
          <div class="logo"><img src="../../assets/images/hot-origin/banner/logo2.svg" alt=""></div>
          <swiper class="swiper-container-horizontal" :options="swiper3Option" @change="changeVideoApp">
            <swiper-slide class="swiper-slide" v-for="(item, index) in bannerMp4DatasApp" :key="index">
                <div class="con-video-box">
                  &lt;!&ndash;"&ndash;&gt;
                  <div class="play-btn" @click="playApp(index, item)" v-show="item.btnShow"></div>
                  <div class="tit">{{item.tit}}</div>
                </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>-->
      <div class="main">
        <div class="part1-UpDate">
          <div class="wow zoomIn">
            <div class="title">{{$t('hot.text1')}}</div>
            <div class="bor-b"></div>
            <div class="info">{{$t('hot.text2')}}</div>
          </div>
          <div class="inFotitle">{{$t('hot.text3')}}</div>
          <div class="bor-b"></div>
          <div class="con-text" v-html="$t('hot.text4')"></div>
          <div class="list01">
            <li class="li-box">
              <div class="img"><img src="../../assets/images/hot-origin/li01-01.svg" alt=""></div>
              <div class="text">{{$t('hot.text11')}}</div>
            </li>
            <li class="li-box">
              <div class="img"><img src="../../assets/images/hot-origin/li01-02.svg" alt=""></div>
              <div class="text">{{$t('hot.text12')}}</div>
            </li>
            <li class="li-box">
              <div class="img"><img src="../../assets/images/hot-origin/li01-03.svg" alt=""></div>
              <div class="text">{{$t('hot.text13')}}</div>
            </li>
          </div>
        </div>
        <div class="hr"></div>
        <div class="inFotitle">{{$t('hot.text14')}}</div>
        <div class="bor-b"></div>
        <div class="con-text one-textp wow slideInUp" v-html="$t('hot.text15')"></div>
        <div class="return-on-table" ref="returnOnTable"></div>
        <div class="hr"></div>
        <div class="buy-a-house">{{$t('hot.text19')}}</div>
        <div class="bor-b"></div>
        <div class="buy-img"><img src="../../assets/images/hot-origin/bug-house.svg" alt=""></div>
        <div class="con-text house-text wow slideInUp" v-html="$t('hot.text20')"></div>
        <div class="hr"></div>
        <div class="estate ">{{$t('hot.text24')}}</div>
        <div class="bor-b"></div>
        <div class="con-text estate-text wow slideInUp" v-html="$t('hot.text25')"></div>
        <div class="estate-img"><img src="../../assets/images/hot-origin/estate.svg" alt=""></div>
        <div class="hr"></div>
        <div class="need-title ">{{$t('hot.text34')}}</div>
        <div class="bor-b"></div>
        <div class="con-text need-text wow slideInUp" v-html="$t('hot.text35')"></div>
        <div class="the-earth-itself">
          <div class="con-box wow zoomIn">
            <div class="title">{{$t('hot.text38')}}</div>
            <div class="tit">{{$t('hot.text39')}}</div>
          </div>
        </div>
        <div class="wow zoomIn">
          <div class="part2-title">{{$t('hot.text40')}}</div>
          <div class="bor-b"></div>
          <div class="info-tit">{{$t('hot.text41')}}</div>
        </div>
        <div class="hot-title ">{{$t('hot.text42')}}</div>
        <div class="bor-b"></div>
        <div class="con-text whatIsHot-text wow slideInUp">{{$t('hot.text43')}}</div>
        <div class="whatHot-imgbg"><img src="../../assets/images/hot-origin/waht-is-HOT.svg" alt=""></div>
        <div class="hot-img-explain wow zoomIn">{{$t('hot.text44')}}</div>
        <div class="hr"></div>
        <div class="operation ">{{$t('hot.text45')}}</div>
        <div class="con-text operation-text wow slideInUp">{{$t('hot.text46')}}</div>
        <div class="operation-img" ref="operationImg"></div>
        <div class="hr"></div>
        <div class="tenant-title ">{{$t('hot.text47')}}</div>
        <div class="bor-b"></div>
        <div class="con-text tenant-text wow slideInUp" v-html="$t('hot.text48')"></div>
        <div class="list01 list02">
          <li class="li-box">
            <div class="img"><img src="../../assets/images/hot-origin/gov.svg" alt=""></div>
            <div class="text">{{$t('hot.text51')}}</div>
          </li>
          <li class="li-box">
            <div class="img"><img src="../../assets/images/hot-origin/bank.svg" alt=""></div>
            <div class="text">{{$t('hot.text52')}}</div>
          </li>
          <li class="li-box">
            <div class="img"><img src="../../assets/images/hot-origin/fund.svg" alt=""></div>
            <div class="text">{{$t('hot.text53')}}</div>
          </li>
          <li class="li-box">
            <div class="img"><img src="../../assets/images/hot-origin/trust.svg" alt=""></div>
            <div class="text">{{$t('hot.text54')}}</div>
          </li>
        </div>
        <div class="hr"></div>
        <div class="assets ">{{$t('hot.text55')}}</div>
        <div class="bor-b"></div>
        <div class="con-text assets-text wow slideInUp" v-html="$t('hot.text56')"></div>
        <div class="list03">
          <div class="li-box">
            <div class="img"><img src="../../assets/images/hot-origin/list03-1.svg" alt=""></div>
            <div class="text">{{$t('hot.text59')}}</div>
          </div>
          <div class="li-box">
            <div class="img"><img src="../../assets/images/hot-origin/list03-2.svg" alt=""></div>
            <div class="text">{{$t('hot.text60')}}</div>
          </div>
        </div>
        <div class="list03-text wow zoomIn">{{$t('hot.text61')}}</div>
        <div class="hr"></div>
        <div class="tenant-title">{{$t('hot.text62')}}</div>
        <div class="bor-b"></div>
        <div class="con-text popularization-text wow slideInUp">{{$t('hot.text63')}}</div>
        <div class="popularization-img" ref="popularizationImg"></div>
        <div class="hr"></div>
        <div class="digitization ">{{$t('hot.text64')}}</div>
        <div class="bor-b"></div>
        <div class="con-text digitization-text wow slideInUp">{{$t('hot.text65')}}</div>
        <div class="digitization-img"><img src="../../assets/images/hot-origin/digitization.svg" alt=""></div>
        <div class="hr"></div>
        <div class="dividend">{{$t('hot.text66')}}</div>
        <div class="bor-b"></div>
        <div class="con-text dividend-text wow slideInUp">{{$t('hot.text67')}}</div>
        <div class="dividend-img" ref="dividendImg" :style="{backgroundImage:'url('+ $t('hot.bgUrl04') +')'}"></div>
        <div class="hr"></div>
        <div class="audit">{{$t('hot.text68')}}</div>
        <div class="bor-b"></div>
        <div class="con-text audit-text wow slideInUp" v-html="$t('hot.text69')"></div>
        <div class="audit-img" ref="auditImg"></div>
        <div class="hr"></div>
        <div class="issue">{{$t('hot.text75')}}</div>
        <div class="bor-b"></div>
        <div class="manage">{{$t('hot.text76')}}</div>
        <div class="manage-list">
            <div class="list" v-for="(item,index) in $t('hot.manageDatas')" :key="index">
              <div class="img"><img :src="item.imgUrl" alt=""></div>
              <div class="text-box">
                <div class="tit">{{item.title}}:</div>
                <div class="con-p">{{item.text}}</div>
              </div>
            </div>
        </div>
        <div class="issue-img"></div>
        <div class="hr"></div>
        <div class="globalization">{{$t('hot.text87')}}</div>
        <div class="bor-b"></div>
        <div class="globalization-box">
          <div class="con-text">
            <div class="info-box">
              <div class="tit">{{$t('hot.text88')}}</div>
              <div class="bor-b"></div>
              <div class="text">{{$t('hot.text89')}}</div>
              <div class="text-p text-padd"> <strong>{{$t('hot.text90')}}</strong> {{$t('hot.text91')}}</div>
              <div class="text-p"> <strong>{{$t('hot.text92')}}</strong> {{$t('hot.text93')}}</div>
              <div class="text-p"> <strong>{{$t('hot.text94')}}</strong> {{$t('hot.text95')}}</div>
            </div>
          </div>
          <div class="con-img" ref="map"></div>
        </div>
        <div class="advantage">
          <div class="con-box wow zoomIn">
            <div class="title">{{$t('hot.text96')}}</div>
            <div class="tit wow zoomIn">{{$t('hot.text97')}}</div>
          </div>
        </div>
        <div class="wow zoomIn">
          <div class="technology">{{$t('hot.text98')}}</div>
          <div class="bor-b"></div>
          <div class="technology-tit">{{$t('hot.text99')}}</div>
        </div>
        <!--隐藏-->
        <div style="display: none">
          <div class="boundaries ">HoT区块链技术核心，打破交易界限</div>
          <div class="bor-b"></div>
          <div class="con-text boundaries-text wow slideInUp">我们的Token将同时在自己的<span>联盟链、</span>公链的<span>以太坊、EOS网络</span>进行使用，所以在多个链条上都将按各自技术规范发行等量Token。为了保证总量反映实际线下资产相对恒定，同时保证跨链转账可以正确进行，每个链上的Token都分成锁定部分和活动部分。</div>
          <div class="boundaries-img"></div>
          <div class="hr"></div>
          <div class="blockchain ">一链一场景，构建区块链新经济</div>
          <div class="bor-b"></div>
          <div class="blockchain-img"></div>
          <div class="hr"></div>
        </div>
        <div class="digital-world ">{{$t('hot.text100')}}</div>
        <div class="bor-b"></div>
        <div class="con-text digital-world-text1 wow slideInUp" v-html="$t('hot.text101')"></div>
        <div class="digital-world-img"></div>
        <div class="digital-world-text">{{$t('hot.text108')}}</div>
        <div class="hr"></div>
        <div class="investment">{{$t('hot.text109')}}</div>
        <div class="bor-b"></div>
        <property></property>
        <div class="create-the-future"><span class="wow bounceInUp">{{$t('hot.text110')}}</span></div>
      </div>
    </div>
</template>

<script>
import property from '@/components/hot-propertys/hotPropertys'
import { WOW } from 'wowjs'
export default {
  data () {
    return {
      autoplay: false,
      videoMaskShOw: false,
      pcimg01: this.$t('hot.bgUrl01'),
      pcimg02: this.$t('hot.bgUrl02'),
      pcimg03: this.$t('hot.bgUrl03'),
      pcimg04: this.$t('hot.bgUrl04'),
      pcimg05: this.$t('hot.bgUrl05'),
      appimg01: this.$t('hot.appbgUrl01'),
      appimg02: this.$t('hot.appbgUrl02'),
      appimg03: this.$t('hot.appbgUrl03'),
      appimg04: this.$t('hot.appbgUrl04'),
      appimg05: this.$t('hot.appbgUrl05'),
      bannerMp4DatasApp: [
        {
          // videoUrl: './static/video/Hot_ppt.mp4',
          videoUrl: '',
          btnShow: true,
          videvShow: false,
          tit: 'video 1'
        },
        {
          // videoUrl: './static/video/HoT_Newest.mp4',
          videoUrl: '',
          btnShow: true,
          videvShow: false,
          tit: 'video 2'
        },
        {
          // videoUrl: './static/video/HOT-introduce.mp4',
          videoUrl: '',
          btnShow: true,
          videvShow: false,
          tit: 'video 3'
        }
      ],
      swiper3Option: {
        activenum2: 0,
        notNextTick: true,
        direction: 'horizontal',
        loop: true,
        paginationClickable: true,
        autoplay: 4000,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination: '.swiper-pagination',
        onTransitionStartonTransitionStart (swiper) {
          this.activenum2 = swiper.activeIndex
        },
        preventLinksPropagation: false, // 阻止点击事件冒泡
        onClick: (swiper, e) => {
          // console.log(e.target.className)
          // swiper插件,轮播时会自动增加虚拟dom,导致index错误,点击无效
          if (e.target.className === 'play-btn') {
            const realIndex = swiper.realIndex
            this.playApp(realIndex)
          }
        }
      }
    }
  },
  created () {
  },
  mounted () {
    new WOW({live: false}).init()
    this.bannerMp4DatasApp = [
      {
        videoUrl: `./static/video/${this.$lang}/Hot_ppt.mp4`,
        btnShow: true,
        videvShow: false,
        tit: 'video 1'
      },
      {
        videoUrl: `./static/video/${this.$lang}/HoT_Newest.mp4`,
        btnShow: true,
        videvShow: false,
        tit: 'video 2'
      },
      {
        videoUrl: `./static/video/${this.$lang}/HOT-introduce.mp4`,
        btnShow: true,
        videvShow: false,
        tit: 'video 3'
      }
    ]
    this.$nextTick(() => {
      this.imgBg()
    })
  },
  components: {
    property
  },
  methods: {
    imgBg () {
      // :style="{backgroundImage:'url('+ $t('hot.bgUrl01') +')'}"
      // :style="{backgroundImage:'url('+ $t('hot.bgUrl02') +')'}"
      // :style="{backgroundImage:'url('+ $t('hot.bgUrl03') +')'}"
      if (window.innerWidth > 768) {
        this.$refs.returnOnTable.style.backgroundImage = 'url(' + this.pcimg01 + ')'
        this.$refs.operationImg.style.backgroundImage = 'url(' + this.pcimg02 + ')'
        this.$refs.popularizationImg.style.backgroundImage = 'url(' + this.pcimg03 + ')'
        this.$refs.dividendImg.style.backgroundImage = 'url(' + this.pcimg04 + ')'
        this.$refs.auditImg.style.backgroundImage = 'url(' + this.pcimg05 + ')'
        this.$refs.map.style.backgroundImage = 'url(' + this.$t('hot.map') + ')'
      } else {
        this.$refs.returnOnTable.style.backgroundImage = 'url(' + this.appimg01 + ')'
        this.$refs.operationImg.style.backgroundImage = 'url(' + this.appimg02 + ')'
        this.$refs.popularizationImg.style.backgroundImage = 'url(' + this.appimg03 + ')'
        this.$refs.dividendImg.style.backgroundImage = 'url(' + this.appimg04 + ')'
        this.$refs.auditImg.style.backgroundImage = 'url(' + this.appimg05 + ')'
        this.$refs.map.style.backgroundImage = 'url(' + this.$t('hot.appmap') + ')'
      }
    },
    changeVideoApp () {
      this.bannerMp4DatasApp.forEach((item, index) => {
        this.$refs.indexVideoApp[index].pause()
        item.btnShow = true
        item.videvShow = false
      })
    },
    playApp (realIndex) {
      // console.log('dddd', realIndex)
      this.videoMaskShOw = true
      this.bannerMp4DatasApp.forEach((item, index) => {
        this.$refs.indexVideoApp[index].pause()
        item.videvShow = false
      })
      if (this.$refs.indexVideoApp[realIndex].paused) { // 已经暂停视频
        this.$refs.indexVideoApp[realIndex].play() // 播放调用方法
        this.bannerMp4DatasApp[realIndex].videvShow = true
      } else {
        this.$refs.indexVideoApp[realIndex].pause() // 暂停
        this.bannerMp4DatasApp[realIndex].videvShow = false
      }
    },
    closeApp () {
      this.videoMaskShOw = false
      this.bannerMp4DatasApp.forEach((item, index) => {
        this.$refs.indexVideoApp[index].pause()
        item.videvShow = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
@fontColor : #fff;
@bannerBg : #00A99E;
@fontSize : 20px;
@twoFontColor : #000;
@fontTitSize : 24px;
@width: 100%;
@padding: 0 16px;
@percent: 50%;
@orientation: 0;
@maxWidth: 1100px;
@flex: flex;
@marTb: 60px;
@auto: auto;
@center: center;
@appWidth: 650px;
@titFsize: 36px;
@inTitFsize: 26px;
.imgSize{
  width: 100%;
}
.titleStyle{
  width: 1100px;
  font-size: 30px;
  color: #000;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 1100px) {
    width: @width;
  }
}
.bor-tit{
  width: 200px;
  height: 1px;
  margin: @auto;
  background-color: #bbb;
}
.hr-bor{
  width: @width;
  height: 1px;
  background-color: #bbb;
}
.textp{
  width: 1074px;
  margin: @auto;
  font-size: 18px;
  color: #999;
  text-align: center;
  line-height: 1.6;
  @media screen and (max-width: 1074px){
    width: @width;
    padding: 0 20px;
  }
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
  span{
    color: @bannerBg;
  }
}
.origin{
  width: 100%;
  background-color: @fontColor;
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
        background: @bannerBg;
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
    height: 600px;
    box-shadow:0 0 4px 4px rgba(0, 168, 154, 0.2);
    //padding-bottom: 31.26%;
    background: url("../../assets/images/hot-origin/banner/img.jpg") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1200px){
      height: 500px;
    }
    @media screen and (max-width: 1024px){
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 768px){
      height: 240px;
    }
    .swiper-wrap{
      width: @maxWidth;
      position: relative;
      height: 100%;
      @media screen and (max-width: @maxWidth) {
        width: 90%;
      }
      .logo{
        width: 48px;
        height: 48px;
        position: absolute;
        top: 60px;
        left: 20px;
        @media screen and (max-width: 768px) {
          width: 26px;
          height: 26px;
          top: 26px;
          left: 23px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      .swiper-container{
        width: 400px;
        height: 100%;
      }
      .swiper-container-horizontal{
        .swiper-slide{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .con-video-box{
            width: 220px;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 200;
            transform: translate(-50%, -50%);
            .play-btn{
              display: none;
            }
            .tit{
              font-size: 26px;
              color: #fff;
              padding-top: 40px;
              margin-left: 14px;
              text-align: center;
              text-shadow: 1px 1px rgba(0, 0, 0, 0.2), 2px 2px rgba(0, 0, 0, 0.3);
              @media screen and (max-width: 768px){
                font-size: 24px;
                padding-top: 30px;
              }
            }
          }
        }
        .swiper-slide-active{
          .con-video-box{
            .play-btn{
              display: block;
              width: 70px;
              height: 70px;
              background: url("../../assets/images/hot-origin/play-btn.svg") no-repeat center;
              background-size: 100% 100%;
              margin: auto;
              cursor: pointer;
              animation: point-up-down .8s linear infinite alternate;
              transition: all .4s;
              @keyframes point-up-down{
                0% {
                  transform: scale(.8);
                }
                100% {
                  transform: scale(1);
                }
              }
              &:hover{
                background: url("../../assets/images/introduce/play-btn.png") no-repeat center;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
      @media screen and (max-width: 1024px) {
        width: @width;
        height: 100%;
        position: relative;
        .swiper-container-horizontal{
          width: 100%;
          height: 100%;
          .swiper-slide{
            width: 100%;
            height: 100%;
            .con-video-box{
              .play-btn{
                display: block;
                width: 54px;
                height: 54px;
                margin: auto;
                cursor: pointer;
                animation: point-up-down .8s linear infinite alternate;
                @keyframes point-up-down{
                  0% {
                    transform: scale(.8);
                  }
                  100% {
                    transform: scale(1);
                  }
                }
                img{
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
    /deep/ .swiper-pagination-bullets{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 38px;
      @media screen and (max-width: 1024px) {
        bottom: 4px;
      }
      .swiper-pagination-bullet{
        width: 14px;
        height: 14px;
        margin: 0 10px;
        position: relative;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: inset 0 0 0px 2px #fff;
        opacity: 1;
        &:before, &:after {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: block;
          border-radius: 50%;
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          box-sizing: border-box;
          border: 2px solid transparent;
        }
        &:hover:before {
          width: 100%;
          height: 100%;
          border-color: @bannerBg;
          transition: border-top-color .25s linear, border-right-color .25s linear, border-bottom-color .25s linear, border-left-color .25s linear;
          transition-delay: 0s, .25s, .5s, .75s;
          @media screen and (max-width: 1024px){
            display: none;
          }
        }
        &:hover:after {
          width: 100%;
          height: 100%;
          border-top: 2px solid @bannerBg;
          -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
          transition: -webkit-transform .75s linear;
          transition: transform .75s linear;
          transition-delay: 0s;
          @media screen and (max-width: 1024px){
            display: none;
          }
        }
      }
      .swiper-pagination-bullet-active{
        background-color: @bannerBg;
        &:hover{
          color: #fff;
          background-color: #fff;
          @media screen and (max-width: 1024px){
            display: none;
          }
        }
      }
    }
    /deep/ .swiper-button-next{
      background-image: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: rotate(45deg) translateY(-50%);
      content: '';
      display: block;
      width: 30px;
      height: 30px;
      border-top: 3px solid #fff;
      border-right: 3px solid #fff;
      border-top-right-radius: 3px;
      box-shadow: inset -15px 0 8px -15px #fff, inset 0 15px 8px -15px #fff;
      transition: .4s;
      @media screen and (max-width: 1024px) {
        display: none;
      }
      &:hover{
        border-top: 3px solid @bannerBg;
        border-right: 3px solid @bannerBg;
        border-top-right-radius: 3px;
        box-shadow: inset -15px 0 8px -15px @bannerBg, inset 0 15px 8px -15px@bannerBg;
      }
    }
    /deep/ .swiper-button-prev{
      background-image: none;
      position: absolute;
      top: 50%;
      width: 30px;
      height: 30px;
      left: 0;
      box-shadow: inset 0 15px 8px -15px #fff, inset 15px 0 8px -15px #fff;
      transform: rotate(-45deg) translateY(-50%);
      content: '';
      display: block;
      border-top: 3px solid #fff;
      border-left: 3px solid #fff;
      border-top-left-radius: 3px;
      transition: .4s;
      @media screen and (max-width: 1024px) {
        display: none;
      }
      &:hover{
        border-top: 3px solid @bannerBg;
        border-left: 3px solid @bannerBg;
        border-top-left-radius: 3px;
        box-shadow: inset 0 15px 8px -15px @bannerBg, inset 15px 0 8px -15px @bannerBg;
      }
    }
  }
  .main{
    width: @width;
    margin: @auto;
    overflow: hidden;
    .part1-UpDate{
      width: @maxWidth;
      margin: @auto;
      @media screen and (max-width: @maxWidth){
        width: @width;
        padding: 0 20px;
      }
      .title{
        font-size: @titFsize;
        text-align: center;
        color: @bannerBg;
        padding: 70px 0 38px;
        @media screen and (max-width: 768px){
          font-size: 26px;
          padding-top: 50px;
        }
      }
      .bor-b{
        .bor-tit;
      }
      .info{
        font-size: 20px;
        text-align: center;
        padding: 28px 0 20px;
        color: #808080;
      }
      .inFotitle{
        .titleStyle;
        padding-bottom: 36px;
        @media screen and (max-width: 1024px) {
          padding: 0 0 36px;
        }
        @media screen and (max-width: 768px) {
          //font-size: 26px;
        }
      }
      .con-text{
        .textp;
        padding: 42px 0 60px;
        @media screen and (max-width: 1100px) {
          padding: 42px 20px 60px;
        }
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }
      .list01{
        display: flex;
        // align-items: center;
        // justify-content: center;
        margin: 0 10%;
        @media screen and (max-width: 1024px){
          display: block;
          padding-bottom: 60px;
          margin: 0;
        }
        .li-box{
          width: 33.333%;
          padding: 0 20px;
          font-size: @fontSize;
          @media screen and (max-width: 1024px){
            margin: @auto;
            width: auto;
            padding: 0;
          }
          // &:nth-of-type(2){
          //   margin: 0 160px;
          //   @media screen and (max-width: 1024px){
          //     margin: @auto;
          //   }
          // }
          .img{
            width: 124px;
            margin: auto;
            animation: point-up-down 1s linear infinite alternate;
            @keyframes point-up-down{
              0% {
                -webkit-transform: translateY(3px);
                transform: translateY(3px);
              }
              100% {
                -webkit-transform: translateY(-3px);
                transform: translateY(-3px);
              }
            }
            @media screen and (max-width: 1024px){
              width: 20%;
              margin: auto;
            }
          }
          .text{
            font-size: @fontSize;
            color: #000;
            text-align: center;
            padding: 30px 0 138px;
            @media screen and (max-width: 1024px){
              padding: 10px 0 20px;
              font-size: 16px;
            }
          }
        }
      }
      .hr{
        .hr-bor;
      }
    }
    .hr{
      .hr-bor;
    }
    .inFotitle{
      .titleStyle;
      padding: 106px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 106px 20px 36px;
      }
    }
    .bor-b{
      .bor-tit;
    }
    .con-text{
      .textp;
    }
    .one-textp{
      padding: 40px 0 60px;
      @media screen and (max-width: 1024px){
        padding: 40px 20px 60px;
      }
    }
    .house-text{
      padding: 0 20px 178px 20px;
      @media screen and (max-width: 1024px){
        padding: 0 20px 100px;
      }
    }
    .return-on-table{
      width: 800px;
      height: 400px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin: auto;
      margin-bottom: 130px;
      @media screen and (max-width: 1024px) {
        width: 700px;
        height: auto;
        padding-bottom: 50%;
      }
      @media screen and (max-width: 768px) {
        width: 750px;
        height: 870px;
        margin: auto;
        //background: url("../../assets/images/hot-origin/hot-app/HOT_02.png") no-repeat center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        padding-bottom: 0;
      }
      @media screen and (max-width: 750px) {
        width: @width;
        height: auto;
        padding-bottom: 116%;
        margin: auto;
        margin-bottom: 60px;
      }
    }
    .buy-a-house{
      .titleStyle;
      padding: 150px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .buy-img{
      width: 406px;
      height: 487px;
      margin: 58px auto 58px;
      @media screen and (max-width: 768px) {
        width: 60%;
        padding: 0 20px;
        height: auto;
        img{
          width: @width;
        }
      }
    }
    .estate{
      .titleStyle;
      padding: 114px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .estate-img{
      width: 300px;
      height: 223px;
      margin: 142px auto 100px;
      animation: point-up-down 1s linear infinite alternate;
      @keyframes point-up-down{
        0% {
          -webkit-transform: translateY(3px);
          transform: translateY(3px);
        }
        100% {
          -webkit-transform: translateY(-3px);
          transform: translateY(-3px);
        }
      }
      img{
        width: 100%;
        height: 100%;
      }
      @media screen and (max-width: 768px){
        width: 50%;
        height: 120px;
        padding: 0 20px;
        margin: 0 auto 50px;
        img{
          width: @width;
        }
      }
    }
    .estate-text{
      padding-top: 42px;
      font-size: 17px;
      @media screen and (max-width: 768px){
        padding: 42px 20px 50px;
      }
    }
    .need-title{
      .titleStyle;
      padding: 126px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .need-text{
      padding: 66px 0 218px;
      @media screen and (max-width: 1024px){
        padding: 66px 20px 100px;
      }
    }
    .the-earth-itself{
      width: @width;
      height: 258px;
      background-color: @bannerBg;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      color: #fff;
      font-weight: bold;
      @media screen and (max-width: 1024px){
        font-size: 19px;
        /*margin: auto;*/
        padding: 0 12px;
        text-align: center;
      }
      .tit{
        font-size: @fontSize;
        text-align: center;
        padding-top: 50px;
        font-weight: normal;
        @media screen and (max-width: 1024px){
          font-size: 16px;
        }
      }
    }
    .part2-title{
      font-size: 36px;
      color: @bannerBg;
      text-align: center;
      padding: 208px 0 42px;
      @media screen and (max-width: 1024px){
        padding: 100px 0 20px;
      }
    }
    .info-tit{
      font-size: @fontSize;
      color: #808080;
      text-align: center;
      padding: 28px 0 170px;
      @media screen and (max-width: 1024px){
        padding: 28px 20px 70px;
      }
    }
    .hot-title{
      .titleStyle;
      padding-bottom: 36px;
      @media screen and (max-width: 1024px){
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    .whatIsHot-text{
      padding: 52px 0 86px;
      @media screen and (max-width: 1024px){
        padding: 50px 20px 66px;
      }
    }
    .whatHot-imgbg{
      width: 443px;
      height: 268px;
      margin: 86px auto 56px;
      @media screen and (max-width: 768px){
        width: 80%;
        height: auto;
        padding: 0 20px;
        margin-top: 0;
        img{
          width: @width;
        }
      }
      @media screen and (max-width: 443px){
        width: 70%;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .hot-img-explain{
      width: 1100px;
      margin: auto;
      font-size: @fontSize;
      text-align: center;
      color: @bannerBg;
      padding-bottom: 150px;
      @media screen and (max-width: 1100px){
        width: @width;
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 768px){
        font-size: 18px;
      }
    }
    .operation{
      .titleStyle;
      padding: 150px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .operation-text{
      width: 800px;
      @media screen and (max-width: 800px){
        width: @width;
        padding: 0 20px;
      }
    }
    .operation-img{
      width: 752px;
      height: 368px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      margin: 78px auto 120px;
      @media screen and (max-width: 768px){
        width: 90%;
        height: auto;
        padding-bottom: 50%;
      }
    }
    .tenant-title{
      .titleStyle;
      padding: 147px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .tenant-text{
      padding: 50px 0 118px;
      @media screen and (max-width: 1024px){
        padding: 50px 20px 60px;
      }
    }
    .list02{
      width: @maxWidth;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      @media screen and (max-width: 1024px){
        width: @width;
        display: block;
        padding-bottom: 60px;
      }
      .li-box{
        flex: 1;
        @media screen and (max-width: 1024px){
          flex: none;
          width: 193px;
          margin: 0 auto 14px;
        }
        .img{
          width: 193px;
          height: 199px;
          margin: auto;
          animation: point-up-down 1s linear infinite alternate;
          @keyframes point-up-down{
            0% {
              -webkit-transform: translateY(3px);
              transform: translateY(3px);
            }
            100% {
              -webkit-transform: translateY(-3px);
              transform: translateY(-3px);
            }
          }
          @media screen and (max-width: 1024px){
            width: 80px;
            height: 80px;
          }
        }
        .text{
          font-size: @fontSize;
          text-align: center;
          padding: 25px 0 252px;
          @media screen and (max-width: 1024px){
            padding: 50px 0;
          }
          @media screen and (max-width: 768px){
            font-size: 16px;
            padding: 10px 0;
          }
        }
      }
    }
    .assets{
      .titleStyle;
      padding: 210px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .assets-text{
      padding: 34px 0 110px;
      @media screen and (max-width: 1024px){
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 768px){
        padding: 34px 20px 60px;
      }
    }
    .list03{
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1024px){
        display: block;
        height: auto;
      }
      .li-box{
        width: 206px;
        height: 400px;
        margin: 0 60px;
        @media screen and (max-width: 1024px){
          margin: 0 auto;
          height: auto;
        }
        .img{
          width: 206px;
          height: 206px;
          @media screen and (max-width: 768px){
            width: 84px;
            height: 84px;
            margin: auto;
          }
        }
        .text{
          padding: 34px 0 82px;
          text-align: center;
          font-size: 24px;
          @media screen and (max-width: 768px){
            font-size: 16px;
            padding: 20px 0 20px;
          }
        }
      }
    }
    .list03-text{
      font-size: 24px;
      padding: 82px 0 92px;
      color: @bannerBg;
      text-align: center;
      @media screen and (max-width: 1024px){
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 768px){
        padding: 26px 20px 60px;
      }
    }
    .popularization{
      .titleStyle;
      padding: 128px 0 36px;
    }
    .popularization-text{
      padding: 70px 0 96px;
      @media screen and (max-width: 1024px){
        padding: 70px 20px 50px;
      }
    }
    .popularization-img{
      width: 1040px;
      height: 424px;
      margin: 0 auto 140px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      @media screen and (max-width: 1040px){
        width: 94%;
        height: 270px;
        margin-bottom: 50px;
        // height: auto;
        // padding-bottom: 50%;
      }
      @media screen and (max-width: 768px){
        height: 170px;
      }
    }
    .digitization{
      .titleStyle;
      padding: 192px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .digitization-text{
      padding: 62px 0 66px;
      font-size: 17px;
      @media screen and (max-width: 1024px){
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    .digitization-img{
      width: 318px;
      height: 292px;
      margin: 0 @auto 122px;
      @media screen and (max-width: 768px){
        margin: 0 @auto 100px;
      }
      @media screen and (max-width: 504px){
        width: 60%;
        height: auto;
        padding: 0 20px;
        img{
          width: @width;
        }
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .dividend{
      .titleStyle;
      padding: 154px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .dividend-text{
      padding: 58px 0 112px;
      @media screen and (max-width: 1024px){
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 768px){
        padding-bottom: 60px;
      }
    }
    .dividend-img{
      width: 1040px;
      height: 184px;
      margin: 0 auto 168px;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      font-size: 18px;
      color: #456e68;
      @media screen and (max-width: 1040px){
        width: 96%;
      }
      @media screen and (max-width: 768px){
        width: 90%;
        height: 260px;
        background-size: 100% 100%;
        margin-bottom: 60px;
        div{
          display: none;
        }
      }
    }
    .audit{
      .titleStyle;
      padding: 86px 0 34px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .audit-text{
      padding: 58px 0 176px;
      @media screen and (max-width: 1024px){
        padding: 58px 20px 100px;
      }
    }
    .audit-img{
      width: 1100px;
      height: 320px;
      margin: 0 @auto 180px;
      // background: url("../../assets/images/hot-origin/audit.svg") no-repeat center;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      font-size: 16px;
      color: #17161f;
      @media screen and (max-width: 1100px){
        width: @width;
      }
      @media screen and (max-width: 1024px){
        padding: 0 20px;
      }
      @media screen and (max-width: 768px){
        width: @width;
        background-size: 100% 100%;
        height: 600px;
        margin-bottom: 100px;
        div{
          display: none;
        }
      }
    }
    .issue{
      .titleStyle;
      padding: 142px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .manage{
      font-size: @fontSize;
      color: #010101;
      padding: 34px 0 56px;
      text-align: center;
      @media screen and (max-width: 1024px){
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 375px){
        font-size: 19px;
      }
    }
    .manage-list{
      width: @maxWidth;
      margin: auto;
      padding: 0 0 60px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      @media screen and (max-width: @maxWidth){
        width: 100%;
      }
      @media screen and (max-width: 1024px){
        display: block;
      }
      .list{
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media screen and (max-width: 1024px){
          display: block;
          flex: none;
          width: @width;
          margin: auto;
        }
        .img{
          width: 20px;
          height: 20px;
          margin-top: 4px;
          @media screen and (max-width: 1024px){
            margin: auto;
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
          }
          img{
            width: @width;
            @media screen and (max-width: 1024px){
              width: 70%;
            }
          }
        }
        .text-box{
          font-size: 14px;
          line-height: 1.5;
          width: 190px;
          @media screen and (max-width: 1024px){
            text-align: center;
            width: auto;
            margin: auto;
            margin-bottom: 30px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .tit{
              padding-right: 10px;
            }
          }
        }
      }
    }
    .issue-img{
      width: 1110px;
      height: 399px;
      margin: 0 auto 180px;
      background: url("../../assets/images/hot-origin/IMG.jpg") no-repeat center fixed;
      background-size: 100% 100%;
      @media screen and (max-width: 1110px){
        width: 90%;
        margin:  0 auto 80px;
        background-attachment: inherit;
        background-size: contain;
        height: auto;
        padding-bottom: 35.8%;
      }
    }
    .globalization{
      .titleStyle;
      padding: 122px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .globalization-box{
      width: 1097px;
      height: auto;
      margin: 80px @auto 134px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1200px){
        height: auto;
        display: block;
        padding: 0 20px;
      }
      @media screen and (max-width: 1097px){
        width: 100%;
        margin-bottom: 60px;
      }
      .con-text{
        width: 418px;
        height: @width;
        padding-right: 12px;
        text-align: left;
        display: flex;
        align-items: flex-start;
        font-size: @fontSize;
        color: #000;
        @media screen and (max-width: 1200px){
          width: 430px;
          margin: auto;
          display: block;
          padding-right: 0;
        }
        @media screen and (max-width: 768px){
          width: @width;
        }
        .info-box{
          .text-padd{
            padding-top: 32px;
          }
          .tit{
            font-size: 24px;
            @media screen and (max-width: 1200px){
              text-align: center;
            }
          }
          .bor-b{
            width: 330px;
            height: 1px;
            margin: 40px 0 40px;
            background-color: #00a99e;
            @media screen and (max-width: 1200px){
              margin: 40px auto;
            }
          }
          .text{
            width: 379px;
            @media screen and (max-width: 1200px){
              text-align: center;
              width: auto;
            }
            @media screen and (max-width: 768px){
              text-align: left;
            }
          }
          .text-p{
            line-height: 1.6;
            strong{
              color: #00a99e;
            }
          }
        }
      }
      .con-img{
        width: 665px;
        height:443px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        @media screen and (max-width: 1200px){
          margin: 50px auto 0;
        }
        @media screen and (max-width: 768px){
          width: @width;
          height: 190px;
        }
        img{
          width: @width;
        }
      }
    }
    .advantage{
      width: @width;
      height: 260px;
      background-color: #33bab1;
      text-align: center;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1100px){
        height: auto;
        padding: 100px 0;
      }
      .con-box{
        width: @maxWidth;
        margin: auto;
        @media screen and (max-width: 1100px){
          width: @width;
          padding:  0 20px;
        }
        .title{
          font-size: @titFsize;
          padding-bottom: 34px;
          @media screen and (max-width: 768px){
            font-size: 30px;
          }
        }
        .tit{
          font-size: @fontSize;
          line-height: 1.6;
          @media screen and (max-width: 768px){
            font-size: 18px;
          }
        }
      }
    }
    .technology{
      .titleStyle;
      padding: 78px 0 36px;
      color: @bannerBg;
      font-size: 36px;
    }
    .technology-tit{
      font-size: @fontSize;
      color: #808080;
      text-align: center;
      padding: 28px 0 138px;
      @media screen and (max-width: 768px){
        width: @width;
        padding: 28px 20px 100px;
      }
    }
    .boundaries{
      .titleStyle;
      padding-bottom: 36px;
      @media screen and (max-width: 768px){
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    .boundaries-text{
      padding: 42px 0 150px;
      @media screen and (max-width: 768px){
        padding: 42px 20px 100px;
      }
    }
    .boundaries-img{
      width: 1094px;
      height: 229px;
      margin: 0 @auto 224px;
      background: url("../../assets/images/hot-origin/boundaries.svg")no-repeat center;
      position: relative;
      @media screen and (max-width: 1094px){
        width: 100%;
        div{
          display: none;
        }
      }
      @media screen and (max-width: 768px){
        width: 100%;
        height: 500px;
        background: url("../../assets/images/hot-origin/svg/boundaries-bg.svg")no-repeat center;
        background-size: 100% 100%;
        margin-bottom: 100px;
        div{
          display: none;
        }
      }
    }
    .blockchain{
      .titleStyle;
      padding: 94px 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .blockchain-img{
      width: @maxWidth;
      height: 560px;
      background: url("../../assets/images/hot-origin/blockchain.svg")no-repeat center;
      background-size: 100% 100%;
      margin: 20px auto 30px;
      @media screen and (max-width: @maxWidth){
        width: 100%;
      }
      @media screen and (max-width: 768px){
        width: 100%;
        background: url("../../assets/images/hot-origin/blockchain-bg.svg")no-repeat center;
        height: 560px;
        margin: 60px auto 80px;
        background-size: 100% 100%;
        div{
          display: none;
        }
      }
    }
    .digital-world{
      .titleStyle;
      padding: 0 0 36px;
      @media screen and (max-width: 1024px){
        padding: 100px 20px 50px;
      }
    }
    .digital-world-text1{
      font-size: 17px;
      padding: 60px 20px 84px;
    }
    .digital-world-img{
      width: 682px;
      height: 348px;
      margin: @auto;
      background: url("../../assets/images/hot-origin/digital-world.svg")no-repeat center;
      @media screen and (max-width: 682px){
        width: 70%;
        height: auto;
        padding-bottom: 51.02%;
        background-size: contain;
      }
    }
    .digital-world-text{
      width: 700px;
      margin: auto;
      font-size: @fontSize;
      color: #000;
      padding: 46px 0 112px;
      text-align: center;
      @media screen and (max-width: 1024px){
        width: 100%;
        padding: 46px 20px 112px;
      }
      @media screen and (max-width: 768px){
        font-size: 18px;
      }
    }
    .property-banner{
      display: none;
    }
    .investment{
      .titleStyle;
      padding: 87px 0 34px;
      font-size: 26px;
    }
    .create-the-future{
      width: @width;
      text-align: center;
      height: 260px;
      background-color: @bannerBg;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: @fontSize;
      color: #fff;
      span{
        display: inline-block;
        width: 1100px;
        @media screen and (max-width: 1100px) {
          width: 100%;
          padding: 0 20px;
        }
      }
    }
  }
}
</style>
