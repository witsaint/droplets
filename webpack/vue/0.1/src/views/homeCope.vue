<template>
  <section>
  <!--<div>this is home page</div>-->
    <div class="interface"><el-input v-model="input"  placeholder="请输入接口"></el-input><el-button @click="request">请求</el-button></div>
    <!--<div><el-input v-model="params"  placeholder="请输入接口"></el-input></div>-->
    <div>{{response}}</div>
    <!--<img id="demo" src="https://login.weixin.qq.com/qrcode/wbQ1dnRurg==">-->
    <!--<img id="imgData" >-->
    <!--<img :src="imgData">-->
    <!--<a class="down" id="down" download="w3logo"></a>-->
    <!--<canvas id="canvas"></canvas>-->
    <!--<el-button @click="down">下载</el-button>-->
  </section>
</template>

<script>
  import axios from '@/utils/axios'
  // import html2canvas from 'html2canvas'
  export default {
    name: 'home',
    data () {
      return {
        input: '',
        response: '',
        imgData: ''
      }
    },
    methods: {
      request () {
        axios.post('/t/' + this.input, {'firstName': '八卦哦'}).then(res => {
          this.response = res
        }).catch(err => {
          this.response = err
        })
      },
      convertImageToCanvas (image) {
        // 创建canvas DOM元素，并设置其宽高和图片一样
        // var canvas = document.createElement('canvas')
        var ca = document.getElementById('canvas')
        ca.width = image.width
        ca.height = image.height
        // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
        ca.getContext('2d').drawImage(image, 0, 0, 290, 290)
        return ca
      },
      getImgByXhr () {
        var url = 'https://login.weixin.qq.com/qrcode/oZGEWhR0Hg=='
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.responseType = 'blob'
        // xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.onload = function () {
          console.info(this.status)
          if (this.status === 200) {
            var blob = this.response
            console.info(blob)
            // var img = document.createElement('img')
            var img = document.getElementById('imgData')
            img.onload = function (e) {
              window.URL.revokeObjectURL(img.src)
            }
            img.src = window.URL.createObjectURL(blob)
          }
        }
        xhr.error = function (err) {
          console.info(err)
        }
        xhr.send()
      },
      down () {
        // let img = new Image()
        // img.src = 'https://login.weixin.qq.com/qrcode/wakk_lMcZQ=='
        let that = this
        // img.onload = function (img) {
        //   canvas = that.convertImageToCanvas(img)
        //   that.imgData = canvas.toDataURL('image/png')
        // }
        let imgDemo = document.getElementById('demo')
        that.convertImageToCanvas(imgDemo)
        // that.imgData = document.getElementById('canvas').toDataURL('image/png')
        this.getImgByXhr()
        // html2canvas(document.getElementById('demo'), {
        //   canvas: document.getElementById('demo'),
        //   useCORS: true,
        //   logging: true
        // }).then(can => {
        //   console.info(can)
        //   document.querySelector('.down').setAttribute('href', can.toDataURL())
        //   document.getElementById('down').click()
        // })
      }
    }
  }
</script>

<style lang="less" scoped>
.interface{
  width: 100%;
  text-align: center;
}
</style>
