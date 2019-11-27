<template>
  <div class="footer">

    <div class="wrap">
      <!--<div class="nav-box">
        <div class="nav" style="visibility:hidden;">
          <ul>
            <li v-for="(item,index) in $t('common.footerNav')" :key="index">
              <a v-if="item.outside" target="_blank" :href="item.path" class="text">{{item.name}}</a>
              <router-link v-else excat :to="item.path" class="text">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="link-text">
          <div class="li" v-for="(item,index) in $t('common.linkDatas')" :key="index"  v-if="index !== 1 && index !==4"><a :href="item.urlHref">{{item.text}}</a></div>
        </div>
      </div>-->
      <div class="nm">
        <!--<div class="lang">
          <span v-for="item in langList" :key="item.type" @click="switchLang(item.lang)" :class="{active: $lang === item.lang}">
            <img :src="require(`../assets/images/common/${item.lang.toLowerCase()}.svg`)" alt="">
            {{item. text}}</span>
        </div>-->
        <div class="share">
          <h3>{{$t('common.follow')}}</h3>
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/housetoken/"><img src="~@img/common/facebook.svg" alt=""></a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/company/housetoken"><img src="~@img/common/in.svg" alt=""></a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/token_house"><img src="~@img/common/twice.svg" alt=""></a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/housetoken/"><img src="~@img/common/inst.svg" alt=""></a>
            </li>
          </ul>
        </div>
        <div class="link-text">
          <div class="li" v-for="(item,index) in $t('common.linkDatas')" :key="index"  v-if="index !== 1 && index !==4"><a :href="item.urlHref">{{item.text}}</a></div>
        </div>
      </div>
    </div>
    <div class="cr">
      <span>House Token</span>
      <i v-if="$lang === 'cn'">2019 {{$t('common.cr')}}</i>
      <i v-else>{{$t('common.cr')}} 2019</i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      linkDatas: [
        {
          text: 'Risk Warnings',
          urlHref: 'javascript:;'
        },
        {
          text: 'Cookie Warnings',
          urlHref: 'javascript:;'
        },
        {
          text: 'Terms and Conditions',
          urlHref: 'javascript:;'
        },
        {
          text: 'Data Protection Privacy',
          urlHref: 'javascript:;'
        },
        {
          text: 'Fee Disclosures',
          urlHref: 'javascript:;'
        }
      ],
      langList: [
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
        // {
        //   lang: 'th',
        //   text: '泰语'
        // },
        // {
        //   lang: 'de',
        //   text: '德语'
        // },
        // {
        //   lang: 'fr',
        //   text: '法语'
        // },
        // {
        //   lang: 'es',
        //   text: '西班牙语'
        // },
        // {
        //   lang: 'ar',
        //   text: '阿拉伯语'
        // },
        // {
        //   lang: 'ja',
        //   text: '日语'
        // },
        // {
        //   lang: 'ko',
        //   text: '韩语'
        // },
        // {
        //   lang: 'ru',
        //   text: '俄语'
        // }
      ]
    }
  },
  methods: {
    switchLang (lang) {
      window.localStorage.setItem('lang', lang)
      window.location.reload()
    }
  }

}
</script>

