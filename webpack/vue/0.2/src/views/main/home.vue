<template>
  <section ref="home" class="home">
    <div class="top-group">
      <div class="top-rotate"></div>
      <i class="icon iconfont icon-v logo"></i>
      <div class="top-nav tc bk-white">@vit gao</div>
    </div>
    <div class="banner-group img-back">
      <div class="ban-main fcw">
        <p class="tc lg-info">Don't Doubt Your Abilities</p>
        <p class="tc lg-info">Trust Yourself</p>
      </div>
      <div>
      </div>
    </div>
    <i ref="fix-top"></i>
    <div class="menu-group" :class="{ 'fixTop' : fixEnum}">
      <ul class="enum-ul">
        <li class="tc fcw fr" @click="itemToggle"><i class="icon iconfont icon-caidan enum-icon "
                                                     :class="{ 'enum-active': itemShow}"></i></li>
        <li :class="{show: itemShow}" class="tc fcw fr enum-item">up</li>
        <li :class="{show: itemShow}" class="tc fcw fr enum-item">what's</li>
        <li :class="{show: itemShow}" class="tc fcw fr enum-item">so</li>
      </ul>
    </div>
    <div class="desc">
      <div class="part-nav">
        <div class="part-line">SO</div>
      </div>
      <div class="mark-group">
        <div v-for="(info, index) in markInfo" :key="index" class="tc mark-far">
          <div class="mark">
            <p>{{info.en}}</p>
            <p class="mark-ch">{{info.ch}}</p>
          </div>
        </div>
      </div>
      <div class="text-info">
        <div class="part-nav">
          <div class="part-line fcw">What's</div>
        </div>
        <div class="article fcw">
          <div class="last-page tc">
            青春之诗
          </div>
          <div class="this-page">
            <p>青春是一首</p>
            <p>永不言败的歌</p>
            <p>青春是一条</p>
            <p>永不停息的河流</p>
            <p>青春是一本</p>
            <p>读不厌的书</p>
            <p>青春是一杯</p>
            <p>品不尽的茶</p>
            <p>青春是一座</p>
            <p>屹立在民族之林的高峰</p>
            <p>刻印千千万万青年的足迹</p>
          </div>
        </div>
      </div>
      <div class="my-info">
        <div class="part-nav">
          <div class="part-line">up</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        fixEnum: false,
        itemShow: false,
        markInfo: [
          {en: 'Young', ch: '年轻'},
          {en: 'vitality', ch: '活力'},
          {en: 'ardour', ch: '激情'},
          {en: 'diligence', ch: '勤奋'}
        ]
      }
    },
    activated () {
      console.info('s')
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll (event) {
        if (window.scrollY > (4.6 * window.app.ADOPT.html_rem)) {
          this.fixEnum = true
        } else {
          this.fixEnum = false
        }
      },
      itemToggle () {
        this.itemShow = !this.itemShow
      }
    }
  }
</script>

<style lang="less">
  .home {
    .fcw {
      color: white;
    }
    .top-group {
      position: relative;
      width: 100%;
      height: 0.60rem;
    }
    .top-rotate {
      width: 1rem;
      height: 0.6rem;
      position: absolute;
      transform: rotate(7deg);
      background-color: rgba(242, 86, 121, 1);
      z-index: 40;
    }
    .top-nav {
      width: 100%;
      font-size: 0.24rem;
      background-color: rgba(245, 108, 140, 1);
      height: 0.60rem;
      line-height: 0.60rem;
      color: white;
      box-shadow: 3px 2px 2px rgba(245, 108, 140, 0.5);
      z-index: 1;
    }
    .logo {
      position: absolute;
      color: white;
      z-index: 41;
      font-size: 0.32rem;
      left: 0.3rem;
      line-height: 0.6rem;
    }
    .banner-group {
      height: 4.0rem;
      &.img-back {
        background-image: url(../../assets/image/on1-bg.jpg);
        background-size: cover;
        /*background-attachment: fixed;*/
        background-repeat: no-repeat;
      }
      .ban-main {
        padding-top: 15%;
        .lg-info {
          margin-bottom: 0.15rem;
          font-size: 0.24rem;
        }
      }
    }
    .menu-group {
      background: #333;
      height: 0.58rem;
      .enum-ul {
        font-size: 0;
        padding-left: 0;
        li {
          font-size: 28px;
          list-style: none;
          display: inline-block;
          width: 1.6rem;
          line-height: 0.50rem;
        }
        .enum-item {
          transition: opacity 0.8s;
          opacity: 0;
        }
        .enum-icon {
          font-size: 28px;
        }
        .enum-active {
          color: #e66f69;
        }
        .show {
          opacity: 1;
        }
      }
    }
    .fixTop {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
    }
    .desc {
      .part-nav {
        height: 0.35rem;
        line-height: 0.35rem;
        width: 100%;
        text-align: center;
        position: relative;
        margin-bottom: 25px;
        .part-line {
          color: #a5a5a5;
          &:before, &:after {
            vertical-align: middle;
            content: ' ';
            display: inline-block;
            width: 30%;
            border-top: 1px solid #a5a5a5;
          }
          &:before {
            margin-right: 20px;
          }
          &:after {
            margin-left: 20px;
          }
        }
      }
      .mark-group {
        width: 4.5rem;
        margin: 0 auto;
        /*max-width: 400px;*/
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .mark-far {
          height: 2rem;
          width: 50%;
          display: inline-flex;
          justify-content: center;
          .mark {
            height: 1.5rem;
            width: 1.5rem;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 50%;
            font-size: 0.32rem;
            border: 1px solid #b5b5b5;
            .mark-ch {
              font-size: 21px;
            }
          }
        }
      }
      .text-info {
        background: rgba(0, 0, 0, 0.7);
        min-height: 2rem;
        padding-bottom: 0.4rem;
        .article {
          display: flex;
          position: relative;
          .last-page {
            width: 2rem;
            height: 2rem;
            border-right: 1px solid #dddddd;
            &:before, &:after {
              content: ' ';
              top: -0.2rem;
              border-color: #ffffff;
              border-style: solid;
              border-width: 1px 0 0 0;
              position: absolute;
              padding-top: 0.4rem;
              border-radius: 100% 100% 100% 0;
              display: block;
            }
            &:before {
              width: 2rem;
              left: 0;
            }
            &:after {
              width: 4rem;
              left: 2rem;
            }
          }
          .this-page {
            width: 4rem;
            p {
              display: block;
              /*border-bottom: 1px dashed rgba(221, 221, 221, 0.4);*/
              font-family: "楷体", "楷体_GB2312";
              padding-left: 0.3rem;
              letter-spacing: 0.3em;
            }
          }
        }
      }
      .my-info {
        background: url(../../assets/image/banner.jpg);
        .my-icon {
          width: 100%;
          height: 2rem;
          .icon {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            background: url(../../assets/image/my.jpg) no-repeat;
            background-position: 50%;
            background-size: cover;
            border-radius: 50%;
            filter: blur(3px);
          }
        }
      }
    }
  }
</style>
