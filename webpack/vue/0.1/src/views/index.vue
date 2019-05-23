<template>
  <main>
    <jf-header></jf-header>
    <div class="contentCenter">
      <div class="contentRight">
        <section v-if="$route.meta.keepAlive && ifKeep">
          <transition name="bounce" mode="out-in">
            <keep-alive>
              <router-view>
              </router-view>
            </keep-alive>
          </transition>
        </section>
        <section v-else>
          <transition name="bounce" mode="out-in">
            <router-view>
            </router-view>
          </transition>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
  import JfHeader from '@/components/header'
  import JfMenu from '@/components/menu'

  export default {
    data () {
      return {
        userName: localStorage.getItem('userName')
      }
    },
    components: {
      JfHeader,
      JfMenu
    },
    methods: {
      logout () {
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        this.$router.push('/login')
      }
    },
    mounted () {
      this.$el.onclick = () => {
        this.$store.commit('SET_MENU', false)
      }
    },
    computed: {
      excludeRouter: {
        get () {
          return this.$store.state.excludeRouter
        }
      },
      ifKeep: {
        get () {
          return this.$store.state.tabs.keep
        }
      }
    },
    watch: {
      excludeRouter (val) {
        console.info('changeRouter', val)
      },
      ifKeep (val) {
        if (!val) {
          this.$nextTick(() => {
            this.$store.commit('SET_KEEP', true)
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  main {
    width: 100%;
    // background-color: skyblue;
    box-sizing: border-box;
    position: relative;
  }

  header {
    box-shadow: 1px 1px 1px #20a0ff;
    background-color: #FFFFFF;
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    /*position: fixed;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*color: white;*/
  }

  .contentCenter {
    width: 100%;
    background: #282d33;
    position: fixed;
    top: 40px;
    bottom: 0;
    overflow: hidden;
    menu {
      width: 180px;
    }
    .contentRight {
      background: #fff;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 180px;
      padding: 0 15px 15px 15px;
      overflow-y: auto;
      .contentMain {
        min-height: 100%;
        box-shadow: 2px 1px 3px #aaaaaa;
      }
    }
  }

  .el-form-item {
    /*display: inline-block!important;// 为了查询输入框不占整行*/
  }

  .tr {
    text-align: right;
  }

  .bounce-enter-active {
    animation: bounce-in .3s;
  }

  .bounce-leave-active {
    animation: bounce-out .3s;
  }

  @keyframes bounce-in {
    0% {
      transform: translateY(80px);
      opacity: 0;
    }
    100% {
      transform: translateY(4);
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
