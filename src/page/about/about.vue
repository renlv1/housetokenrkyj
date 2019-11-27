<template>
  <div class="about">
    <div class="content content2">
     <div class="wraper">
       <h4>{{$t('about.text8')}}</h4>
       <ul>
         <li v-for="(item, index) in $t('about.teamList')" :key="index">
           <div class="topBox">
             <div class="imgBox">
               <div class="border"><img :src="item.imgUrl" alt=""></div>
             </div>
             <h5>{{item.userName}}</h5>
             <h6>{{item.type}}</h6>
           </div>
           <p>{{item.msg}}</p>
         </li>
         <li></li> <!--   排版占位    -->
       </ul>
     </div>
    </div>
    <div class="content content3">
      <div class="wraper">
        <h4>{{$t('about.text9')}}</h4>
        <p>{{$t('about.text10')}}</p>
        <div class="swiper_ul1">
          <div class="swiperList">
            <div class="slideBox" v-for="(item, index) in $t('about.relatedList')" :key="index">
              <img :src="require(`../../assets/images/about/related${index + 1}.png`)" alt="">
              <h6>{{item.text}}</h6>
              <p>{{item.text2}}</p>
            </div>
          </div>

        </div>
        <div class="swiper_ul2">
          <swiper :options="swiperOption3">
            <swiper-slide v-for="index in 2" :key="index" class="swiperList">
              <div class="slideBox" v-if="index1 < (index * 6) && index1 >= ((index - 1) * 6)" v-for="(item1, index1) in $t('about.relatedList')" :key="index1">
                <img :src="require(`../../assets/images/about/related${index1 + 1}.png`)" alt="">
                <h6>{{item1.text}}</h6>
                <p>{{item1.text2}}</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination2"  slot="pagination" style=""></div>
        </div>
      </div>
    </div>
    <div class="content content5">
      <div class="wraper">
        <h4>{{$t('about.text56')}}</h4>
        <h5>{{$t('about.text57')}}</h5>
        <p>{{$t('about.text58')}}</p>
        <ul>
          <li v-for="(item, index) in $t('about.modulesList')" :key="index">
            <div class="imgBox">
              <img :src="item.imgUrl" alt="">
            </div>
            <h6>{{item.title}}</h6>
            <p>{{item.msg}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!--发展计划-->
    <div class="content content4">
      <div class="wraper2">
        <h4>{{$t('about.text11')}}</h4>
        <div class="chart-wrap">
          <div class="chart">
            <div class="chart-table">
              <!--   线条   -->
              <!-- <table>
                <tr v-for="i in 4" :key="i">
                  <td v-for="j in 10" :key="j"></td>
                </tr>
              </table> -->
              <!--  点   -->
              <div
                v-for="(item, index) in (chartData)"
                :key="index"
                class="point"
                :class="{active: index === currentIndex}"
                :style="`left: ${item.x}px; bottom: ${item.y}px`"
                @mousemove="stopInterval"
                @mouseout="startInterval(index + 1)"
              >
                <i></i>
                <div class="text" >{{$t('about.chartList')[index]}}</div>
              </div>
            </div>
            <!--  x： 年份  y: 季度   -->
            <div class="num-wrap">
              <div class="y">
                <div class="num">1636</div>
                <div class="num">2018</div>
                <div class="num">2019</div>
                <div class="num">2020</div>
              </div>
              <!-- <div class="y">
                <div class="num" v-for="(i, index) in 8" :key="i">
                  Q{{index%4 + 1}}
                </div>
              </div> -->
            </div>
          </div>
          <!--  移动端   -->
          <div class="chart mob">
            <div
              v-for="(item, index) in (chartDataMob)"
              :key="index"
              class="point"
              :class="{active: currentIndex === index}"
              :style="`left: ${item.x}px; bottom: ${item.y + 21}px`"
            >
              <i @click="currentIndex = index"></i>
            </div>
            <div class="text active" v-if="chartDataMob[currentIndex]" :style="`bottom: ${chartDataMob[currentIndex].y + 40}px`">
              {{$t('about.chartList')[currentIndex]}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption3: {
        loop: true,
        notNextTick: true,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        speed: 2000,
        autoHeight: true,
        disableOnInteraction: false,
        pagination: '.swiper-pagination2'
      },
      chartData: [
        {x: 0, y: 1},
        {x: 100, y: 50},
        {x: 201, y: 101},
        {x: 304, y: 102},
        {x: 401, y: 138},
        {x: 501, y: 298},
        {x: 601, y: 300},
        {x: 697, y: 359},
        {x: 803, y: 362},
        {x: 905, y: 391}
      ],
      chartDataMob: [
        {show: false, x: 1, y: 1},
        {show: false, x: 31, y: 16},
        {show: false, x: 62, y: 30},
        {show: false, x: 95, y: 31},
        {show: false, x: 126, y: 40},
        {show: false, x: 155, y: 88},
        {show: false, x: 191, y: 90},
        {show: false, x: 218, y: 106},
        {show: false, x: 254, y: 108},
        {show: false, x: 285, y: 120}
      ],
      timer: null,
      currentIndex: 0
    }
  },
  mounted () {
    this.startInterval()
  },
  methods: {
    stopInterval () {
      this.currentIndex = -1
      clearInterval(this.timer)
    },
    startInterval (index) {
      this.timer = setInterval(() => {
        if (this.currentIndex >= this.chartData.length - 1) {
          this.currentIndex = 0
        } else if (index) {
          this.currentIndex = index
          index = 0
        } else {
          this.currentIndex++
        }
      }, 3000)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less" type="text/less" scoped>
  @green:#00a99d;
  .about-wrap{
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
  .banner{
    height: 500px;
    background-image: url("../../assets/images/about/banner_about.png");
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 1024px) {
      height: auto;
      padding-bottom: 50%;
      position: relative;
    }
    .title{
      text-align: center;
      @media screen and (max-width: 1024px) {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-right:0px;
        text-align: center;
      }
      .btn{
        padding: 0 30px;
        height: 58px;
        line-height: 58px;
        background-color: rgba(0,169,158,0.8);
        text-align: center;
        position: relative;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        display: inline-block;
        margin-top: 20px;
        cursor: pointer;
        user-select: none;
        @media screen and (max-width: 1024px) {
          margin: 20px auto 0;
          height: 44px;
          line-height: 44px;
        }
        &:hover{
          &:before{
            opacity: .8;
            transition: opacity .6s;
          }
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          border: white solid 2px;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          opacity: 0.2;
          -webkit-transition-duration: 0.6s;
          transition-duration: 0.6s;
          -webkit-transition-property: opacity;
          transition-property: opacity;
        }
        &:active{
          opacity: 0.4;
        }
        span{
          font-size: 16px;
          color: #fff;
        }
        i{
          display: inline-block;
          width: 18px;
          height: 18px;
          background-image: url("../../assets/images/about/down.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          margin-left: 15px;
          vertical-align: middle;
          margin-top: -3px;
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
        }
      }
      h4{
        font-size: 65px;
        color: #fff;
        text-shadow: 1px 1px rgba(0,0,0, .2), 2px 2px rgba(0,0,0, .3);
        @media screen and (max-width: 1024px) {
          font-size: 28px;
        }
      }
      h5{
        font-size: 65px;
        color: #fff;
        text-shadow: 1px 1px rgba(0,0,0, .2), 2px 2px rgba(0,0,0, .3);
        @media screen and (max-width: 1024px) {
          font-size: 28px;
        }
      }
    }
  }
  .wraper{
    width: 1100px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 0 20px;
    }
  }
  .content{
    text-align: center;
    border-bottom: 1px solid #e6e7e8;
    h4{
      color: @green;
      font-size: 38px;

    }
    p{
      font-size: 16px;
      color: #666;
      line-height: 1.5;
    }
  }
  .content1{
    padding-bottom: 260px;
    h4{
      margin: 138px 0 34px;
      font-size:38px;
      @media screen and (max-width: 1024px) {
        font-size:24px;
        margin-top: 60px;
      }
    }
    p{
      text-align: left;
      font-size: 18px;
      color: #000;
      line-height: 2;
      @media screen and (max-width: 1024px) {
        font-size:16px;
      }
    }
    .imgBox{
      width: 800px;
      height: auto;
      margin: 40px auto;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
     img{
       width: 100%;
       height: 100%;
       display: block;
     }
    }
    @media screen and (max-width: 1024px) {
      padding-bottom: 80px;
    }
  }
  .content2{
    padding-bottom:50px;
    @media screen and (max-width: 1024px) {
    }
    h4{
      margin: 110px 0 80px;
      font-size: 38px;
      @media screen and (max-width: 1024px) {
        font-size: 24px;
      }
    }
    ul{
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        width: 350px;
        margin-bottom: 80px;
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
        .topBox{
          text-align: center;
          border-bottom: 2px solid #c48b1c;
          .imgBox{
            width: 145px;
            margin:0 auto;
            @media screen and (max-width: 1024px) {
              width: 90%;
              height: auto;
            }
            .border{
              border: 4px solid #00a99d;
              border-radius: 50%;
              overflow: hidden;
              min-height: 135px;
            }
            img{
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
          }
          h5{
            font-size: 24px;
            color: #000;
            margin-top: 15px;
          }
          h6{
            font-size: 22px;
            color: @green;
            margin: 10px 0 25px;
            height: 22px;
            line-height: 22px;
          }
        }
        P{
          margin-top: 30px;
          color: #666;
          line-height: 1.8;
          font-size: 14px;
        }
      }
    }
  }
  .content3{
    display: none;
    padding-bottom: 100px;
    h4{
      margin: 100px 0 34px;
      font-size: 38px;
      @media screen and (max-width: 1024px) {
        font-size:24px;
      }
    }
    .wraper{
      &>p{
        color: #000;
        font-size: 16px;
        line-height: 2;
        @media screen and (max-width: 1024px) {
          font-size:16px;
        }
      }
    }
    .swiper_ul1{
      margin-top: 67px;
      display: block;
      @media screen and (max-width: 1024px) {
        display: none;
      }
      .swiperList{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
      }
    }
    .swiper_ul2{
      margin-top: 67px;
      display: none;
      @media screen and (max-width: 1024px) {
        display: block;

      }
      .swiperList{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        height: 550px;
      }
    }
    .slideBox{
      width: 25%;
      padding: 0 10px;
      margin-bottom: 30px;
      text-align: center;
      @media screen and (max-width: 1024px) {
        width: 49%;
        padding: 0 5px;
      }
      img{
        max-width: 100%;
        // display: block;
        // width: 100%;
        // height: auto;
        @media screen and (max-width: 1024px) {
          // height: auto;
          // width: 100%;
        }
      }
      h6{
        font-size: 16px;
        color: #000;
        margin-top: 20px;
        @media screen and (max-width: 1024px) {
          font-size: 12px;
          font-weight:bold;
          min-height: 36px;
        }
      }
      p{
        font-size: 12px;
        color: #000;
        @media screen and (max-width: 1024px) {
          font-size:12px;
          min-height: 36px;
        }
      }
    }

  }
  .content4{
    padding-bottom: 100px;
    h4{
      margin: 100px 0 34px;
      font-size:38px;
      @media screen and (max-width: 1024px) {
        font-size:24px;
      }
    }
    p{
      color: #000;
      font-size: 16px;
      line-height: 2;
      @media screen and (max-width: 1024px) {
        font-size:16px;
      }
    }
    #mEcharts{
      width: 100%;
      height: 500px;
    }
  }
  .content5{
    ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 130px 0 160px;
      li{
        width: 30%;
        text-align: center;
        @media screen and (max-width: 1024px) {
          width: 100%;
          margin-bottom: 50px;
        }
        .imgBox{
          width: 164px;
          height: 154px;
          margin: 0 auto;
        }
        h6{
          margin: 50px 0 28px;
          font-size: 20px;
          color: #000;
          font-weight:bold;
          height: 25px;
          line-height: 25px;
          .pc.en &{
            margin-bottom: 10px;
            min-height: 60px;
          }
        }
        p{
          font-size: 14px;
          line-height: 2 ;
          color: #666;
        }
      }
    }
    h4{
      margin-top: 76px;
      display: inline-block;
      padding: 0px 20px 34px;
      border-bottom: 1px solid #e6e7e8;
      font-size:38px;
    }
    h5{
      font-size: 20px;
      margin: 66px 0 45px;
    }
    &>p{
      text-align: center;
      width: 896px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 2;
      margin-bottom: 10px;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
    .imgBox{
      margin: 60px 0 140px;
      text-align: left;
      img{
        @media screen and (max-width: 1024px) {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .content6 {
    h4{
      margin: 75px 0;
    }
    p{
      text-align: left;
      font-size: 16px;
      line-height: 2;
      margin-bottom: 10px;
    }
    .imgBox{
      width: 100%;
      height: auto;
      margin: 70px 0 52px;
      img{
        width: 100%;
        &:nth-child(1) {
          display: block;
        }
        &:nth-child(2) {
          display: none;
        }
        @media screen and (max-width: 1024px) {
          width: 70%;
          margin: 0 auto;
          height: auto;
          &:nth-child(1) {
            display: none;
          }
          &:nth-child(2) {
            display: block;

          }
        }
      }
    }
    ul{
      display: none;
      @media screen and (max-width: 1024px) {
        display: block;
      }
      li{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
        font-size:12px;
        color: #000;
        line-height: 1.5;
        width: 100%;
        i{
          display: block;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #00a99d;
          text-align: center;
          line-height: 44px;
          font-size: 24px;
          font-weight: bold;
          color: #00a99d;
          margin-right: 20px;
        }
        span{
          flex: 1;
          display: block;
          text-align: left;
        }
      }
    }
  }
  .chart-wrap{
    width: 1200px;
    padding: 70px;
    margin: 80px auto 0;
    box-shadow: 0 0 10px rgba(0,0,0, .18);
    border-radius: 8px;
    .chart{
      &.mob{
        display: none;
      }
      position: relative;
      width: 1057px;
      margin: 0 auto;
      padding-left: 60px;
      .ar &{
        transform: rotateY(180deg);
        direction: ltr;
      }
      // background: url(~@img/about/chart_bg.png) no-repeat;
      .x{
        position: absolute;
        left: 0;
        top: 55px;
        .num{
          line-height: 1;
          margin-bottom:93px;
        }
      }
      .y{
        display: flex;
        line-height: 1;
        padding: 10px 0 0 0;
        margin-left: -19px;

        .num{
          margin-right: 158px;
          &:first-child{
            margin-right: 364px;
          }
          .ar &{
            transform: rotateY(180deg);
          }
        }
      }
      &-table{
        position: relative;
        border-left: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        height: 500px;
        &:after{
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: url(~@img/about/chart_line_pc.svg) no-repeat left bottom;
        }
        table{
          width: 1030px;
          margin: -50px 0 0 0;
        }
        td{
          border: 1px solid #d1d1d1;
          width: 103px;
          height: 110px;
        }
        tr{
          td:nth-child(1){
            position: relative;
            &:before{
              content: '';
              position: absolute;
              height: 1px;
              width: 5px;
              background: #d1d1d1;
              top: 50%;
              left: 0;
            }
          }
        }
      }
      .point{
        position: absolute;
        z-index: 2;
        .pc &:hover, .pc &.active{
          z-index: 3;
          .text{
            opacity: 1;
            visibility: visible;
            bottom: 30px;
            transition: .3s;
            z-index: 35;
          }
          i:after{
            background: #2ab9af;
          }
        }
      }
      i{
        padding: 10px;
        display: block;
        transform: translate(-50%,50%);
        &:after{
          content: '';
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid #2ab9af;
          background: #fff;
          display: block;
        }
      }
      .text{
        opacity: 0;
        z-index: 96;
        visibility: hidden;
        position: absolute;
        background: #2ab9af;
        border-radius: 4px;
        padding: 20px;
        font-size: 14px;
        width: 300px;
        color: #ffffff;
        bottom: 40px;
        left: 50%;
        margin-left: -166px;
        .ar &{
          transform: rotateY(180deg);
          direction: rtl;
        }
        &:after{
          content: '';
          position: absolute;
          border: 8px solid transparent;
          border-top-color: #2ab9af;
          bottom: -15px;
          left:50%;
          margin-left: -8px;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      width: auto;
      padding: 8% 0;
      margin: 80px 4% 0;
      box-shadow: 0 0 10px rgba(0,0,0, .18);
      border-radius: 8px;
      .chart{
        display: none;
        &.mob{
          display: block;
        }
        position: relative;
        width: 315px;
        height: 194px;
        margin: 0 auto;
        background: url(~@img/about/chart_mob.svg) no-repeat;
        background-size: 100%;
        .point{
          position: absolute;
          &.active{
            &:after{
              content: '';
              position: absolute;
              left: -6px;
              bottom: 2px;
              border: 6px solid transparent;
              border-top: 14px solid #2ab9af;
            }
            &.active i:after{
              background: #2ab9af;
            }
          }
        }
        i{
          padding: 10px;
          display: block;
          transform: translate(-50%,50%);
          &:after{
            content: '';
            box-sizing: border-box;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid #2ab9af;
            background: #fff;
            display: block;
          }

        }
        .text{
          left: 0;
          padding: 10px;
          margin: 0 -14px;
          width: 340px;
          &.active{
            opacity: 1;
            visibility: visible;
          }
          &:after{
            display: none;
          }
        }
      }
    }
  }

</style>
