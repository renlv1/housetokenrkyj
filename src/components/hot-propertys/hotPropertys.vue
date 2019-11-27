<template>
  <div class="property">
    <div class="propertyCase">
      <h3 v-show="fromHome !== true">{{$t('property.text3')}} <span>{{$t('property.text60')}}</span></h3>
      <div class="odd house" v-show="(fromHome === true && showCaseIndex === 1) || fromHome !== true">
        <div class="wraper">
          <div class="case">
            <div class="left">
              <h5>{{propertyList[0].title}}</h5>
              <h6>{{propertyList[0].moreText}}</h6>
              <ul>
                <li>
                  <i>{{$t("property.text8")}}：</i><span>{{propertyList[0].msg1}}</span>
                </li>
                <li>
                  <i>{{$t("property.text9")}}：</i><span>{{propertyList[0].msg2}}</span>
                </li>
                <li>
                  <i>{{$t("property.text10")}}：</i><span>{{propertyList[0].msg3}}</span>
                </li>
                <li>
                  <i>{{$t("property.text11")}}：</i><span>{{propertyList[0].msg4}}</span>
                </li>
                <li>
                  <i>{{$t("property.text12")}}：</i><span>{{propertyList[0].msg5}}</span>
                </li>
                <!-- <li>
                  <i>{{$t("property.text13")}}：</i><span>{{propertyList[0].msg6}}</span>
                </li>
                <li>
                  <i>{{$t("property.text14")}}：</i><span>{{propertyList[0].msg7}}</span>
                </li> -->
              </ul>
            </div>
            <div class="right">
              <div class="imgBox">
                <img src="../../assets/images/about/short1.png" alt="">
              </div>
              <div class="address">{{propertyList[0].address}}</div>
              <div class="resident">
                <h4><span>{{$t("property.text15")}}</span></h4>
                <ul>
                  <li v-for="(item, index) in propertyList[0].inhabitant" :key="index">
                    <img :src="item.imgUrl" alt="">
                  </li>
                </ul>
              </div>
              <div class="btn">
               <!-- <a  :href="propertyList[0].report" :class="{'disable': propertyList[0].report === 'javascript:;' }" target="_blank" v-if="propertyList[0].report" >{{$t('property.text6')}}</a>-->
                <a :href="propertyList[0].handbook" :class="{'disable': propertyList[0].handbook === 'javascript:;' }" target="_blank" v-if="propertyList[0].handbook" >{{$t('property.text7')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="odd yard" v-show="(fromHome === true && showCaseIndex === 2) || fromHome !== true">
        <div class="wraper">
          <div class="case">
            <div class="left">
              <h5>{{propertyList[1].title}}</h5>
              <h6>{{propertyList[1].moreText}}</h6>
              <ul>
                <li>
                  <i>{{$t("property.text8")}}：</i><span>{{propertyList[1].msg1}}</span>
                </li>
                <li>
                  <i>{{$t("property.text9")}}：</i><span>{{propertyList[1].msg2}}</span>
                </li>
                <li>
                  <i>{{$t("property.text10")}}：</i><span>{{propertyList[1].msg3}}</span>
                </li>
                <li>
                  <i>{{$t("property.text11")}}：</i><span>{{propertyList[1].msg4}}</span>
                </li>
                <li>
                  <i>{{$t("property.text12")}}：</i><span>{{propertyList[1].msg5}}</span>
                </li>
                <!-- <li>
                  <i>{{$t("property.text13")}}：</i><span>{{propertyList[1].msg6}}</span>
                </li>
                <li>
                  <i>{{$t("property.text14")}}：</i><span>{{propertyList[1].msg7}}</span>
                </li> -->
              </ul>
            </div>
            <div class="right">
              <div class="imgBox">
                <img src="../../assets/images/about/short2.png" alt="">
              </div>
              <div class="address">{{propertyList[1].address}}</div>
              <div class="resident">
                <h4><span>{{$t("property.text15")}}</span></h4>
                <ul>
                  <li v-for="(item, index) in propertyList[1].inhabitant" :key="index">
                    <img :src="item.imgUrl" alt="">
                  </li>
                </ul>
              </div>
              <div class="btn">
                <!-- <a  :href="propertyList[1].report" :class="{'disable': propertyList[1].report === 'javascript:;' }"  target="_blank" v-if="propertyList[1].report" >{{$t('property.text6')}}</a>-->
                <a :href="propertyList[1].handbook" :class="{'disable': propertyList[1].handbook === 'javascript:;' }"  target="_blank" v-if="propertyList[1].handbook" >{{$t('property.text7')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="odd copthall" v-show="(fromHome === true && showCaseIndex === 3) || fromHome !== true">
        <div class="wraper">
          <div class="case">
            <div class="left">
              <h5>{{propertyList[2].title}}</h5>
              <h6>{{propertyList[2].moreText}}</h6>
              <ul>
                <li>
                  <i>{{$t("property.text8")}}：</i><span>{{propertyList[2].msg1}}</span>
                </li>
                <li>
                  <i>{{$t("property.text9")}}：</i><span>{{propertyList[2].msg2}}</span>
                </li>
                <li>
                  <i>{{$t("property.text10")}}：</i><span>{{propertyList[2].msg3}}</span>
                </li>
                <li>
                  <i>{{$t("property.text11")}}：</i><span>{{propertyList[2].msg4}}</span>
                </li>
                <li>
                  <i>{{$t("property.text12")}}：</i><span>{{propertyList[2].msg5}}</span>
                </li>
                <!-- <li>
                  <i>{{$t("property.text13")}}：</i><span>{{propertyList[2].msg6}}</span>
                </li>
                <li>
                  <i>{{$t("property.text14")}}：</i><span>{{propertyList[2].msg7}}</span>
                </li> -->
              </ul>
            </div>
            <div class="right">
              <div class="imgBox">
                <img src="../../assets/images/about/short3.png" alt="">
              </div>
              <div class="address">{{propertyList[2].address}}</div>
              <div class="resident">
                <h4><span>{{$t("property.text15")}}</span></h4>
                <ul>
                  <li v-for="(item, index) in propertyList[2].inhabitant" :key="index">
                    <img :src="item.imgUrl" alt="">
                  </li>
                </ul>
              </div>
              <div class="btn">
                <!--<a  :href="propertyList[2].report" target="_blank" v-if="propertyList[2].report" >{{$t('property.text6')}}</a>-->
                <a :href="propertyList[2].handbook" target="_blank" v-if="propertyList[2].handbook" >{{$t('property.text7')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="odd circus" v-show="(fromHome === true && showCaseIndex === 4) || fromHome !== true">
        <div class="wraper">
          <div class="case">
            <div class="left">
              <h5>{{propertyList[3].title}}</h5>
              <h6>{{propertyList[3].moreText}}</h6>
              <ul>
                <li>
                  <i>{{$t("property.text8")}}：</i><span>{{propertyList[3].msg1}}</span>
                </li>
                <li>
                  <i>{{$t("property.text9")}}：</i><span>{{propertyList[3].msg2}}</span>
                </li>
                <li>
                  <i>{{$t("property.text10")}}：</i><span>{{propertyList[3].msg3}}</span>
                </li>
                <li>
                  <i>{{$t("property.text11")}}：</i><span>{{propertyList[3].msg4}}</span>
                </li>
                <li>
                  <i>{{$t("property.text12")}}：</i><span>{{propertyList[3].msg5}}</span>
                </li>
                <!-- <li>
                  <i>{{$t("property.text13")}}：</i><span>{{propertyList[3].msg6}}</span>
                </li>
                <li>
                  <i>{{$t("property.text14")}}：</i><span>{{propertyList[3].msg7}}</span>
                </li> -->
              </ul>
            </div>
            <div class="right">
              <div class="imgBox">
                <img src="../../assets/images/about/short4.png" alt="">
              </div>
              <div class="address">{{propertyList[3].address}}</div>
              <div class="resident">
                <h4><span>{{$t("property.text15")}}</span></h4>
                <ul>
                  <li v-for="(item, index) in propertyList[3].inhabitant" :key="index">
                    <img :src="item.imgUrl" alt="">
                  </li>
                </ul>
              </div>
              <div class="btn">
                <!--<a  :href="propertyList[3].report" :class="{'disable': propertyList[3].report === 'javascript:;' }" target="_blank" v-if="propertyList[3].report" >{{$t('property.text6')}}</a>-->
                <a :href="propertyList[3].handbook" :class="{'disable': propertyList[3].handbook === 'javascript:;' }" target="_blank" v-if="propertyList[3].handbook" >{{$t('property.text7')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="odd jersey" v-show="(fromHome === true && showCaseIndex === 5) || fromHome !== true">
        <div class="wraper">
          <div class="case">
            <div class="left">
              <h5>{{propertyList[4].title}}</h5>
              <h6>{{propertyList[4].moreText}}</h6>
              <ul>
                <li>
                  <i>{{$t("property.text8")}}：</i><span>{{propertyList[4].msg1}}</span>
                </li>
                <li>
                  <i>{{$t("property.text9")}}：</i><span>{{propertyList[4].msg2}}</span>
                </li>
                <li>
                  <i>{{$t("property.text10")}}：</i><span>{{propertyList[4].msg3}}</span>
                </li>
                <li>
                  <i>{{$t("property.text11")}}：</i><span>{{propertyList[4].msg4}}</span>
                </li>
                <li>
                  <i>{{$t("property.text12")}}：</i><span>{{propertyList[4].msg5}}</span>
                </li>
                <!-- <li>
                  <i>{{$t("property.text13")}}：</i><span>{{propertyList[4].msg6}}</span>
                </li>
                <li>
                  <i>{{$t("property.text14")}}：</i><span>{{propertyList[4].msg7}}</span>
                </li> -->
              </ul>
            </div>
            <div class="right">
              <div class="imgBox">
                <img src="../../assets/images/about/short5.png" alt="">
              </div>
              <div class="address">{{propertyList[4].address}}</div>
              <div class="resident">
                <h4><span>{{$t("property.text15")}}</span></h4>
                <ul>
                  <li v-for="(item, index) in propertyList[4].inhabitant" :key="index">
                    <img :src="item.imgUrl" alt="">
                  </li>
                </ul>
              </div>
              <div class="btn">
                <!--<a  :href="propertyList[4].report" :class="{'disable': propertyList[4].report === 'javascript:;' }" target="_blank" v-if="propertyList[4].report" >{{$t('property.text6')}}</a>-->
                <a :href="propertyList[4].handbook" :class="{'disable': propertyList[4].handbook === 'javascript:;' }" target="_blank" v-if="propertyList[4].handbook" >{{$t('property.text7')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="odd jersey" v-show="(fromHome === true && showCaseIndex === 6) || fromHome !== true">
        <div class="wraper">
          <div class="case">
            <div class="left">
              <h5>{{propertyList[5].title}}</h5>
              <h6>{{propertyList[5].moreText}}</h6>
              <ul>
                <li>
                  <i>{{$t("property.text8")}}：</i><span>{{propertyList[5].msg1}}</span>
                </li>
                <li>
                  <i>{{$t("property.text9")}}：</i><span>{{propertyList[5].msg2}}</span>
                </li>
                <li>
                  <i>{{$t("property.text10")}}：</i><span>{{propertyList[5].msg3}}</span>
                </li>
                <li>
                  <i>{{$t("property.text11")}}：</i><span>{{propertyList[5].msg4}}</span>
                </li>
                <li>
                  <i>{{$t("property.text12")}}：</i><span>{{propertyList[5].msg5}}</span>
                </li>
                <!-- <li>
                  <i>{{$t("property.text13")}}：</i><span>{{propertyList[5].msg6}}</span>
                </li>
                <li>
                  <i>{{$t("property.text14")}}：</i><span>{{propertyList[5].msg7}}</span>
                </li> -->
              </ul>
            </div>
            <div class="right">
              <div class="imgBox">
                <img src="../../assets/images/about/short6.png" alt="">
              </div>
              <div class="address">{{propertyList[5].address}}</div>
              <div class="resident">
                <h4><span>{{$t("property.text15")}}</span></h4>
                <ul>
                  <li v-for="(item, index) in propertyList[5].inhabitant" :key="index">
                    <img :src="item.imgUrl" alt="">
                  </li>
                </ul>
              </div>
              <div class="btn">
                <!--<a :href="propertyList[5].report" :class="{'disable': propertyList[5].report === 'javascript:;' }" target="_blank" v-if="propertyList[5].report" >{{$t('property.text6')}}</a>-->
                <a :href="propertyList[5].handbook" :class="{'disable': propertyList[5].handbook === 'javascript:;' }" target="_blank" v-if="propertyList[5].handbook" >{{$t('property.text7')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--移动端-->
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: -1
    }
  },
  computed: {
    // 语言会动态改变，需要变成计算属性
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
  props: {
    showCaseIndex: {
      type: Number
    },
    fromHome: {
      type: Boolean
    }
  },
  mounted () {
    document.addEventListener('click', this.close)
    let index = this.$route.query.index
    if (index) {
      let el = document.querySelectorAll('.propertyCase .case')[parseInt(index)]
      el.scrollIntoView({behavior: 'smooth'})
    }
  },
  methods: {
    close () {
      this.tab = -1
    },
    // 移动端查看详情
    viewMoreApp (index) {
      console.log(index)
      this.tab = index
    },
    viewMore (index) {
      this.propertyList[index].dashedFlag = true
    },
    moreHide (index) {
      this.propertyList[index].dashedFlag = false
    }

  },
  destroyed () {
    document.removeEventListener('click', this.close)
  }
}
</script>
<style lang="less" type="text/less" scoped>
  @green:#00a99d;
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
      padding-top: 20px;
      @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
        display: block;
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
