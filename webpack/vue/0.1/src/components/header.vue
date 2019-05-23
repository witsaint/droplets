<template>
  <header>
    <div class="system-title" style="text-align: center">
      <strong>witsaint</strong>
    </div>
    <span class="head-content">
      <i class="iconfont icon-caidan menu-icon" :class="{'menu-icon-rotate': open}" @click="triggleMenu"></i>
      <span class="controller-nav">欢迎 {{userName}}<el-button type="text" @click="logout">退出</el-button></span>
    </span>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        userName: localStorage.getItem('username'),
        stopWork: '暂停工作',
        workStatus: true,
        open: true
      }
    },
    methods: {
      logout () {
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        this.$router.push('/login')
      },
      triggleMenu () {
        this.open = !this.open
      },
      pause () {
        if (this.workStatus) {
          localStorage.setItem('pause', +new Date())
          this.stopWork = '此单完成暂停工作'
          this.workStatus = false
        } else {
          localStorage.removeItem('pause')
          this.stopWork = '暂停工作'
          this.workStatus = true
        }
      }
    },
    components: {
    }
  }
</script>

<style lang="less">
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    /*padding: 5px 15px;*/
    line-height: 39px;
    background: #FFFFFF;
    color: rgba(0, 0, 0, 0.6);
    .system-title{
      font-family: 华文楷体;
      font-weight: 100;
      width: 180px;
      box-sizing: border-box;
      color: white;
      height: 100%;
      background-color: #282d33;
    }
    .head-content{
      width: ~'calc(100% - 180px)';
      text-align: justify;
      border-bottom: 1px solid #cfd8dc;
      .controller-nav{
        float: right;
      }
    }
    .menu-icon{
      cursor: pointer;
      margin-right: 5px;
      padding-right: 5px;
      border-right: 1px solid #dddddd;
      &:before{
        display: inline-block;
      }
    }
    .menu-icon-rotate:before{
      transform: rotate(90deg);
    }
    strong {
      padding: 0 10px;
      font-size: 20px;
    }
    span {
      padding: 0 10px;
      font-size: 15px;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
</style>
