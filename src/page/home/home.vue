<template>
  <div class="home">
    <div class="banner" :style="`background: url(${require(`../../assets/images/home/banner_en.jpg`)}) center top no-repeat`">
      <div class="banner-middle">
        <!-- <div class="banner-text" v-html="$t('home.text1')"></div> -->
        <i class="play-btn" @click="play"></i>
        <!-- <i v-else class="play-btn2" @click="play">{{$t('home.text28')}}</i> -->
      </div>
    </div>
    <div class="swiper">
      <div class="wrap">
        <!-- <div v-if="isPC" class="c">
          <div  @click="showCase(index)" v-for="(item, index) in 5" :key="index" class="item">
            <img :src="require(`../../assets/images/home/b${item}.jpg`)" width="160"   alt="">
          </div>
        </div>
        <div v-else>
          <swiper :options="swiperOption">
            <swiper-slide @click.native="showCase(index)" v-for="(item, index) in 5" :key="index" class="item">
              <img :src="require(`../../assets/images/home/b${item}.jpg`)" alt="">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div> -->
        <div class="c">
          <swiper ref="swiper" :options="swiperOption" @click.native="showCase">
            <swiper-slide v-for="(item, index) in 6" :key="index" class="item">
              <img :src="require(`../../assets/images/home/b${item}.jpg`)" :data-index="index" alt="">
            </swiper-slide>
          </swiper>
          <div v-show="isPC">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="video" v-show="videoShow">
      <div class="video-content">
        <i class="close" @click="close"></i>
        <video id="video" ref="video" width="100%" controls="" preload="" webkit-playsinline="true" playsinline="true">
          <source src="" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="section what">
      <div class="wrap">
        <div class="tit line"><span>{{$t('home.text2')}}</span></div>
        <div class="circle-list">
          <div v-for="(item, index) in $t('home.whatList')" :key="index" class="circle">
            <div class="content wow fadeInUp" :data-wow-delay="`${index * .2}s`">
              <img :src="require(`../../assets/images/home/i${index}.svg`)" alt="">
              <h3>{{item.title}}</h3>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section start-hot">
      <h3>{{$t('home.text29')}}</h3>
      <div class="btn-wrap">
        <div class="hr"></div>
        <!--<a :href="`./static/pdf/Introduction.pdf`" target="_blank">{{$t('home.text30')}}</a>
        <a :href="`./static/pdf/white_paper/${$lang}.pdf`" target="_blank">{{$t('home.text31')}}</a>-->
        <a :href="`./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/preface.pdf`" target="_blank">{{$t('home.text34')}}</a>
        <a :href="`./static/pdf/${this.$lang === 'cn' ? 'cn' : 'en'}/introduction.pdf`" target="_blank">{{$t('home.text35')}}</a>
      </div>
    </div>
    <div class="section super">
      <div class="wrap">
        <!-- <div class="tit"><span @click="playb">{{$t('home.text6')}}</span></div> -->
        <div class="tit">{{$t('home.text6')}}</div>
        <div class="line"></div>
        <div class="video" v-show="videoBShow">
          <div class="video-content">
            <i class="close" @click="closeb"></i>
            <video id="videob" ref="videob" width="100%" controls="" webkit-playsinline="true" playsinline="true">
              <source src="" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="circle-list wow zoomIn">
          <div v-for="(item, index) in $t('home.superList')" :key="index" class="circle">
            <div class="content">
              <img :src="require(`../../assets/images/home/s${index + 1}.svg`)" alt="">
              <h3>{{item.title}}</h3>
              <p>{{item.text}}</p>
            </div>
            <div class="number">{{index + 1}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section core">
      <div class="wrap wow fadeInUp">
        <div class="tit line">{{$t('home.text26')}}</div>
        <div class="text" v-html="$t('home.text27')"></div>
        <div class="list">
          <dl v-for="(item, index) in $t('home.coreList')" :key="index">
            <dt>{{item.title}}<span v-show="!isPC"> —</span></dt>
            <dd>{{item.text}}</dd>
          </dl>
        </div>
      </div>
    </div> -->
    <!-- <div class="section intro">
      <div class="wrap wow zoomIn">
        <div class="tit">{{$t('home.text9')}}</div>
        <p>{{$t('home.text10')}}</p>
        <div class="baike-menu">
          <div v-for="(item, index) in $t('home.baikeMenu')" :key="index" class="item" :class="{on: !item.showMore}">
            <div class="img"><img :src="require(`../../assets/images/home/baike${index}.svg`)" alt=""></div>
            <div class="tit">{{item.title}}</div>
            <div class="text-wrap">
              <div class="text" v-html="item.text">
              </div>
              <div class="more" @click="item.showMore = !item.showMore">
                <span class="hide" v-if="item.showMore">{{$t('common.hideMore')}}</span>
                <span class="show" v-else>{{$t('common.viewMore')}}</span>
              </div>
            </div>
            <a v-if="item.outside" target="_blank" :href="`./static/pdf/white_paper/${$lang}.pdf`">{{$t('common.learnMore')}} >></a>
            <router-link v-else @click.native="item.showMore = false" :to="item.url">{{$t('common.learnMore')}} >></router-link>
          </div>
        </div>
      </div>
    </div> -->
    <div class="section time gray">
      <div class="wrap">
        <div class="justify">
          <div class="img wow fadeInLeft">
            <router-link to="/property?index=0">
              <img src="~@img/home/img4.png" alt="">
            </router-link>
          </div>
          <div class="text wow fadeInRight">
            <h3>{{$t('home.text13')}}</h3>
            <div class="sub-tit">{{$t('home.text14_0')}}</div>
            <p>{{$t('home.text14')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section now">
      <div class="wrap">
        <div class="justify">
          <div class="img wow fadeInRight">
            <router-link to="/property?index=1&anchor=anchor1" class="site-box"><img src="../../assets/images/home/c1.png" alt=""><i class="site">{{$t('property.text27')}}</i></router-link>
            <router-link to="/property?index=2&anchor=anchor2" class="site-box"><img src="../../assets/images/home/c2.png" alt=""><i class="site">{{$t('property.text36')}}</i></router-link>
            <router-link to="/property?index=4&anchor=anchor4" class="site-box"><img src="../../assets/images/home/c3.png" alt=""><i class="site">JERSEY, JE2 3QT</i></router-link>
            <router-link to="/property?index=0&anchor=anchor0" class="site-box"><img src="../../assets/images/home/c4.png" alt=""><i class="site">{{$t('property.text17')}}</i></router-link>
            <router-link to="/property?index=3&anchor=anchor3" class="site-box"><img src="../../assets/images/home/c5.png" alt=""><i class="site">Canary Wharf</i></router-link>
            <router-link to="/property?index=5&anchor=anchor5" class="site-box"><img src="../../assets/images/home/c6.png" alt=""><i class="site">{{$t('property.build[0].address')}}</i></router-link>
          </div>
          <div class="text wow fadeInLeft">
            <h3 class="green-color">{{$t('home.text15')}}</h3>
            <div class="sub-tit">{{$t('home.text16_0')}}</div>
            <p v-html="$t('home.text16')"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="section time future gray">
      <div class="wrap">
        <div class="justify">
          <div class="text wow fadeInRight">
            <h3>{{$t('home.text19')}}</h3>
            <div class="sub-tit">{{$t('home.text20_0')}}</div>
            <p>{{$t('home.text20')}}</p>
            <p>{{$t('home.text22')}}</p>
            <p>{{$t('home.text23')}}</p>
            <p>{{$t('home.text24')}}</p>
            <p>{{$t('home.text25')}}</p>
          </div>
          <div class="img wow fadeInLeft">
            <img v-if="isPC" :src="require(`../../assets/images/home/map_pc_${$lang}.svg`)" alt="">
            <img v-else :src="require(`../../assets/images/home/map_mob_${$lang}.svg`)" alt="">
          </div>
        </div>
      </div>
    </div>
    <transition name="zoom">
      <div class="show-case" v-show="showCaseIndex">
        <div class="content">
          <div class="case-wrap">
            <property :showCaseIndex="showCaseIndex" :fromHome="true"/>
          </div>
          <div class="close" @click="showCaseIndex = 0"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import property from '@/components/hot-propertys/hotPropertys'
import { WOW } from 'wowjs'
export default {
  data () {
    return {
      videoShow: false,
      videoAShow: false,
      videoBShow: false,
      isPC: window.innerWidth > 1200,
      swiperOption: {
        autoplay: 4500,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        slidesPerView: window.innerWidth > 1200 ? 5 : 1,
        preventClicks: false,
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          imgUrl: require('../../assets/images/home/swiper1.jpg'),
          title: 'TOKENHOUSE'
        },
        {
          imgUrl: require('../../assets/images/home/swiper2.jpg'),
          title: '1 KING’S ARMS YARD'
        },
        {
          imgUrl: require('../../assets/images/home/swiper3.jpg'),
          title: '2 COPTHALL AVENUE'
        },
        {
          imgUrl: require('../../assets/images/home/swiper4.jpg'),
          title: '11 WESTFERRY CIRCUS'
        },
        {
          imgUrl: require('../../assets/images/home/swiper5.jpg'),
          title: 'GASPE HOUSE – JERSEY'
        }
      ],
      showCaseIndex: 0
    }
  },
  components: {
    property
  },
  methods: {
    play () {
      this.videoShow = true
      this.$refs.video.play()
    },
    close () {
      this.videoShow = false
      this.$refs.video.pause()
    },
    playb () {
      this.videoBShow = true
      this.$refs.videob.play()
    },
    closeb () {
      this.videoBShow = false
      this.$refs.videob.pause()
    },
    showCase (e) {
      const index = e.target.getAttribute('data-index')
      this.showCaseIndex = parseInt(index) + 1
    }
  },
  mounted () {
    new WOW({live: false}).init()
    this.$refs.video.src = `https://qhouse.blob.core.windows.net/house/what-is-HoT-${this.$lang === 'cn' ? 'cn' : 'en'}.mp4`
    // this.$refs.video.src = `./static/video/${this.$lang === 'cn' ? 'cn' : 'en'}/what-is-HoT.mp4`
    // this.$refs.videob.src = `./static/video/${this.$lang === 'cn' ? 'cn' : 'en'}/HOT-advantage.mp4`
  }
}
</script>

<style lang="less" scoped>
  @green: #00a99d;
  .home{
    font-size: 16px;
    color: #808080;
    text-align: center;
    .banner{
      text-align: center;
      height: 500px;
      background-size: cover !important;
      .banner-middle{
        height: 100%;
        display: flex;
        padding-bottom: 20px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      &-text{
        font-size: 38px;
        color: #fff;
        line-height: 1.5;
        text-shadow: 1px 1px rgba(0,0,0, .2), 2px 2px rgba(0,0,0, .3);
        width: 850px;
      }
      .play-btn{
        margin-top: 20px;
        background: url(~@img/common/play.svg) no-repeat center;
        background-size: 100%;
        display: inline-block;
        width: 80px;
        height: 80px;
        cursor: pointer;
        @media screen and (max-width: 1200px) {
          width: 56px;
          height: 56px;
        }
      }
    }
    .swiper{
      margin-top: -50px;
      position: relative;
      z-index: 2;

      .wrap{
        position: relative;
        .pc & .c{
          margin: 0 auto;
          width: 920px;
          display: flex;
          justify-content: space-between;
          position: relative;
        }
      }
      .pc & img{
        width: 160px;
      }
      .swiper-button-prev{
        left: -86px;
        background: url(~@img/home/prev.svg);
        width: 56px;
        height: 56px;
      }
      .swiper-button-next{
        right: -86px;
        background: url(~@img/home/next.svg);
        width: 56px;
        height: 56px;
      }
      .item{
        cursor: pointer;
        .ar &:first-child .tit{
          text-align: center;
        }
      }
      .content{
        border: 4px solid #fff;
        position: relative;
        box-shadow: 0 1px 6px rgba(0,0,0,.1);
        margin-bottom: 4px;
        .img{
          height: 300px;
          background-size: cover;
        }
        .tit{
          position: absolute;
          top: 50%;
          width: 100%;
          padding: 0 65px;
          transform: translateY(-50%);
          font-size: 22px;
          color: #fff;
          line-height: 35px;
          text-align: left;
          .ar &{
            text-align: right;
            padding: 0 55px;
          }
        }
      }
    }
    .section{
      overflow: hidden;
    }
    .green-color{
      color: @green;
    }
    .section{
      text-align: center;
      &.gray{
        background: #f4f6f7;
      }
      a:hover{
        text-decoration: underline;
      }
    }
    .tit{
      color: @green;
      line-height: 1.1;
      font-size: 36px;
      margin-bottom: 30px;
      text-align: center;
      &.line:after{
        content: '';
        background: #bbb;
        height: 1px;
        width: 150px;
        display: block;
        margin: 40px auto 0;
      }
    }
    .justify{
      display: flex;
      text-align: left;
      .ar &{
        text-align: right;
      }
      justify-content: space-between;
      align-items: center;
      padding: 135px 0;
      h3{
        font-size: 36px;
        margin-bottom: 16px;
        color: @green;
      }
      .sub-tit{
        font-size: 20px;
        color: #28433f;
        margin-bottom: 14px;
      }
      p{
        line-height: 2;
        font-size: 15px;
        .en &{
          line-height: 1.6;
        }
      }
      .img{
        font-size: 0;
        flex: 1;
        img{
          max-width: 518px
        }
        .site-box{
          position: relative;
          &:hover{
            &:after{
              background-color: rgba(0,0,0, .4);
            }
            .site{
              color: rgba(255,255,255, .8);
            }
          }
          &:after{
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0);
          }
          .site{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            font-size: 14px;
            color: rgba(255,255,255, 0);
            white-space:nowrap;
            overflow: hidden;
            transition: all .5s cubic-bezier(0, 0, 0.2, 1);
            @media screen and (max-width: 768px) {
              display: none;
            }
          }
        }
      }
      .text{
        flex: 1;
      }
      a{
        display: inline-block;
        overflow: hidden;
        margin: 1px;
        img:hover{
          transform: scale(1.05);
        }
      }
      img{
        transition: .5s cubic-bezier(0, 0, 0.2, 1);
      }

    }
    .what{
      padding: 100px 0;
      border-bottom: 1px solid #ebebeb;
      .circle-list{
        display: flex;
        justify-content: space-between;
        width: 1060px;
        margin: 0 auto;
        padding-top: 80px;
      }
      .circle{
        width: 320px;
        font-size: 14px;
        line-height: 2;
        color: #808080;
        h3{
          font-size: 20px;
          line-height: 1.2;
          font-weight: bold;
          color: #344e5a;
          padding: 28px 3px;
          .cn &,.en &,.ja &,.ko &,.ar &{
            min-height: 104px;
          }
          .th &,.de &,.fr &,.ru &{
            min-height: 128px;
          }
          .es &{
            min-height: 152px;
          }
        }
        img{
          width: 136px;
        }
     }
    }
    .super{
      padding: 100px 0 40px;
      text-align: center;
      .tit{
        span{
          background: url(~@img/home/play.svg) no-repeat 99% center;
          background-size: auto 33px;
          padding-right: 50px;
          display: inline-block;
          @media screen and (max-width: 1200px) {
            padding-right: 40px;
          }
        }
      }
      .circle-list{
        margin: 0 -14px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        &::before{
          content: '';
          border: 2px solid @green;
          border-bottom: none;
          position: absolute;
          top: 184px;
          height: 500px;
          width: 610px;
          left: 50%;
          margin-left: -305px;
        }
      }
      .circle{
        position: relative;
        background: #fff;
        width: 348px;
        padding: 40px 20px;
        line-height: 1.6;
        font-size: 14px;
        color: #808080;
        // display: inline-block;
        // vertical-align: top;
        margin: 0 14px 36px;
        box-shadow:  0 0 10px rgba(0,0,0, .1);
        .pc.cn &{
          height: 450px;
          line-height: 1.9;
          h3{
            line-height: 1.9;
            margin-bottom: 0;
          }
        }
        .content{
          position: relative;
          z-index: 3;
        }
        h3{
          font-size: 18px;
          color: #000;
          padding: 8px 0 2px;
          line-height: 1.3;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          .pc.en &{
            font-size: 16px;
            line-height: 1.4;
            padding: 8px 20px 7px;
          }
        }
        .pc &:nth-child(4){
          margin-left: 200px;
        }
        .pc.ar &:nth-child(4){
          margin-left: 14px;
          margin-right: 200px;
        }
        .pc.en &:nth-child(5) h3{
          margin: 22px 0;
        }
        .pc.th &:nth-child(5) h3{
          margin: 28px 0;
        }
        .pc.ru &:nth-child(5) h3{
          margin: 12px 0;
        }
        .pc.de & h3, .pc.fr & h3{
          min-height: 79px;
        }
        .pc.es & h3{
          min-height: 104px;
        }
        .pc.ar & h3,.pc.ja & h3,.pc.ko & h3{
          min-height: 58px;
        }
      }
      .number{
        position: absolute;
        color: #f5f5f5;
        font-size: 130px;
        bottom: 30px;
        left: 20px;
        line-height: 1;
        font-weight: bold;
      }
      img{
        width: 134px;
      }
      .video-btn2{
        display: inline-block;
        cursor: pointer;
        padding: 0 18px;
        line-height: 36px;
        border: 1px solid @green;
        border-radius: 4px;
        color: @green;
        margin-top: -10px;
        &:after{
          content: '';
          width: 18px;
          height: 18px;
          background: url("~@img/home/play.svg") no-repeat 0 center;
          display: inline-block;
          vertical-align: middle;
          margin: -3px 0 0 6px;
        }
      }
      .line{
        width: 150px;
        height: 1px;
        background: #bbb;
        margin: 20px auto 70px;
      }
    }
    .start-hot{
      background: #00a99e url(~@img/home/bg3.png) no-repeat center;
      h3{
        color: #fff;
        font-size: 24px;
        line-height: 1.2;
        padding: 65px 0 38px ;
      }
      .btn-wrap{
        width: auto;
        margin: 0 auto;
        padding: 36px 0 60px;
        font-size: 0;
        display: flex;
        justify-content: center;
        position: relative;
        .hr{
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%,50%);
          width: 240px;
          height: 1px;
          background-color: #80d4cf;
          margin: 0 auto;
        }
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 14px;
          width: 280px;
          text-align: center;
          height: 56px;
          background: #fff;
          border-radius: 4px;
          color: #09534e;
          margin: 0 10px;
          font-size: 18px;
          line-height: 1.2;
          box-shadow: 0 0 20px rgba(9, 84, 79, .4);
          transition: all .3s linear;
          /*&:last-child{
            color: @green;
          }*/
          &:hover{
            box-shadow: 0 0 20px rgba(255,255,255,.6);
            color: #000;
          }
        }
      }
    }
    .baike-menu{
      display: flex;
      padding-top: 90px;
      .item{
        flex: 1;
        margin: 0 10px;
        text-align: center;
        padding: 30px;
        color: #808080;
        font-size: 14px;
        background: #fff;
        border-radius: 4px;
        &:nth-child(2){
          a{
            color: #999;
            cursor: not-allowed;
            text-decoration:line-through;
          }
        }
        &:hover{
          box-shadow: 0 0 6px rgba(0,0,0, .2);
          transition: .4s;
        }
        .tit{
          font-size: 18px;
          line-height: 1;
          color: #000;
        }
        img{
          margin: 18px 0;
          height: 64px;
        }
        .text-wrap{
          height: auto;
          margin-bottom: 50px;
          line-height: 2;
          position: relative;
          text-align: left;
        }
        .text{
          display: inline;
        }
        .more{
          cursor: pointer;
          display: inline;
          background: #fff;
          margin-left: 4px;
          i{
            display: none;
            color: #808080;
            background-image: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1))
          }
          span{
            color: @green;
            background: url(~@img/home/top.svg) no-repeat right center;
            background-size: 12px;
            padding-right: 16px;
            .ar &{
              background-position: left center;
              padding: 0 0 0 16px;
            }
          }
          .show{
            background-image: url(~@img/home/down.svg);
            &::before{
              content: '';
              position: absolute;
              left: -50px;
              height: 100%;
              width: 50px;
              background-image: linear-gradient(to right, rgba(255, 255, 255, 0),rgba(255,255,255,1));
            }
          }
        }
        &.on{
          .text-wrap{
            overflow: hidden;
            height: 78px;
          }
          .more{
            position: absolute;
            right: 0;
            bottom: -5px;
            i{
              display: inline;
            }
            .ar &{
              left: 0;
              right: auto;
              margin: 0 4px 0 0;
              span{
                background-position: left center;
                background-size: 12px;
                padding-left: 16px;
              }
              .show{
                &::before{
                  right: -50px;
                  background-image: linear-gradient(to left, rgba(255, 255, 255, 0),rgba(255,255,255,1));
                }
              }
            }
          }
        }
        a{
          color: @green;
          text-decoration: underline;
          display: inline-block;
          padding: 10px;
        }
      }
    }
    .core{
      padding: 170px 0;
      font-size: 17px;
      .list{
        background: url(~@img/home/core.svg) no-repeat center top;
        background-size: 240px;
        display: flex;
        justify-content: space-between;
        padding-top: 380px;
        margin-top: 80px;
        dt{
          font-size: 20px;
          margin-bottom: 10px;
          color: @green;
        }
        dd{

        }
      }
      .text{
        line-height: 40px;
        margin: 0 55px ;
        /deep/ span{
          color: @green;
        }
      }
    }
    .intro{
      border: 1px solid #ebebeb;
      line-height: 24px;
      padding: 120px 0 180px;
      font-size: 17px;
      p{
        padding-top: 12px;
        .pc &{
          margin: 0 159px;
        }
        line-height: 2;
        .pc.en &{
          margin: 0 144px;
        }
      }
      .down{
        margin-top: 32px;
        background: url(~@img/home/img3.svg) no-repeat center bottom;
        background-size: 410px;
        padding: 20px 0 200px;
        a{
          display: inline-block;
          width: 300px;
          line-height: 68px;
          border: 1px solid #000;
          border-radius: 4px;
          color: #000;
          font-size: 20px;
          &:after{
            content: '';
            width: 26px;
            height: 26px;
            display: inline-block;
            margin-left: 6px;
            vertical-align: middle;
            background: url(~@img/common/down.svg) no-repeat center;
            background-size: 24px;
            margin-top: -3px;
          }
        }
      }
    }
    .time{
      .text{
        padding-left: 33px;
        .ar &{
          padding: 0 33px 0 0;
        }
      }
    }
    .now{
      .text{
        order: 0;
        padding-right: 33px;
        .ar &{
          padding: 0 0 0 33px;
        }
        /deep/ a:hover{
          color: @green;
          text-decoration: underline;
        }
      }
      .img{
        order: 1;
      }
      a{
        img{
          width: 172px;
        }
      }
    }
    .future{
      .img{
        order: 0;
      }
      .text{
        order: 1;
      }
      .pc & {
        .justify{
          margin-left: -70px;
        }
        img{
          width: 658px;
          max-width: none !important;
        }
      }
      @media screen and (max-width: 1200px) {
        .img{
          margin-top: 50px;
        }
      }
    }
    .map-wrap{
      background: #f4f6f7;
      background-size: cover;
      line-height: 30px;
      padding-bottom: 120px;
      text-align: left;
      font-size: 17px;
      .map{
        display: block;
        // background: url(~@img/home/map_bg.svg) no-repeat center;
        position: relative;
        .map-pc{
          display: flex;
          align-items: center;
          img{
            width: 638px;
          }
          margin-right: -40px;
        }
        .tit{
          text-align: left;
          display: inline-block;
          border-bottom: 1px solid #d9d9d9;
          padding-bottom: 20px;
          margin-bottom: 0;
        }
        h3{
          color: #28433f;
        }
        .content{
          padding-right: 2px;
        }
        .en &{
          p{
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 10px;
          }
        }
        .point{
          position: absolute;
          text-align: center;
          span{
            color: @green;
            display: block;
            line-height: 1;
            margin-top: -16px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 150px;
            font-size: 12px;
          }
          i {
            width: 50px;
            height: 50px;
            position: relative;
            display: inline-block;
            &:after{
              position:absolute;
              content: '';
              width:100%;
              height:100%;
              border-radius:100%;
              background: @green;
              left: 0;
              top: 0;
              -webkit-animation:loader 1.5s linear infinite;
              animation:loader 1.5s linear infinite;
            }
            &:before{
              content: '';
              background: @green;
              width: 24px;
              height: 24px;
              position: absolute;
              border-radius: 50%;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
            }
          }
        }
        .p1{
          left: 244px;
          top: 237px;
        }
        .p2{
          left: 444px;
          top: 169px;
        }
        .p3{
          left: 499px;
          top: 194px;
        }
        .p4{
          left: 758px;
          top: 376px;
        }
        .p5{
          left: 860px;
          top: 246px;
        }
      }
      .mob-map{
        display: none;
      }
      h3{
        color: #c48b1c;
        margin-top: 37px;
        margin-bottom: 10px;
      }
    }
    .end{
      background: @green;
      font-size: 34px;
      line-height: 170px;
      color: #fff;
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
    @media screen and (max-width: 1200px) {
      font-size: 16px;
      .wrap{
        padding: 0 4%;
      }
      p + p {
        padding-top: 15px;
      }
      img{
        max-width: 100%;
      }
      .banner{
        height: 260px;
        background-size: cover;
        // .banner-middle{
        //   align-items: flex-start;
        //   padding-bottom: 10px;
        // }
        &-text{
          width: auto;
          padding: 0 4%;
          font-size: 20px;
          text-align: left;
          .ar &{
            text-align: right;
          }
          /deep/ span{
            display: block;
            font-size: 20px;
            margin: 15px 0;
          }
          .cn &{
            font-size: 30px;
          }
        }
        .play-btn2{
          background: @green;
          &:before{
            content: '';
            display: inline-block;
            width: 24px;
            height: 24px;
            background: url(~@img/common/play.svg) no-repeat;
            background-size: 100%;
            margin-right: 5px;
            vertical-align: middle;
            margin-top: -3px;
          }
          display: block;
          width: 50%;
          margin: 35px 4% 0;
          line-height: 48px;
          border-radius: 4px;
          color: #fff;
          font-size: 15px;
        }
      }
      .what{
        line-height: 1.5;
        padding: 120px 2% 20px;
        .wrap{
          padding: 0 6%;
        }
        .circle-list{
          padding-top: 50px;
          width: auto;
          display: block;
        }
        .circle{
          width: auto;
          margin-bottom: 80px;
          font-size: 16px;
        }
      }
      .super{
        padding: 60px 0 20px;
        .circle-list{
          padding: 0 6%;
          &::before{
            display: none;
          }
        }
        .circle{
          width: auto;
          height: auto;
          padding-bottom: 36px;
          box-shadow: 0 0 10 rgba(0,0,0, .2);
          font-size: 16px;
          border-radius: 6px;
        }
      }
      .core{
        padding: 80px 0;
        .list{
          position: relative;
          width: auto;
          display: block;
          font-size: 16px;
          padding-top: 280px;
          background-size: 200px;
          background-position: center top;
          text-align: left;
          dl{
            margin-bottom: 12px;
            line-height: 1.6;
          }
          dt,dd{
            display: inline;
          }
          dt{
            font-size: 18px;
          }
        }
        .text{
          margin: 0;
          line-height: 2;
          font-size: 16px;
        }
      }
      .intro{
        padding: 80px 0;
        line-height: 1.8;
        font-size: 16px;
        .down{
          a{
            width: 90%;
            line-height: 48px;
          }
        }
      }
      .justify{
        display: block;
        padding: 60px 0;
        h3{
          margin-bottom: 12px;
          font-size: 26px;
        }
        .sub-tit{
          font-size: 18px;
        }
        .img{
          margin-bottom: 20px;
        }
        p{
          line-height: 1.6;
          font-size: 16px;
        }
      }
      .tit{
        font-size: 29px;
      }
      .time .text{
        padding: 0 !important;
      }
      img{
        max-width: 100% !important;
      }
      .now{
        .text{
          padding: 0;
        }
        a{
          margin: 0;
          width: 33.3333%;
          padding: 1px;
          img{
            margin-bottom: 0;
          }
        }
      }
      .baike-menu{
        display: block;
        padding-top: 50px;
        .item{
          padding: 20px;
          color: #808080;
          border-radius: 4px;
          box-shadow: 0 0 6px rgba(0,0,0, .2);
          margin-bottom: 40px;
          &:hover{
            box-shadow: 0 0 6px rgba(0,0,0, .2);
          }
          .tit{
            font-size: 18px;
            line-height: 1;
            color: #000;
          }
          img{
            margin: 18px 0;
            height: 64px;
          }
          .text-wrap{
            height: auto;
            overflow: hidden;
            margin-bottom: 40px;
            line-height: 2;
            position: relative;
            text-align: left;
          }
          .more{
            cursor: pointer;
            display: inline;
            background: #fff;
            margin-left: 4px;
            i{
              display: none;
              color: #808080;
              background-image: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1))
            }
            span{
              color: @green;
              background: url(~@img/home/top.svg) no-repeat right center;
              background-size: 12px;
              padding-right: 16px;
            }
            .show{
              background-image: url(~@img/home/down.svg);
              &::before{
                content: '';
                position: absolute;
                left: -50px;
                height: 100%;
                width: 50px;
                background-image: linear-gradient(to right, rgba(255, 255, 255, 0),rgba(255,255,255,1));
              }
            }
          }
          &.on{
            .text-wrap{
              height: 78px;
            }
            .more{

              position: absolute;
              right: 0;
              bottom: -5px;
              i{
                display: inline;
              }
            }
          }
          a{
            color: @green;
            text-decoration: underline;
          }
        }
      }
      .swiper{
        margin-top: -40px;
        position: relative;
        z-index: 2;
        .wrap{
          position: relative;
          padding: 0 15%;
          width: auto;
          display: block;
        }
        .swiper-button-prev, .swiper-button-next{
          display: none;
        }
        .item{
          padding: 0 3px;
        }
        .content{
          border: 4px solid #fff;
          position: relative;
          box-shadow: 0 1px 6px rgba(0,0,0,.1);
          margin-bottom: 4px;
          .img{
            height: 200px;
            background-size: cover;
          }
          .tit{
            position: absolute;
            top: 50%;
            width: 100%;
            padding: 0 10px !important;
            transform: translateY(-50%);
            font-size: 17px;
            color: #fff;
            line-height: 30px;
            text-align: left;
            .ar &{
              font-size: 16px;
            }
          }
        }
      }
      .map-wrap{
        background: #f4f6f7;
        background-size: cover;
        line-height: 1.5;
        padding: 40px 0 80px;
        text-align: left;
        font-size: 16px;
        .map{
          display: none;
        }
        .mob-map{
          .map-content{
            position: relative;
            margin: 60px 0 30px;
          }
          display: block;
          position: relative;
          img{
            vertical-align: top;
          }
          .point{
            position: absolute;
            text-align: center;
            span{
              font-size: 12px;
              position: relative;
              z-index: 3;
              color: #ffffff;
              line-height: 40px;
            }
            i {
              width: 40px;
              height: 40px;
              position: relative;
              display: inline-block;
              &:after{
                position:absolute;
                content: '';
                width:100%;
                height:100%;
                border-radius:100%;
                background: @green;
                left: 0;
                top: 0;
                -webkit-animation:loader 1.5s linear infinite;
                animation:loader 1.5s linear infinite;
              }
              &:before{
                content: '';
                background: @green;
                width: 18px;
                height: 18px;
                position: absolute;
                border-radius: 50%;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
              }
            }
          }
          .p1{
            left: 19%;
            top: 33%;
          }
          .p2{
            left: 41%;
            top: 31%;
          }
          .p3{
            left: 47%;
            top: 37%;
          }
          .p4{
            left: 77%;
            top: 56%;
          }
          .p5{
            left: 82%;
            top: 38%;
          }
          .t{
            position: absolute;
            background: @green;
            font-size: 13px;
            color: #fff;
            padding: 10px 1%;
            text-align: center;
            left: 50%;
            border-radius: 4px;
            width: 100px;
            transform: translateX(-50%);
          }
        }
        .address{
          background: #fff;
          margin-top: 10px;
          color: @green;
          display: flex;
          line-height: 40px;
          border-radius: 4px;
          overflow: hidden;
          i{
            width: 50px;
            background: @green;
            text-align: center;
            margin-right: 20px;
            color: #ffffff;
          }
        }
        .text{
          margin-top: 30px;
          background: #fff;
          padding: 6% 4%;
          border-radius: 4px;
        }
        h3{
          margin-top: 0;
        }
      }
      .start-hot{
        background-size: auto 100%;
        h3{
          padding-left: 4%;
          padding-right: 4%;
        }
        .btn-wrap{
          display: block;
          width: auto;
          margin: 0 8%;
          a{
            width: auto;
            text-align: center;
            background: #fff;
            border-radius: 4px;
            color: #000;
            margin: 10px 0;
            height: 56px;
            font-size: 16px;
          }
        }
      }
      .end{
        font-size: 18px;
        line-height: 1.6;
        padding: 20px 10px;
        font-weight: bold;
      }
      .video-content{
        width: 90%;
        video{
          width: 100%;
        }
      }
    }
  }

  .video-btn{
    width: 71px;
    height: 72px;
    margin: 59px auto 38px;
    background: url("~@img/introduce/play-btn.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    @media screen and (max-width: 1200px){
      width: 48px;
      height: 48px;
    }
  }

  @keyframes loader {
    0% {transform: scale(0, 0);opacity:0.8;}
    100% {transform: scale(1, 1);opacity:0;}
  }
  .show-case{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0,0,0, .6);
      width: 100%;
      height: 100%;
    }
    .content{
      transform: translate(-50%, -50%);
      .pc &{transform-origin: left top;}
      position: absolute;
      z-index: 2;
      background: #fff;
      padding: 40px 0 20px;
      width: 1110px;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      text-align: left;
    }
    .case-wrap{
      max-height: 450px;
      max-height: 80vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 4px;
        background-color: #fff;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 6px;
        background-color: #fff;
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #00a99d;
      }
    }
    .close{
      position: absolute;
      right: 10px;
      top: 10px;
      background: url(~@img/common/close2.svg) no-repeat right top;
      background-size: 100%;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
    @media screen and (max-width: 1200px) {
      .content{
        width: auto;
        margin: 0 30px;
        transform: none;
        left: 0;
        right: 0;
        top: 40px;
        bottom: 40px;
      }
      .case-wrap{
        max-height: auto;
        height: 100%;
        -webkit-overflow-scrolling: touch;
      }
    }
  }

</style>
<style lang="less">
.swiper .swiper-pagination{
  display: none;
  margin-top: 10px;
  left: 50%;
  transform: translate(-50%);
  @media screen and (max-width: 1200px) {
    display: block;
  }
}
.swiper .swiper-pagination-bullet-active{
  background: #00a99e;
}
.zoom-enter,.zoom-leave-to{
  opacity: 0;
  .content{
    transform: scale(.7) translate(-50%, -50%) !important;
  }
}
.zoom-leave-active,.zoom-enter-active{
  transition: .3s;
  .content{
    transition: .3s;
  }
}
.zoom-leave-active{
  transition: .1s;
  .content{
    transition: .1s;
  }
}
</style>
