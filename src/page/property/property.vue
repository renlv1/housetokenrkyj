<template>
  <div class="property">
    <!-- <div class="banner">
      <div class="wrap">
      </div>
    </div> -->
    <div class="propertyCase">
      <div class="wrap">
        <!-- <h3><span>{{$t('property.text60')}}</span></h3> -->
        <!-- <swiper :options="swiperOption"> -->
          <div v-for="(item, index) in propertyList" :key="index" :id="'anchor'+index" class="items">
            <div class="odd house">
              <div class="wraper">
                <div class="case">
                  <div class="left">
                    <h5>{{item.title}}</h5>
                    <h6>{{item.moreText}}</h6>
                    <ul>
                      <li>
                        <i>{{$t("property.text8")}}：</i><span>{{item.msg1}}</span>
                      </li>
                      <li>
                        <i>{{$t("property.text9")}}：</i><span>{{item.msg2}}</span>
                      </li>
                      <li>
                        <i>{{$t("property.text10")}}：</i><span>{{item.msg3}}</span>
                      </li>
                      <li>
                        <i>{{$t("property.text11")}}：</i><span>{{item.msg4}}</span>
                      </li>
                      <li>
                        <i>{{$t("property.text12")}}：</i><span>{{item.msg5}}</span>
                      </li>
                      <!-- <li>
                        <i>{{$t("property.text13")}}：</i><span>{{item.msg6}}</span>
                      </li>
                      <li>
                        <i>{{$t("property.text14")}}：</i><span>{{item.msg7}}</span>
                      </li> -->
                    </ul>
                  </div>
                  <div class="right">
                    <div class="imgBox">
                      <img @load="initOffset" :src="require(`../../assets/images/about/short${index + 1}.png`)" alt="">
                    </div>
                    <div class="address">{{item.address}}</div>
                    <div class="resident">
                      <h4><span>{{$t("property.text15")}}</span></h4>
                      <ul>
                        <li v-for="(item, index) in item.inhabitant" :key="index">
                          <img :src="item.imgUrl" alt="">
                        </li>
                      </ul>
                    </div>
                    <div class="btn">
                      <!--<a :href="item.report" :class="{'disable': item.report === 'javascript:;' }" target="_blank" v-if="item.report" >
                        <span>{{$t('property.text6')}}</span>
                      </a>-->
                      <a :href="item.handbook" :class="{'disable': item.handbook === 'javascript:;' }" target="_blank" v-if="item.handbook" >
                        <span>{{$t('property.text7')}}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- </swiper> -->
        <div class="swiper-pagination">
          <span :class="{active: index == active}"  @click="jumpAnchor('#anchor'+index,index)" v-for="(item, index) in imgList" :key="index">
            <img @load="initOffset" :src="item" alt="">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
  data () {
    return {
      tab: -1,
      imgList: [
        require('@img/about/b1.png'),
        require('@img/about/b2.png'),
        require('@img/about/b3.png'),
        require('@img/about/b4.png'),
        require('@img/about/b5.png'),
        require('@img/about/b6.png')
      ],
      swiperOption: {
        autoplay: 4000,
        simulateTouch: false, // 可以选中文字
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: true,
        paginationClickable: true,
        autoHeight: true,
        direction: 'vertical',
        paginationBulletRender: (swiper, index, className) => {
          return '<span class="' + className + '"><img src="' + this.imgList[index] + '"></span>'
        },
        onInit: (swiper) => {
          let index = this.$route.query.index
          if (index) {
            swiper.slideTo(index, 0, false)
          }
        }
      },
      elOffset: [],
      active: 0,
      handle: null,
      deviation: 80
    }
  },
  created () {},
  computed: {
    propertyList: function () {
      return [
        {
          imgUrl: require('../../assets/images/about/p1.png'),
          report: 'javascript:;',
          handbook: 'javascript:;',
          dashedFlag: false,
          title: 'TOKENHOUSE',
          text: this.$t('property.text16'),
          address: this.$t('property.text17'),
          moreText: this.$t('property.text18'),
          msg1: this.$t('property.text19'),
          msg2: this.$t('property.text20'),
          msg3: this.$t('property.text21'),
          msg4: this.$t('property.text22'),
          msg5: this.$t('property.text23'),
          msg6: '13,551,400',
          msg7: this.$t('property.text25'),
          inhabitant: [ // 现有住户
            {
              imgUrl: require('../../assets/images/about/inhabitant1.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant2.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant3.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant4.png')
            }
          ]
        },
        {
          imgUrl: require('../../assets/images/about/p2.png'),
          report: `./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/report2.pdf`,
          handbook: `./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/handbook2.pdf`,
          dashedFlag: false,
          title: '1 KING’S ARMS YARD',
          text: this.$t('property.text26'),
          address: this.$t('property.text27'),
          moreText: this.$t('property.text28'),
          msg1: this.$t('property.text29'),
          msg2: this.$t('property.text30'),
          msg3: this.$t('property.text31'),
          msg4: this.$t('property.text32'),
          msg5: this.$t('property.text33'),
          msg6: '29,228,160',
          msg7: this.$t('property.text34'),
          inhabitant: [ // 现有住户
            {
              imgUrl: require('../../assets/images/about/inhabitant5.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant6.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant7.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant8.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant9.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant10.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant11.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant12.png')
            }
          ]
        },
        {
          imgUrl: require('../../assets/images/about/p3.png'),
          report: `./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/report3.pdf`,
          handbook: `./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/handbook3.pdf`,
          dashedFlag: false,
          title: '2 COPTHALL AVENUE',
          text: this.$t('property.text35'),
          address: this.$t('property.text36'),
          moreText: this.$t('property.text37'),
          msg1: this.$t('property.text38'),
          msg2: this.$t('property.text39'),
          msg3: this.$t('property.text40'),
          msg4: this.$t('property.text41'),
          msg5: this.$t('property.text42'),
          msg6: '16,787,200',
          msg7: this.$t('property.text43'),
          inhabitant: [ // 现有住户
            {
              imgUrl: require('../../assets/images/about/inhabitant13.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant14.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant15.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant16.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant17.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant18.png')
            }
          ]
        },
        {
          imgUrl: require('../../assets/images/about/p4.png'),
          report: 'javascript:;',
          handbook: `./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/handbook4.pdf`,
          dashedFlag: false,
          title: '11 WESTFERRY CIRCUS',
          text: this.$t('property.text44'),
          address: 'Canary Wharf',
          moreText: this.$t('property.text45'),
          msg1: this.$t('property.text46'),
          msg2: this.$t('property.text47'),
          msg3: this.$t('property.text48'),
          msg4: this.$t('property.text49'),
          msg5: this.$t('property.text50'),
          msg6: '60,416,000',
          msg7: this.$t('property.text51'),
          inhabitant: [ // 现有住户
            {
              imgUrl: require('../../assets/images/about/inhabitant19.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant20.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant21.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant22.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant23.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant24.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant25.png')
            }
          ]
        },
        {
          imgUrl: require('../../assets/images/about/p5.png'),
          report: 'javascript:;',
          handbook: `./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/handbook5.pdf`,
          dashedFlag: false,
          title: 'GASPE HOUSE – JERSEY',
          text: this.$t('property.text52'),
          address: 'JERSEY, JE2 3QT',
          moreText: this.$t('property.text53'),
          msg1: this.$t('property.text54'),
          msg2: this.$t('property.text55'),
          msg3: this.$t('property.text56'),
          msg4: this.$t('property.text57'),
          msg5: this.$t('property.text58'),
          msg6: '40,400,000',
          msg7: this.$t('property.text59'),
          inhabitant: [ // 现有住户
            {
              imgUrl: require('../../assets/images/about/inhabitant26.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant27.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant28.png')
            },
            {
              imgUrl: require('../../assets/images/about/inhabitant29.png')
            }
          ]
        },
        ...this.$t('property.build')
      ]
    }
  },
  mounted () {
    this.initOffset()
    this.handle = this.throttle(this.scrollHandle)
    window.addEventListener('scroll', this.handle)
    let index = this.$route.query.index
    let item = '#' + this.$route.query.anchor
    if (item && index) {
      this.jumpAnchor(item, index)
    }
  },
  methods: {
    initOffset () {
      let items = document.querySelectorAll('.items')
      let parentOffset = document.querySelector('.property').offsetTop
      let arr = []
      Array.from(items).forEach((item, index) => {
        let t = item.offsetTop + parentOffset
        arr.push({
          t,
          b: t + item.offsetHeight
        })
      })
      this.elOffset = arr
    },
    jumpAnchor (anchor, index) {
      this.active = index
      document.querySelector(anchor).scrollIntoView(true)
      // 骚操作，点击时移除监听滚动，400ms后再去监听，高亮问题
      window.removeEventListener('scroll', this.handle)
      setTimeout(() => {
        window.addEventListener('scroll', this.handle)
      },400)
      //scrollTo不兼容IE
      /*window.scrollTo({
        left: 0,
        top: this.elOffset[index].t,
        behavior: 'smooth'
      })*/
    },
    scrollHandle () {
      // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 滚动条高度
      let scrollTop =  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; // 滚动条高度
      this.elOffset.forEach((item, index) => {
        if (scrollTop >= item.t && scrollTop < item.b) {
          this.active = index
        }
      })
    },
    throttle (fn, interval) {
      var _self = fn // 保存需要被延迟执行的函数引用
      var firstTime = true // 是否初次调用
      var timer // 定时器
      return function () {
        var args = arguments
        var _me = this
        if (firstTime) { // 如果是第一次调用不需要延迟执行
          _self.call(_me, args)
        }
        if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成
          return false
        }
        timer = setTimeout(function () { // 延迟一段时间执行
          clearTimeout(timer) // 清除定时器 避免下一次return false
          timer = null
          _self.call(_me, args)
        }, interval || 500)
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handle)
  }
}
</script>
<style lang="less" type="text/less" scoped>
  @green:#00a99d;
  .property{
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1024px){
      //margin-top: 90px;
    }
  }
  .banner{
    height: 500px;
    background: url(~@img/about/banner_prop.png) no-repeat center top;
    display: flex;
    align-items: center;
    background-size: cover;
    @media screen and (max-width: 1200px) {
      height: 150px;
    }
  }
  .wraper{
    width: 1000px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 0 20px;
    }
  }
  .propertyCase {
    .wrap{
      // margin-top:90px;
      width: 1200px;
      padding: 0 0 120px 100px;
      position: relative;
      .items{
        &.active{
          padding-top: 90px;
        }
      }
      &:before{
        content: '';
        width: 1px;
        height: 100%;
        background: @green;
        position: absolute;
        left: 50px;
        top: 0;
      }
      @media screen and (max-width: 1024px) {
        width: auto;
        padding: 0 0 100px;
        &:before{
          content: '';
          width: 100%;
          height: 1px;
          background: @green;
          position: fixed;
          left: 0;
          top: 140px;
          display: none;
        }
      }
      .pc.ar &{
        padding: 0 100px 120px 0;
        &:before{
          left: auto;
          right: 0;
        }
      }
    }
    // .swiper-container{
    //   height: 900px;
    //   .cn &, .en &{
    //     height: 480px;
    //   }
    // }
    h3 {
      color: #000;
      text-align: center;
      font-size: 28px;
      padding: 26px 0 70px;
      &:after{
        content: '';
        display: block;
        width: 150px;
        height: 1px;
        background: #bbb;
        margin: 30px auto 20px;
      }
      @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 0 20px;
        font-size: 24px;
        margin-bottom: 136px;
      }
      span {
        @media screen and (max-width: 1024px) {
          display: block;
        }
      }
    }
    .case {
      display: flex;
      justify-content: space-between;
      // padding-bottom: 90px;
      padding-top: 50px;
     /* &.active{
        padding-top: 90px !important;
      }*/
      @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
        display: block;
        padding-top: 110px;
      }
      .btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 1024px) {
          flex-wrap: wrap;
        }
        a {
          display: flex;
          width: 250px;
          height: 48px;
          border: 1px solid #00a99d;
          text-align: center;
          justify-content: center;
          align-items: center;
          color: #00a99d;
          &:active{
            opacity: 0.4;
          }
          &.disable{
            border: 1px solid #bababa;
            color: #999999 !important;
            cursor: not-allowed;
            background-color: transparent !important;
            &:active{
              opacity: 1;
            }
          }
          @media screen and (max-width: 1024px) {
            width: 100%;
            margin-bottom: 20px;
            &:nth-child(2) {
              background-color: #00a99d;
              color: #fff;
            }
          }
        }
      }
      .resident {
        h4 {
          height: 1px;
          width: 100%;
          background-color: #00a99d;
          position: relative;
          span {
            font-size: 18px;
            color: #00a99d;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
            background-color: #fff;
            display: block;
            padding-right: 35px;
          }
        }
        ul {
          margin-top: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
          @media screen and (max-width: 1024px) {
          }
          li{
            margin-right: 6%;
            width: 19%;
            border-radius: 50%;
            //margin-bottom: 20px;
            &:nth-child(4n) {
              margin-right: 0;
            }
            @media screen and (max-width: 768px) {
              width: 40%;
              &:nth-child(2n) {
                margin-right: 0;
              }
            }
            img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
      .left {
        width: 496px;
        padding-top: 40px;
        border-top: 2px solid #00a99e;
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
        h5 {
          font-size: 40px;
          font-weight: bold;
          color: #9a8b7a;
          margin-bottom: 40px;
          @media screen and (max-width: 1024px) {
            font-size: 25px;
            margin-bottom: 24px;
          }
        }
        h6 {
          font-size: 13px;
          color: #000;
          line-height: 2;
          // font-weight: bold;
          margin-bottom: 50px;
          @media screen and (max-width: 1024px) {
            margin-bottom: 0;
          }
        }
        ul {
          li {
            font-size: 13px;
            margin: 15px 0;
            // font-weight: bold;
            line-height: 1.8;
            &:last-child{
              margin-bottom: 0 !important;
            }
            i {
              color: #00a99d;
            }
            span {
              color: #000;
            }
          }
        }
      }
      .right {
        width: 480px;
        @media screen and (max-width: 1024px) {
          width: 100%;
          padding-top: 20px;
        }
        .imgBox {
          overflow: hidden;
          img{
            width: 100%;
            height: auto;
            transition: .8s;
            &:hover{
              transform: scale(1.1);
              transition: .8s;
            }
          }
        }
        .address {
          font-size: 36px;
          font-weight: normal;
          color: #9a8b7a;
          margin: 25px 0 40px;
          @media screen and (max-width: 1024px) {
            font-size: 20px;
          }
        }
      }
    }
    .odd {
      background-color: #fff;
    }
    .even {
      background-color: #E1E9EC;
      .case {
        .right {
          .resident {
            h4 {
              margin-bottom: 60px;
              span {
                background-color: #E1E9EC;
              }
            }
          }
        }
      }
    }
  }
</style>
<style lang="less">
@green:#00a99d;
.property{
  .swiper-pagination{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -550px;
    padding-top: 100px;
    transform: translate(-50%,-50%);
    .pc.ar &{
      margin-left: 600px;
    }
    span{
      opacity: 1;
      width: 60px;
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      display: block;
      color: #00a99e;
      background-color: #5a8483;
      // background-color: rgba(1,48,46, 1);
      margin-bottom: 60px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 100%;
      overflow: hidden;
      cursor: pointer;
      //filter: grayscale(80%);
      transform: scale(1);
      transition: transform .1s linear;
      &.active{
        //filter: grayscale(0);
        /*width: 88px;
        height: 88px;
        line-height: 88px;*/
        transform: scale(1.2);
        background-color: #01988e;
        font-size: 26px;
        color: #fff;
        box-shadow: 0 0 4px rgba(0, 168, 154, .4)
      }
    }
    img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
    @media screen and (max-height: 800px) and (min-width: 1200px) {
      span{
        margin-bottom: 20px;
      }
    }
    @media screen and (max-width: 1200px) {
      top: 108px;
      transform: translateY(-50%);
      display: flex;
      width: 100%;
      margin-left: 0;
      left: 0;
      justify-content: space-between;
      align-items: center;
      padding: 10px 5%;
      background: #fff;
      &:before{
        content: '';
        width: 100%;
        height: 1px;
        background: @green;
        position: absolute;
        left: 0;
        top: 50%;
      }
      span{
        width: 46px;
        height: 46px;
        line-height: 46px;
        font-size: 17px;
        display: inline-block;
        color: #00a99e;
        margin: 0;
        &.active{
          width: 56px;
          height: 56px;
          margin: 0;
          // margin-right: 20px;
        }
      }
    }
  }
}
</style>
