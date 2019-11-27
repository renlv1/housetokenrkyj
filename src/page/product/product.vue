<template>
  <div class="product-wrap">
     <div class="title">{{$t('product.text1')}}</div>
    <div class="banner"></div>
    <div class="chat">
      <div class="title">{{$t('product.text2')}}</div>
      <div class="hr"></div>
      <div class="tit">{{$t('product.text3')}}</div>
      <div class="diagram"></div>
      <div class="list">
        <div class="li">
          <span class="img"><img src="../../assets/images/product/part2-2.svg" alt=""></span>
          <span class="text">{{$t('product.text4')}}</span>
        </div>
        <div class="li">
          <span class="img"><img src="../../assets/images/product/part2-3.svg" alt=""></span>
          <span class="text">{{$t('product.text5')}}</span>
        </div>
        <div class="li">
          <span class="img"><img src="../../assets/images/product/part2-4.svg" alt=""></span>
          <span class="text">{{$t('product.text6')}}</span>
        </div>
        <div class="li">
          <span class="img"><img src="../../assets/images/product/part2-5.svg" alt=""></span>
          <span class="text">{{$t('product.text7')}}</span>
        </div>
      </div>
    </div>
    <div class="carousel">
      <div class="title">{{$t('product.text8')}}</div>
      <div class="hr"></div>
      <div class="swiper">
        <swiper class="swiper-container-horizontal" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="(item,index) in $t('product.swiperLiDatas')" :key="index">
            <div class="li">
              <div class="info-box">
                <div class="img"><img :src="item.urlImg" alt=""></div>
                <div class="text">{{item.text}}</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="merit">
      <div class="title">{{$t('product.text9')}}</div>
      <div class="list-box">
        <div class="li" v-for="(item,index) in $t('product.meritDatas')" :key="index">
          <div class="img"><img :src="item.urlImg" alt=""></div>
          <div class="text-p">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="apply">
      <div class="title">{{$t('product.text10')}}</div>
      <div class="hr"></div>
      <div class="tit">{{$t('product.text11')}}</div>
      <div class="apply-img"></div>
    </div>
    <div class="capacity">
      <div class="title">{{$t('product.text12')}}</div>
      <div class="hr"></div>
      <div class="text">{{$t('product.text13')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperLiDatas: [
        {
          urlImg: require('../../assets/images/product/part2/1.svg'),
          text: '无群聊人数限制'
        },
        {
          urlImg: require('../../assets/images/product/part2/2.svg'),
          text: '文本翻译'
        },
        {
          urlImg: require('../../assets/images/product/part2/3.svg'),
          text: '随时随地 自由通话'
        },
        {
          urlImg: require('../../assets/images/product/part2/4.svg'),
          text: '实时定位'
        },
        {
          urlImg: require('../../assets/images/product/part2/5.svg'),
          text: '视频通话'
        },
        {
          urlImg: require('../../assets/images/product/part2/6.svg'),
          text: '离线信息'
        },
        {
          urlImg: require('../../assets/images/product/part2/7.svg'),
          text: '屏幕共享'
        },
        {
          urlImg: require('../../assets/images/product/part2/8.svg'),
          text: '全面搜索'
        },
        {
          urlImg: require('../../assets/images/product/part2/9.svg'),
          text: '文件共享'
        },
        {
          urlImg: require('../../assets/images/product/part2/10.svg'),
          text: '聊天历史记录归档'
        },
        {
          urlImg: require('../../assets/images/product/part2/11.svg'),
          text: '快速响应'
        },
        {
          urlImg: require('../../assets/images/product/part2/12.svg'),
          text: '同步和存储'
        },
        {
          urlImg: require('../../assets/images/product/part2/13.svg'),
          text: '双重验证'
        },
        {
          urlImg: require('../../assets/images/product/part2/14.svg'),
          text: '轻量级应用'
        },
        {
          urlImg: require('../../assets/images/product/part2/15.svg'),
          text: '端到端加密'
        }
      ],
      meritDatas: [
        {
          urlImg: require('../../assets/images/product/1.svg'),
          text: '我们的创新功能可以让你和其它人的沟通安全快捷'
        },
        {
          urlImg: require('../../assets/images/product/2.svg'),
          text: '存储HOT 每月赚取红利'
        },
        {
          urlImg: require('../../assets/images/product/3.svg'),
          text: '安全快捷支付'
        },
        {
          urlImg: require('../../assets/images/product/4.svg'),
          text: '融合人工智能科技'
        },
        {
          urlImg: require('../../assets/images/product/5.svg'),
          text: '钱包里可安全存储数字货币以及法定货币'
        },
        {
          urlImg: require('../../assets/images/product/6.svg'),
          text: '全球视频音频通话'
        }
      ],
      swiperOption: {
        activenum2: 0,
        notNextTick: true,
        direction: 'horizontal',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: '',
        centeredSlides: false,
        paginationClickable: true,
        preventClicksPropagation: false,
        autoplay: false,
        initialSlide: 0,
        clickable: true,
        observer: true,
        observeParents: true,
        /* loop: true,
        pagination: '.swiper-pagination', */
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        onTransitionStart (swiper) {
          this.activenum2 = swiper.activeIndex
        }
      }
    }
  },
  components: {},
  computed: {},
  created () {
    this.$nextTick(() => {
      if (window.innerWidth <= 1200 && window.innerWidth > 1024) {
        this.swiperOption.slidesPerView = 2
      } else if (window.innerWidth <= 1024) {
        this.swiperOption.slidesPerView = 1
      } else {
        this.swiperOption.slidesPerView = 4
      }
    })
  },
  mounted () {
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @bgCOlor : #fff;
  @titColor : #00b5a2;
  @chatBg: #f4f6f7;
  @hr: #d9d9d9;
  @titFsize: 40px;
  @fontSize : 20px;
  @textColor : #000;
  @width: 100%;
  @auto: 0 auto;
  @center: center;
  @padding: 0 20px;
  .hr-border{
    width: 200px;
    height: 1px;
    background-color: @hr;
    margin: @auto;
  }
  .product-wrap{
    width: @width;
    background-color: @bgCOlor;
    .title{
      text-align: @center;
      font-size: @titFsize;
      color: @titColor;
      padding: 120px 0 90px;
      @media screen and (max-width: 1200px){
        padding: 120px 20px 90px;
        font-size: 29px;
      }
      @media screen and (max-width: 768px){
        line-height: 1.2;
      }
    }
    .banner{
      width: 1277px;
      height: 632px;
      margin: auto;
      background: url("../../assets/images/product/banner.png") no-repeat center;
      background-size: 100% 100%;
      @media screen and (max-width: 1277px){
        width: 90%;
        height: auto;
        padding-bottom: 50%;
        margin: auto;
      }
    }
    .chat{
      width: @width;
      background-color: @chatBg;
      text-align: @center;
      margin-top: 118px;
      @media screen and (max-width: 1200px){
        padding: @padding;
      }
      .title{
        font-size: @titFsize;
        color: @titColor;
        padding: 130px 0 50px;
        @media screen and (max-width: 1024px){
          font-size: 29px;
          padding: 60px 0 50px;
        }
        @media screen and (max-width: 768px){
          line-height: 1.2;
        }
      }
      .hr{
        .hr-border;
      }
      .tit{
        width: 836px;
        line-height: 1.5;
        color: @textColor;
        margin: @auto;
        font-size: @fontSize;
        padding: 50px 0 90px;
        @media screen and (max-width: 1024px){
          width: @width;
          font-size: 16px;
        }
      }
      .diagram{
        width: 642px;
        height: 498px;
        margin: @auto;
        background: url("../../assets/images/product/part2-1.png") no-repeat center;
        background-size: 100% 100%;
        @media screen and (max-width: 768px){
          width: 90%;
          height: auto;
          padding-bottom: 50%;
        }
      }
      .list{
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 70px 0;
        @media screen and (max-width: 768px){
          flex-flow: wrap;
          padding: 50px 0 60px;
        }
        .li{
          font-size: @fontSize;
          color: @textColor;
          padding: 0 50px;
          display: flex;
          flex-flow: wrap;
          align-items: center;
          justify-content: center;
          @media screen and (max-width: 1200px){
            padding: 0 18px;
          }
          @media screen and (max-width: 768px){
            width: @width;
            align-items: flex-start;
            justify-content: flex-start;
            height: 44px;
            font-size: 16px;
            padding: 0;
            padding-bottom: 5px;
          }
          .img{
            width: 38px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width: 18px;
              height: 22px;
            }
          }
          .text{
            flex: 1;
            line-height: 1.2;
            text-align: left;
          }
        }
      }
    }
    .carousel{
      width: @width;
      text-align: @center;
      padding-bottom: 140px;
      @media screen and (max-width: 1024px){
        padding-bottom: 100px;
      }
      .title{
        font-size: @titFsize;
        color: @titColor ;
        padding: 140px 0 40px;
        @media screen and (max-width: 1024px){
          font-size: 29px;
          padding: 70px 20px;
        }
        @media screen and (max-width: 768px){
          line-height: 1.2;
        }
      }
      .hr{
        .hr-border;
        margin-top: 80px;
        @media screen and (max-width: 1024px){
          margin-top: 0;
        }
      }
      .swiper{
        width: 1120px;
        height: auto;
        margin: @auto;
        margin-top: 80px;
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: center;
        position: relative;
        @media screen and (max-width: 1200px){
          width: 800px;
        }
        @media screen and (max-width: 1024px){
          width: 82%;
          height: 180px;
          position: relative;
          margin-top: 40px;
          &:after{
            display: block;
            content: '';
            width: @width;
            height: 1px;
            background-color: @hr;
            position: absolute;
            z-index: 1;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
          }
        }
        .swiper-container{
          width: 1066px !important;
          height: @width !important;
          @media screen and (max-width: 1066px){
            width: 74%;
          }
          .swiper-wrapper{
            height: auto !important;
            display: flex;
            flex-flow: wrap;
            align-items: center;
            justify-content: space-between;
            .swiper-slide{
              height: @width !important;
            }
            .swiper-slide-active{
              left: 8px;
              margin-right: 6px;
              @media screen and (max-width: 1200px){
                left: 0;
              }
            }
          }
        }
        .swiper-pagination{
          bottom: -50px;
          font-size: 12px;
          color: #999;
          @media screen and (min-width: 1025px){
            display: none;
          }
          @media screen and (max-width: 1024px){
            bottom: -30px;
          }
        }
        .li{
          width: 254px;
          height: 260px;
          margin-right: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          @media screen and (max-width: 1200px){
            width: 180px;
            height: 224px;
            margin: @auto;
          }
          @media screen and (max-width: 768px){
            width: @width;
          }
          .info-box{
            width: @width;
            padding-top: 10px;
            transition: all .4s cubic-bezier(0,.65,1,.46) !important;
            &:hover{
              box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
              @media screen and (max-width: 1024px){
                display: none;
              }
            }
            .img{
              width: 80px;
              height: 80px;
              margin: @auto;
              background-color: #00a99e;
              img{
                width: @width;
                height: @width;
              }
            }
            .text{
              min-height: 110px;
              line-height: 1.2;
              text-align: center;
              color: @textColor;
              font-size: 18px;
              padding: 20px 5px 0;
            }
          }
        }
        .swiper-button-prev {
           position: absolute;
           left: -10px !important;
           z-index: 96;
           background: url("../../assets/images/product/part2/left.svg") no-repeat center;
           background-size: 100% 100%;
          @media screen and (max-width: 1200px){
            left: -30px !important;
          }
          @media screen and (max-width: 1024px){
            width: 20px;
            height: 30px;
          }
         }
        .swiper-button-next {
          position: absolute;
          right: -10px !important;
          z-index: 96;
          background: url("../../assets/images/product/part2/right.svg") no-repeat center;
          background-size: 100% 100%;
          @media screen and (max-width: 1200px){
            right: -30px !important;
          }
          @media screen and (max-width: 1024px){
            width: 20px;
            height: 30px;
          }
        }
      }
    }
    .merit{
      width: @width;
      background-color: @chatBg;
      @media screen and (max-width: 1024px){
        padding: @padding;
      }
      .title{
        .title;
        @media screen and (max-width: 1024px){
          font-size: 29px;
          padding-left: 0;
          padding-right: 0;
          padding-top: 60px;
        }
      }
      .list-box{
        width: 1098px;
        display: flex;
        align-items: center;
        flex-flow: wrap;
        justify-content: center;
        margin: @auto;
        @media screen and (max-width: 1200px) {
          width: @width;
        }
        .li{
          width: 366px;
          .img{
            width: 126px;
            height: 126px;
            margin: @auto;
            @media screen and (max-width: 768px) {
              width: 80px;
              height: 80px;
            }
            img{
              width: @width;
              height: @width;
            }
          }
          .text-p{
            width: 272px;
            margin: auto;
            font-size: @fontSize;
            text-align: center;
            color: @textColor;
            height: 162px;
            @media screen and (max-width: 1024px){
              font-size: 16px;
            }
            @media screen and (max-width: 768px){
              height: auto;
              padding-bottom: 40px;
            }
          }
        }
      }
    }
    .apply{
      width: @width;
      padding-bottom: 122px;
      @media screen and (max-width: 1024px){
        padding: @padding;
        padding-bottom: 25%;
      }
      .title{
        padding: 140px 0 50px;
        @media screen and (max-width: 1024px){
          padding: 60px 0 50px;
        }
        @media screen and (max-width: 768px){
          line-height: 1.2;
        }
      }
      .hr{
        .hr-border;
      }
      .tit{
        width: 1096px;
        margin: @auto;
        font-size: @fontSize;
        color: @textColor;
        line-height: 1.5;
        padding: 50px 0 100px;
        text-align: center;
        @media screen and (max-width: 1200px){
          width: 80%;
        }
        @media screen and (max-width: 1024px){
          width: @width;
          font-size: 16px;
        }
      }
      .apply-img{
        width: 625px;
        height: 584px;
        margin: @auto;
        background: url("../../assets/images/product/img.svg") no-repeat center;
        background-size: 100% 100%;
        @media screen and (max-width: 1200px){
          width: 400px;
          height: auto;
          padding-bottom: 50%;
        }
        @media screen and (max-width: 768px){
          width: 100%;
          height: auto;
          padding-bottom: 50%;
        }
      }
    }
    .capacity{
      width: @width;
      height: 301px;
      background: url("../../assets/images/product/BG.png") no-repeat center;
      background-size: cover;
      text-align: center;
      @media screen and (max-width: 1554px){
        height: auto;
        padding-bottom: 80px;
      }
      @media screen and (max-width: 1024px){
        padding: @padding;
        height: auto;
        padding-bottom: 50px;
      }
      .title{
        color: #fff;
        padding: 100px 0 30px;
        font-size: 34px;
        @media screen and (max-width: 1024px){
          font-size: 24px;
          padding-top: 50px;
        }
        @media screen and (max-width: 768px){
          line-height: 1.2;
        }
      }
      .hr{
        .hr-border;
        background-color: #fff;
      }
      .text{
        text-align: center;
        font-size: @fontSize;
        color: #fff;
        padding-top: 30px;
        @media screen and (max-width: 1024px){
          font-size: 16px;
        }
      }
    }
  }
</style>
