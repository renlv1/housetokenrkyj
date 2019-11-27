<template>
  <div class="header-wrap" :class="{small: smallNav}">
    <div class="header wrap">
      <router-link tag="div" class="logo-box" to="/home">
        <img v-if="$lang === 'cn'" src="~@img/common/logo.svg" alt="">
        <img v-else src="~@img/common/logo_en.svg" alt="">
      </router-link>
      <div class="head-nav">
        <li v-for="(item,index) in $t('common.nav')" :key="index" v-if="item.path !== '/newHot' && item.path !== '/product' && item.path !== '/news'">
          <a v-if="item.outside" target="_blank" :href="item.path" class="text"><span class="info-text">{{item.name}}</span></a>
          <router-link v-else excat :to="item.path" class="text"><span class="info-text">{{item.name}}</span></router-link>
        </li>
        <li>
          <div class="text">
            <a target="_blank" href="https://www.hotwallet.tech/login">{{$t('home.text33')}} /</a>
            <a target="_blank" href="https://www.hotwallet.tech/signup">{{$t('home.text32')}}</a>
          </div>
        </li>
        <li class="language" :class="{'active': langShow}" @click.stop="languageChange">
          <!--<div class="flag-img">
            <img :src="require(`../assets/images/common/${activeLangImg}.svg`)" alt="">
          </div>-->
          <div class="country-name">{{activeLang}}</div>
          <div class="select" :class="{'small': smallNav, 'dropDownMenuActive': langShow}">
            <ol class="box-list" >
              <li class="item-li" @click.stop="langFn(item)" v-for="(item,index) in langDatas" :key="index">
                <!--<div class="lang-img">
                  <img :src="require(`../assets/images/common/${item.lang}.svg`)" alt="">
                </div>-->
                <div class="lang-text">{{item.text}}</div>
              </li>
            </ol>
          </div>
        </li>
      </div>
    </div>
    <!-- 移动端-->
    <div class="mobile-header">
      <router-link tag="div" class="logo-box" to="/home">
        <img v-if="$lang === 'cn'" src="~@img/common/logo.svg" alt="">
        <img v-else src="~@img/common/logo_en.svg" alt="">
      </router-link>
      <div class="right" @click.stop="isShowMenu = !isShowMenu">
        <div class="right-menu" :class="{'close-menu': isShowMenu}"></div>
      </div>
    </div>
    <!-- 菜单-->
    <div class="show-menu" :class="{'menu-active': isShowMenu}">
      <ul class="uls">
        <li @click.stop="isShowMenu = false" v-for="(item,index) in $t('common.nav')" :key="index"  v-if="item.path !== '/newHot' && item.path !== '/product' && item.path !== '/news'" :class="{'has-child': item.children}">
          <a v-if="item.outside" :href="item.path">{{item.name}}</a>
          <div v-else>
            <router-link v-if="!item.children" excat :to="item.path" tag="div" class="text">{{item.name}}</router-link>
          </div>
          <dl class="child" v-if="item.children">
            <dd v-for="child in item.children" :key="child.name">
              <router-link :to="child.path">{{child.name}}</router-link>
            </dd>
          </dl>
        </li>
        <li>
          <div class="text">
            <a target="_blank" href="https://www.hotwallet.tech/login">{{$t('home.text33')}}</a>
            <a target="_blank" href="https://www.hotwallet.tech/signup">{{$t('home.text32')}}</a>
          </div>
        </li>
        <li class="language" :class="{'active': langShow}" @click.stop="languageChange">
          <!--<div class="flag-img">
            <img :src="require(`../assets/images/common/${activeLangImg}.svg`)" alt="">
          </div>-->
          <div class="country-name">{{activeLang}}</div>
          <div class="select" :class="{'small': smallNav, 'dropDownMenuActive': langShow}">
            <ol class="box-list" >
              <li class="item-li" @click.stop="langFn(item)" v-for="(item,index) in langDatas" :key="index">
                <!--<div class="lang-img">
                  <img :src="require(`../assets/images/common/${item.lang}.svg`)" alt="">
                </div>-->
                <div class="lang-text">{{item.text}}</div>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
    <div class="return-top" v-show="smallNav" @click="returnTop"></div>
  </div>
