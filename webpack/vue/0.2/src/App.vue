<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Adopt from './Vue/Adopt'
  export default {
    name: 'app',
    mounted () {
//       初始化app
      window.app = {
        VUE: this,
        STORE: this.$store,
        ROUTER: this.$router,
        ADOPT: new Adopt({
          UIWidth: 750
        })
      }
      console.info(window.app.ADOPT.html_rem)
    },
    methods: {}
  }
</script>

<style lang='less'>
  @import './Vue/comment.less';
  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-out .5s;
  }

  @keyframes bounce-in {
    0% {
      transform: translateY(80px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bounce-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(80px);
      opacity: 0;
    }
  }
</style>