<style lang="less" scoped>
  @green: #00a99e;
  .footer{
    background: #fff;
    position: relative;
    z-index: 2;
    font-size: 17px;
    text-align: center;
    border-top: 1px solid #e5e5e5;
    .nav-box{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      padding-top: 10px;
      @media screen and (max-width: 1024px){
        display: block;
      }
      .nav{
        padding: 16px 0;
        ul{
          text-align: left;
        }
        li{
          display: inline-block;
          padding-right: 24px;
          margin-right: 24px;
          line-height: 1.1;
          border-right: 1px solid #999;
          margin-bottom: 10px;
          &:hover{
            color: @green;
          }
          &:last-child{
            padding: 0;
            margin: 0;
            border: none !important;
          }
          .pc.fr &{
            font-size: 15px;
            padding-right: 16px;
            margin-right: 16px;
          }
          .pc.es &,.pc.ru &{
            font-size: 15px;
          }
        }
        .ar &{
          ul{
            text-align: right;
          }
          li{
            padding: 0 0 0 24px;
            margin: 0 0 0 24px;
            border-right: 0;
            border-left: 1px solid #999;
          }
        }
        @media screen and (max-width: 1200px) {
          display: none;
          padding: 30px 0 20px;
          font-size: 16px;
          li{
            margin: 0 0 14px 0;
            padding: 0 16px !important;
            text-align: center;
            .ar &{
              margin: 0 0 14px 0;
            }
          }
        }
      }
      .link-text{
        width: 240px;
        font-size: 12px;
        text-align: right;
        color: #ccc;
        @media screen and (max-width: 1024px){
          width: 100%;
          text-align: left;
          padding: 0 17px;
          display: flex;
          flex-flow: wrap;
          justify-content: space-between;
        }
        .li{
          padding: 0 0 5px;
          &:nth-child(even){
            @media screen and (max-width: 1200px){
              text-align: right;
            }
          }
          @media screen and (max-width: 1024px){
            width: 50%;
          }
          a{
            text-decoration: underline;
            &:hover{
              color: @green;
              opacity: .5;
            }
          }
        }
      }
    }
    .nm{
      padding-top: 20px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .share{
        @media screen and (max-width: 768px){
          display: block;
        }
        h3{
          text-align: right;
          font-size: 15px;
          padding-bottom: 10px;
          @media screen and (max-width: 1200px) {
            text-align: left;
            .ar &{
              text-align: right;
              padding-left: 30px;
            }
          }
          @media screen and (max-width: 768px){
            padding-bottom: 20px;
          }
        }
        ul{
          display: flex;
          justify-content: center;
          padding-bottom: 23px;
          @media screen and (max-width: 768px){
            justify-content: flex-start;
            padding-bottom: 0;
          }
          li{
            & + li{
              margin-left: 40px;
            }
            .pc.ar & + li{
              margin: 0 40px 0 0;
            }
            a{
              display: block;
              width: 30px;
              height: 30px;
            }
            img{
              width: 100%
            }
          }
          /*@media screen and (max-width: 1200px) {
            li{
              margin: 0 8px;
            }
          }*/
        }
      }
      .link-text{
        width: 240px;
        font-size: 12px;
        text-align: right;
        color: #ccc;
        @media screen and (max-width: 1024px){
          width: 100%;
          text-align: left;
          padding: 0 17px;
          display: flex;
          flex-flow: wrap;
          justify-content: space-between;
        }
        .li{
          padding: 0 0 5px;
          &:nth-child(even){
            @media screen and (max-width: 1200px){
              text-align: right;
            }
          }
          @media screen and (max-width: 1024px){
            width: 50%;
          }
          a{
            text-decoration: underline;
            &:hover{
              color: @green;
              opacity: .5;
            }
          }
        }
      }
    }
    .bottom{
      padding: 44px 0;
    }
    .lang{
      display: flex;
      align-items: center;
      font-family: webfont;
      flex-wrap: wrap;
      padding-right: 120px;
      margin-bottom: 10px;
      .ar &{
        padding-right: 0;
        padding-left: 120px;
      }
      span{
        margin-right: 26px;
        cursor: pointer;
        &:hover,&.active{
          color: #00a99e;
        }
        &:last-child{
          margin: 0 !important;
          font-family: Open Sans,Helvetica,Arial,monospace;;
          img{
            box-shadow: 0 0 0 0 rgba(150, 150, 150, .2);
            border-top: 1px solid rgba(150, 150, 150, .2);
          }
        }
        .ar &{
          margin: 0 0 0 26px;
        }
      }
      img{
        display: inline-block;
        width: 22px;
        height: 14px;
        box-shadow: 0 0 1px rgba(150, 150, 150, .2);
      }
    }
    .cr{
      padding: 30px 0;
      border-top: 1px solid #e5e5e5;
      span{
        color: #00a99e;
      }
    }
    @media screen and (max-width: 1200px) {
      .wrap{
        display: block;
      }
      .nm{
        display: block;
        padding-bottom: 20px;
      }
      .lang{
        padding: 20px 4% !important;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        justify-content: space-between;
        span{
          width: 32%;
          margin-right: 0;
          text-align: left;
          margin-bottom: 10px;
          font-size: 14px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .ar &{
            text-align: right;
            margin-left: 0;
            margin-bottom: 10px;
          }
          img{
            font-size: 0;
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
      .share{
        display: flex;
        justify-content: space-between;
        padding: 20px 4%;
        align-items: flex-start;
        h3{
          padding-bottom: 0;
        }
        ul{
          padding-bottom: 0;
          li{
            & + li{
              margin-left: 10px;
            }
            a{
              width: 22px !important;
              height: 22px !important;
            }
          }

        }
      }
      .bottom{
        padding: 0;
      }
      .cr{
        padding: 16px 0;
      }
    }
  }
</style>