</template>

<script>
// import { i18n } from '../i18n/config'
export default {
  data () {
    return {
      isShowMenu: false,
      smallNav: false,
      langShow: false,
      activeLang: 'EN',
      // activeLangImg: 'cn',
      langDatas: [
        {
          lang: 'en',
          text: 'EN'
        },
        {
          lang: 'cn',
          text: '中文'
        },
        {
          lang: 'th',
          text: 'ไทย'
        },
        {
          lang: 'de',
          text: 'Deutsch'
        },
        {
          lang: 'fr',
          text: 'Français'
        },
        {
          lang: 'es',
          text: 'Español'
        },
        {
          lang: 'ar',
          text: 'العربية'
        },
        {
          lang: 'ja',
          text: '日本語'
        },
        {
          lang: 'ko',
          text: '한국어'
        },
        {
          lang: 'ru',
          text: 'русский'
        }
      ]
    }
  },
  created () {
    this.defaultLang()
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    defaultLang () {
      let lang = window.localStorage.getItem('lang')
      for (let i in this.langDatas) {
        if (lang === this.langDatas[i].lang) {
          window.localStorage.setItem('lang', lang)
          this.activeLang = this.langDatas[i].text
          // this.activeLangImg = this.langDatas[i].lang
        }
      }
    },
    languageChange () {
      this.langShow = !this.langShow
    },
    langFn (item) {
      this.activeLang = String(item.text)
      window.localStorage.setItem('lang', item.lang)
      window.location.reload()
      // this.activeLangImg = String(item.lang)
    },
    getScollTop () {
      return document.documentElement.scrollTop || document.body.scrollTop
    },
    scroll () {
      if (this.getScollTop() < 80) {
        this.smallNav = false
      } else {
        this.smallNav = true
      }
    },
    returnTop () {
      let currentScroll = this.getScollTop()
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.returnTop)
        window.scrollTo(0, currentScroll - (currentScroll / 4))
      }
    },
    switchLang (lang) {
      window.localStorage.setItem('lang', lang)
      window.location.reload()
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="less" scoped>
  @green: #00a99e;
  .header-wrap{
    font-size: 18px;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    z-index: 98;
    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 120px;
      transition: .3s;
      @media screen and (max-width: 1200px) {
        display: none;
      }
      .logo-box{
        //margin-left: 20px;
        width: 252px;
        cursor: pointer;
        transition: .3s;
        img{
          width: 100%;
          vertical-align: top;
        }
      }
      .head-nav{
        height: 100%;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        li{
          line-height: 120px;
          transition: .3s;
          cursor: pointer;
          position: relative;
          text-align: center;
          color: #969696;
          width: auto;
          margin-left: 50px;
          font-size: 16px;
          /*&:nth-child(3){
            pointer-events:none;
            a{
              cursor: not-allowed;
            }
          }*/
          &:nth-child(4){
            pointer-events:none;
            a{
              cursor: not-allowed;
            }
          }
          &:nth-child(5){
            display: none;
          }
          &:nth-child(6){
            margin-left: 16px !important;
          }
          .cn &{
            width: 118px;
            margin-left: 0px;
            &:nth-child(-n+5){
              width: 80px;
            }
            /*&:nth-child(4){
              width: 126px;
              margin-left: 20px;
              margin-right: 16px;
              font-size: 15px;
            }*/
          }
          .en &{
            width: 100px;
            margin-left: 0;
            &:nth-child(6){
              width: 145px;
            }
            /*&:nth-child(2){
              width: 124px;
            }
            &:nth-child(4){
              width: 160px;
              margin-left: 20px;
              .text{
                line-height: 30px;
              }
            }*/
          }
          .es &{
            width: 104px;
            margin-left: 0px;
            &:nth-child(6){
              width: 204px;
              .text{
                line-height: 28px;
              }
            }
          }
          .fr &{
            width: 104px;
            font-size: 15px;
            margin-left: 0;
            &:nth-child(6){
              width: 192px;
              .text{
                line-height: 28px;
              }
            }
          }
          .ja &{
            width: 104px;
            margin-left: 0;
            &:nth-child(6){
              width: 160px;
            }
          }
          .ru &{
            width: 104px;
            font-size: 15px;
            margin-left: 0;
            &:nth-child(6){
              width: 167px;
              .text{
                line-height: 28px;
              }
            }
          }
          .ko &{
            width: 104px;
            margin-left: 0;
            &:nth-child(6){
              line-height: 28px;
              width: 160px;
            }
          }
          .ar &{
            width: 104px;
            margin-left: 0;
            &:nth-child(6){
              width: 160px;
              margin-left: 20px;
            }
            .flag-img{
              width: 22px;
              height: 14px;
              box-shadow: 0 0 1px rgba(150, 150, 150, .2);
              margin-right: 14px;
            }
          }
          .th &{
            width: 106px;
            margin-left: 0;
            &:nth-child(6){
              width: 183px;
              margin-left: 20px;
            }
          }
          .de &{
            width: 104px;
            margin-left: 0;
            &:nth-child(6){
              width: 204px;
              .text{
                line-height: 28px;
              }
            }
          }
          .text{
            display: block;
            //border-bottom: 2px solid transparent;
            position: relative;
            width: 100%;
            height: 100%;
            &:after{
              content: '';
              display: block;
              position: absolute;
              width: 0;
              height: 100%;
              background-color: transparent;
              bottom: 0;
              right: 0;
              left: 0;
              transition: width .4s ease-in-out;
            }
            &.is-active{
              color: #000;
              background: transparent;
              position: relative;
              width: 100%;
              height: 100%;
              transition: width .2s ease-in-out;
              &:after{
                border-bottom: 1px solid rgba(0, 168, 157, 1);
                box-shadow: 0 2px 4px -4px rgba(0, 168, 157, .8);
                width: 100%;
              }
            }
            .info-text{
              display: inline-flex;
              line-height: 1.2;
            }
          }
          &.has-child .text:after{
            content: '';
            display: inline-block;
            border: 5px solid transparent;
            border-top-color: #969696;
            vertical-align: middle;
            margin-left: 10px;
          }
          &:hover{
            color: #000;
            .child{
              opacity: 1;
              top: 90px;
              visibility: visible;
              transition: .3s .1s;
            }
            .text:after{
              border-top-color: @green !important;
            }
          }
          &:nth-child(6){
            .text{
              line-height: 28px;
              border: 1px solid @green;
              border-radius: 20px;
              padding: 0 15px;
              color: @green;
              transition: .5s;
              &:hover{
                background: @green;
                color: #fff;
              }
            }
          }
          /*&:last-child {
            margin-left: 20px;
          }*/
        }
        .child{
          position: absolute;
          opacity: 0;
          width: 140px;
          right: 0;
          top: 80px;
          line-height: 30px;
          visibility: hidden;
          background: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,.2);
          padding: 20px 0;
          a{
            display: block;
            padding: 15px 5px;
            color: #969696;
            &:hover{
              color: #000000;
            }
          }
          &.hide{
            visibility: hidden !important;
            transition: none !important;
          }
        }
        .language{
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0 4px;
          &.active{
            &:after{
              content: '';
              display: block;
              position: absolute;
              right: 0;
              top: 50%;
              margin-top: -4px;
              transform: rotate(180deg);
            }
          }
          .flag-img{
            display: inline-block;
            width: 22px;
            height: 14px;
            box-shadow: 0 0 1px rgba(150, 150, 150, .2);
            img{
              display: block;
              width: 100%;
              height: 100%;
              line-height: 14px;
              /*box-shadow: 0 0 2px rgba(150, 150, 150, .2);*/
            }
          }
          .country-name{
            flex: 1;
            /*text-align: right;
            padding-right: 20px;*/
          }
          &:after{
            content: '';
            display: block;
            width: 14px;
            height: 8px;
            background: url("../assets/images/common/down-01.png") no-repeat center;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            transition: all .3s linear;
          }
          .select{
            position: absolute;
            width: auto;
            padding: 0 4px;
            height: 0;
            top: 120px;
            left: 0;
            right: 0;
            opacity: 0;
            background-color: #fff;
            box-shadow: 0 0 4px rgba(150, 150, 150, .4);
            transition: all .3s linear;
            overflow: hidden;
            z-index: 90;
            &.small{
              background: rgba(255,255,255,.96);
              top: 60px;
            }
            &.dropDownMenuActive{
              opacity: 1;
              height: 402px;
            }
            .box-list{
              .item-li{
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                cursor: pointer !important;
                pointer-events: auto;
                margin-left: 0;
                &:nth-child(6){
                  margin-left: 0 !important;
                }
                &:last-child{
                  .lang-img{
                    img{
                      box-shadow: 0 0 0 0px rgba(150, 150, 150, .2);
                      border-top: 1px solid rgba(150, 150, 150, .2);
                    }
                  }
                }
                .lang-img{
                  width: 22px;
                  height: 14px;
                  img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    line-height: 14px;
                    box-shadow: 0 0 0 1px rgba(150, 150, 150, .2);
                  }
                }
                .lang-text{
                  flex: 1;
                  line-height: 16px;
                  font-size: 14px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
    .nav-mask{
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 999;
    }
    &.small{
      background: rgba(255,255,255,.95);
      .header{
        height: 60px;
      }
      .logo-box{
        width: 150px;
      }
      .head-nav{
        li{
          line-height: 60px;
          &:hover{
            .child{
              top: 60px;
            }
          }
        }
      }
    }
    .mobile-header{
      height: 70px;
      position: fixed;
      top: 0;
      width: 100%;
      background: #fff;
      box-shadow: 0 0 5px rgba(0,0,0,.2);
      @media screen and (max-width: 1200px) {
        display: block;
      }
      @media screen and (min-width: 1200px) {
        display: none;
      }
      .logo-box{
        height: 46px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 20px;
        position: absolute;
        left: 0;
        top: 50%;
        width: 150px;
        transform: translateY(-50%);
        img{
          width: 150px;
        }
      }
      .right{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100002;
        padding: 10px 20px 10px 10px;
        cursor: pointer;
        .right-menu{
          width: 24px;
          height: 22px;
          background: url("../assets/images/common/menu.svg") no-repeat center / cover;
          &.close-menu{
            background: url("../assets/images/common/close.svg") no-repeat center / cover;
            width: 20px;
            height: 20px;
          }
        }
      }
      .ar &{
        .logo-box{
          right: 20px;
          left: auto
        }
        .right{
          left: 20px;
          right: auto;
        }
      }
    }
    .show-menu{
      background-color: rgba(255,255,255,.98);
      overflow: hidden;
      max-height: 0;
      transition: max-height .3s linear;
      display: none;
      position: fixed;
      top: 70px;
      width: 100%;
      box-shadow: 0 3px 10px rgba(0,0,0,.15);
      z-index: 98;
      @media screen and (max-width: 1200px) {
        display: block;
      }
      &.menu-active{
        max-height: 100%;
      }
      .uls{
        border-top: 1px solid @green;
        padding: 10px 0 40px;
        height: 100vh;
        li{
          padding: 0 36px;
          line-height: 44px;
          @media screen and (max-width: 1200px) {
            font-size: 16px;
          }
          /*&:nth-child(3){
            pointer-events:none;
            cursor: not-allowed;
            !*text-decoration: line-through;
            color: #cccccc;
            opacity: .9;*!
            a{
              cursor: not-allowed;
            }
          }*/
          &:nth-child(4){
            pointer-events:none;
            /*text-decoration: line-through;
            color: #cccccc;
            opacity: .9;*/
            a{
              cursor: not-allowed;
            }
          }
          &:nth-child(5){
            display: none;
          }
        }
        a{
          display: block;
        }
        .is-active{
          color: @green;
        }
        // li:last-child{
        //   a{
        //     border: 1px solid @green;
        //     border-radius: 20px;
        //     display: inline-block;
        //     padding: 0 20px;
        //     line-height: 34px;
        //   }
        // }
      }
      .language{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 4px;
        border-bottom: 1px solid rgba(150, 150, 150, .2);
        z-index: 100;
        &:before{
          display: block;
          content: '';
          position: absolute;
          z-index: 100;
          height: 10px;
          width: 100%;
          bottom: 0;
          left: 0;
          right: 0;
        }
        @media screen and (max-width: 1200px) {
          line-height: 50px !important;
          border-bottom: 1px solid rgba(150, 150, 150, .2);
         // margin-top: 10px;
        }
        &.active{
          &:after{
            content: '';
            display: block;
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -4px;
            transform: rotate(180deg);
          }
        }
        .flag-img{
          margin-right: 20px;
          display: inline-block;
          width: 22px;
          height: 16px;
          box-shadow: 0 0 1px rgba(150, 150, 150, .2);
          img{
            display: block;
            width: 100%;
            height: 100%;
            line-height: 16px;
            /*box-shadow: 0 0 2px rgba(150, 150, 150, .2);*/
          }
        }
        .country-name{
          flex: 1;
          /*text-align: right;
          padding-right: 20px;*/
        }
        &:after{
          content: '';
          display: block;
          width: 14px;
          height: 8px;
          background: url("../assets/images/common/down-01.png") no-repeat center;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          transition: all .3s linear;
        }
        .select{
          position: absolute;
          width: auto;
          height: 0;
          top: 44px;
          left: 0;
          right: 0;
          opacity: 0;
          background-color: #fff;
          border-top: 1px solid rgba(150, 150, 150, .2);
          //box-shadow: 0 0 4px rgba(150, 150, 150, .4);
          transition: all .3s linear;
          overflow: hidden;
          z-index: 96;
          @media screen and (max-width: 1200px) {
            top: 50px;
          }
          &.small{
            background: rgba(255,255,255,.96);
            top: 50px;
          }
          &.dropDownMenuActive{
            opacity: 1;
            height: 201px;
            border-top: 1px solid rgba(150, 150, 150, .8);
          }
          .box-list{
            padding: 0 36px;
            display: flex;
            align-items: center;
            flex-flow: wrap;
            justify-content: space-between;
            &:nth-child(even) {
              width: 50%;
            }
            &:nth-child(odd) {
              flex: 1;
            }
            .item-li{
              width: 50%;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-left: 0;
              padding: 0;
              cursor: pointer !important;
              color: #969696 !important;
              opacity: 1 !important;
              text-decoration: none !important;
              pointer-events: auto !important;
              &:last-child{
                .lang-img{
                  img{
                    box-shadow: 0 0 0 0 rgba(150, 150, 150, .2);
                    border-top: 1px solid rgba(150, 150, 150, .2);
                  }
                }
              }
              .lang-img{
                width: 22px;
                height: 16px;
                img{
                  display: block;
                  width: 100%;
                  height: 100%;
                  line-height: 16px;
                  box-shadow: 0 0 0 1px rgba(150, 150, 150, .2);
                }
              }
              .lang-text{
                flex: 1;
                line-height: 16px;
                font-size: 14px;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .lang{
      display: flex;
      align-items: center;
      padding-top: 10px;
      span{
        margin-right: 22px;
      }
      img{
        width: 24px;
        margin-right: 8px;
      }
    }
  }
  .return-top{
    position: fixed;
    width: 50px;
    height: 50px;
    right: 40px;
    bottom: 40px;
    background: #068279;
    cursor: pointer;
    opacity: .5;
    transition: .3s;
    &:before{
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-left: 2px solid #fff;
      border-top: 2px solid #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-30%) rotate(45deg);
    }
    &:hover{
      opacity: 1;
    }
    @media screen and (max-width: 1200px) {
      transform: scale(.6);
      transform-origin: right bottom;
      right: 20px;
    }
  }
</style>
