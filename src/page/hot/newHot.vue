<template>
  <div class="newHot-wrap">
    <div class="main">
      <div class="banner" :style="`background: url(${require(`../../assets/images/home/banner_${$lang}.jpg`)}) center top no-repeat`"></div>
      <div class="content">
        <div class="area-one">
          <div class="li-l">
            <div class="tit">{{$t('newHOt.text1')}}</div>
            <div class="hr"></div>
            <div class="text-p" v-for="(item,index1) in this.$t('newHOt.challengeDatas')" :key="index1">
              <div class="icon"></div>
              <div class="text">{{item.text}}</div>
            </div>
          </div>
          <div class="li-l">
            <div class="tit">{{$t('newHOt.text2')}}</div>
            <div class="hr"></div>
            <div class="text-p" v-for="(item,index2) in this.$t('newHOt.opportunityDatas')" :key="index2">
              <div class="icon"></div>
              <div class="text">{{item.text}}</div>
            </div>
          </div>
        </div>
        <div class="area-two">
          <div class="tit">{{$t('newHOt.text3')}}</div>
          <div class="hr"></div>
          <div class="list-box">
            <div class="li" v-for="(item,index3) in this.$t('newHOt.workDatas')" :key="index3">
              <div class="icon">{{item.num}}</div>
              <div class="text">{{item.text}}</div>
            </div>
          </div>
        </div>
        <div class="area-three">
          <div class="tit">{{$t('newHOt.text4')}}</div>
          <div class="hr"></div>
          <div class="list-clause">
            <div class="li">
              <div class="info-box" v-for="(item,index4) in this.$t('newHOt.clauseListl')" :key="index4">
                <div class="icon"></div>
                <div class="tit">{{item.tit}}:</div>
                <div class="text">{{item.text}}</div>
              </div>
            </div>
            <div class="li">
              <div class="info-box" v-for="(item,index5) in this.$t('newHOt.clauseListr')" :key="index5">
                <div class="icon"></div>
                <div class="tit">{{item.tit}}:</div>
                <div class="text">{{item.text}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="area-four">
          <div class="tit">{{$t('newHOt.text5')}}</div>
          <div class="hr"></div>
          <div class="list-imgs">
            <div class="li"><img :src="require(`../../assets/images/new_hot/four_01_${$lang}.svg`)" alt=""></div>
            <div class="li"><img :src="require(`../../assets/images/new_hot/four_02_${$lang}.svg`)" alt=""></div>
            <div class="li"><img :src="require(`../../assets/images/new_hot/four_03_${$lang}.svg`)" alt=""></div>
            <div class="li"><img :src="require(`../../assets/images/new_hot/four_04_${$lang}.svg`)" alt=""></div>
            <!--<div class="li"><img src="../../assets/images/new_hot/four_01_CN.svg" alt=""></div>
            <div class="li"><img src="../../assets/images/new_hot/four_02_CN.svg" alt=""></div>
            <div class="li"><img src="../../assets/images/new_hot/four_03_CN.svg" alt=""></div>
            <div class="li"><img src="../../assets/images/new_hot/four_04_CN.svg" alt=""></div>-->
          </div>
        </div>
        <div class="area-five">
          <div class="tit">{{$t('newHOt.text6')}}</div>
          <div class="hr"></div>
          <div class="text-p">{{$t('newHOt.text7')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      challengeDatas: [
        {
          text: '法币以国家进行价值背书，却有超发，通货膨胀，贬值，汇率风险等弊端'
        },
        {
          text: '虚拟货币具有世界流通性却没有坚实价值背书'
        },
        {
          text: '房产投资是好的对冲通货膨胀，储存财富的手段，但房地产的种类繁多，各类地产风险和收益各有不同，投资有法律，金融，宏观经济等等知识壁垒。'
        },
        {
          text: '跨边界地产交易壁垒重重，使得全球投资地产的资金和项目不能全球化联通匹配。'
        },
        {
          text: '全球房地产市场，可承载价值体量巨大，但普遍无流动性。'
        }
      ],
      opportunityDatas: [
        {
          text: '区块链技术的诞生，赋予了信息的去中心化，信息的透明化，上链信息的不可篡改属性，以及信息的安全存储功能。技术的进步，催生生产力的提高，HOT 是随技术更新而诞生，以解决问题来创造价值。'
        },
        {
          text: 'HOT结合投资地产的优势功能，解决法币和虚拟货币弊端，具有保值和世界流通性，构建应用场景和交易生态。'
        },
        {
          text: '核心商业地产是HOT的价值背书，目标是以HOT联通世界优质地产，建立新的数字化，信息透明，无国界的高效率房地产市场。'
        }
      ],
      workDatas: [
        {
          num: '1',
          text: '投资人开投资账户，进行KYC审核'
        },
        {
          num: '2',
          text: '认购资产背书的数字化通证HOT，享受每月5%分红'
        },
        {
          num: '3',
          text: '通证融资购买HOT母公司地产夹层基金获得投资回报'
        },
        {
          num: '4',
          text: '母公司地产基金继续投资地产，增加夹层基金发行规模'
        },
        {
          num: '5',
          text: 'HOT根据母基金增发规模配额增发'
        },
        {
          num: '6',
          text: 'HOT团队为其它地产数字通证发行提供技术和金融服务，打造地产通证交易生态。'
        },
        {
          num: '7',
          text: '通过监管合规，建立HOT二级市场交易平台，实现无国界数字化地产交易市场'
        }
      ],
      clauseListl: [
        {
          tit: '发行方',
          text: 'HouseToken Limited (UK)'
        },
        {
          tit: '发行规模',
          text: ' 50,000,000 英镑'
        },
        {
          tit: '最小投资额',
          text: ' 100,000 英镑'
        },
        {
          tit: '担保',
          text: '母公司夹层基金担保'
        }
      ],
      clauseListr: [
        {
          tit: '通证固息',
          text: '   5%'
        },
        {
          tit: '到期条款',
          text: ' 可无限续存，或到期赎回'
        },
        {
          tit: '赎回条款',
          text: '100%赎回需要在到期日前6个月通知。每第一年底，第三年底，第五年底为到期日。'
        }
      ]
    }
  },
  components: {},
  computed: {},
  created () {},
  mounted () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  // 公共标题和boder
  .comm-tit-hr{
    .tit{
      font-size: 34px;
      color: #00a99d;
      @media screen and (max-width: 1200px){
        text-align: center;
      }
      @media screen and (max-width: 768px){
        font-size: 29px;
      }
    }
    .hr{
      width: 100%;
      height: 2px;
      background-color: #bbb;
      margin-top: 36px;
    }
  }
  .newHot-wrap{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .main{
      .banner{
        width: 100%;
        height: 500px;
        /*background-image: url("../../assets/images/home/banner_cn.jpg");*/
        background-size: cover !important;
        background-repeat: no-repeat;
        background-position: center;
        @media screen and (max-width: 1024px){
          height: 260px;
        }
      }
      .content{
        width: 1110px;
        margin: 0 auto;
        @media screen and (max-width: 1110px){
          width: 100%;
        }
        @media screen and (max-width: 1024px){
          padding: 0 20px;
        }
        .area-one{
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 100px 0 120px;
          @media screen and (max-width: 1200px){
            display: block;
          }
          .li-l{
            width: 476px;
            @media screen and (max-width: 1200px){
              margin: 0 auto;
            }
            @media screen and (max-width: 768px){
              width: 100%;
            }
            .tit{
              font-size: 34px;
              color: #00a99d;
              @media screen and (max-width: 1200px){
                text-align: center;
              }
              @media screen and (max-width: 768px){
                font-size: 29px;
              }
            }
            .hr{
              width: 150px;
              height: 2px;
              background-color: #bbb;
              margin: 40px 0;
              @media screen and (max-width: 1200px){
                margin: 40px auto;
              }
            }
            .text-p{
              width: 100%;
              line-height: 1.5;
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              padding-bottom: 40px;
              .icon{
                width: 16px;
                height: 16px;
                background-color: #00a99e;
                margin-right: 10px;
                margin-top: 5px;
                @media screen and (max-width: 768px){
                  width: 12px;
                  height: 12px;
                }
              }
              .text{
                flex: 1;
                font-size: 16px;
                color: #333;
              }
            }
          }
        }
        .area-two{
          .comm-tit-hr;
          .list-box{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-flow: wrap;
            padding-bottom: 70px;
            padding-top: 50px;
            @media screen and (max-width: 768px){
              display: block;
            }
            .li{
              /*flex: 1;*/
              width: 25%;
              height: 190px;
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              padding-right: 30px;
              @media screen and (max-width: 1200px){
                width: 50%;
                height: 120px;
                justify-content: center;
                padding-right: 0;
                padding-bottom: 40px;
              }
              @media screen and (max-width: 768px){
                width: 100%;
                height: auto;
                justify-content: flex-start;
                padding-bottom: 20px;
              }
              /*&:nth-child(5){
                height: 120px;
                @media screen and (max-width: 768px){
                  height: auto;
                }
              }*/
              .icon{
                width: 28px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                background-color: #fff;
                border: 1px solid #00a99e;
                border-radius: 100%;
                font-size: 16px;
                color: #00a99e;
                margin-right: 10px;
                @media screen and (max-width: 768px){
                  width: 18px;
                  height: 18px;
                  line-height: 18px;
                  font-size: 14px;
                  margin-top: 3px;
                }
              }
              .text{
                width: 216px;
                font-size: 16px;
                color: #333;
                line-height: 1.5;
                @media screen and (max-width: 1200px){
                  width: 400px;
                }
                @media screen and (max-width: 768px){
                  width: auto;
                  flex: 1;
                }
              }
            }
          }
        }
        .area-three{
          width: 100%;
          .comm-tit-hr;
          .list-clause{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 40px 0 90px;
            @media screen and (max-width: 1024px){
              display: block;
            }
            .li{
              flex: 1;
              height: 220px;
              @media screen and (max-width: 768px){
                width: 100%;
                height: auto;
              }
              .info-box{
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                padding-bottom: 30px;
                @media screen and (max-width: 768px){
                  width: 100%;
                  display: block;
                }
                .icon{
                  width: 16px;
                  height: 16px;
                  background-color: #00a99e;
                  margin-right: 10px;
                  margin-top: 3px;
                  @media screen and (max-width: 768px){
                    display: none;
                  }
                }
                .tit{
                  width: 160px;
                  font-size: 16px;
                  color: #00a99e;
                  text-align: left;
                  @media screen and (max-width: 768px){
                    width: auto;
                    text-align: center;
                  }
                }
                .text{
                  flex: 1;
                  font-size: 16px;
                  color: #333;
                  line-height: 1.5;
                  @media screen and (max-width: 768px){
                    width: auto;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        .area-four{
          .comm-tit-hr;
          .list-imgs{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 60px 0 120px;
            @media screen and (max-width: 1024px){
              display: block;
            }
            .li{
              @media screen and (max-width: 1024px){
                margin: 0 auto 80px;
              }
              margin-right: 60px;
              img{
                width: 100%;
                height: 100%;
              }
              &:nth-child(1){
                width: 200px;
                height: 196px;
              }
              &:nth-child(2){
                width: 169px;
                height: 198px;
              }
              &:nth-child(3){
                width: 200px;
                height: 198px;
              }
              &:nth-child(4){
                width: 298px;
                height: 149px;
                @media screen and (max-width: 375px){
                  width: 100%;
                }
              }
            }
          }
        }
        .area-five{
          .comm-tit-hr;
          .text-p{
            font-size: 16px;
            color: #333;
            line-height: 1.5;
            padding: 40px 0 120px;
          }
        }
      }
    }
  }
</style>
