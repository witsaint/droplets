<template>
  <section class="home-view">
    <div class="bg"></div>
    <div class="content-nav">
      <div class="base-info">
        <div class="info-item one">
          <p>Strong psychology</p>
        </div>
        <div class="info-item two">
          <p>To strive for progress with determination</p>
        </div>
        <div class="info-item three">
          <p>
            Never be discouraged
          </p>
        </div>
        <div class="info-item four">
          <div>
            author:<br/>var
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import dataSvg from '@/assets/svgdataA'
  import demoApi from '@/api/demo'
  export default {
    name: 'home',
    data () {
      return {
        input: '',
        response: '',
        imgData: ''
      }
    },
    methods: {},
    mounted () {
      // let data = 'test=12&demo=12&demo=35'
      demoApi.testArray({
        test: 12,
        demo: [12, 35]
      }).then(res => {
        console.info(res)
      })
      console.info(dataSvg)
    }
  }
</script>

<style lang="less" scoped>
  .home-view {
    width: 100%;
    height: 100%;
    .bg{
      width: 100%;
      height: 100%;
      background-image: url("../assets/moutent.jpg");
      background-repeat: no-repeat;
      background-size: auto 100%;
      filter: blur(1px);
    }
    .content-nav{
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background: rgba(200, 200, 200, 0.1);
      .base-info{
        margin: auto;
        margin-top: 4%;
        width: 700px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .info-item{
          margin-bottom: 8px;
          cursor: pointer;
          width: 330px;
          height: 350px;
          background: rgba(255, 255, 255, .8);
          border-radius: 5px;
          box-shadow: 1px 3px 4px rgba(50, 50, 50, .4);
          transition: 0.3s;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          font-size: 18px;
          color: white;
          text-align: center;
          div{
            width: 100%;
          }
          &:hover{
            /*background: rgba(255, 255, 255, 1);*/
            box-shadow: 5px 19px 16px rgba(50, 50, 50, .3);
            transform:perspective(500px) rotatey(0deg);
          }
        }
        .one{
          background: rgba(239, 94, 74, 0.8);
        }
        .two{
          background: rgba(46, 56, 66, .8);
        }
        .three{
          background: rgba(81, 202, 159, 0.8);
        }
        .four{
          background: rgba(248, 230, 230, 0.8);
        }
      }
    }
  }
</style>
