<template>
  <section>
    <div class="title">登录</div>
    <div class="form-body">
      <div class="_row">
        <label class="label tc">用户名:</label>
        <div class="input-group">
          <div class="input-main"><input autocomplete="off" placeholder="请输入用户名" spellcheck="false" type="text"/></div>
          <div class="err-info">
            请输入正确的用户名
          </div>
        </div>
      </div>
      <div class="_row">
        <label class="label tc">密码:</label>
        <div class="input-group">
          <input autocomplete="off" placeholder="请输入密码" name="pas" spellcheck="false" type="hidden"/>
          <div class="input-main"><input autocomplete="off" name="pas" placeholder="请输入密码" spellcheck="false"
                                         type="password"/>
            <i :class="{'icon-yanjing-zhengkai': showPassword}" class="iconfont after-input "></i>
          </div>
          <div class="err-info">
            请输入正确格式的密码
          </div>
        </div>
      </div>
      <div class="button-black" @click="redirect"></div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'form',
    data () {
      return {
        showPassword: false
      }
    },
    methods: {
      redirect () {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="less" scoped>
  .title {
    background: linear-gradient(9deg, rgba(136, 241, 219, 1), rgba(61, 219, 196, 1));
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.34rem;
    text-align: center;
    color: white;
    letter-spacing: 0.1em;
  }

  .form-body {
    width: 100%;
    padding-top: 0.25rem;
    font-size: 0.32rem;
    color: #A8A8A8;
    ._row {
      margin-bottom: 0.15rem;
      height: 1.2rem;
      padding: 0 0.35rem;
      .label {
        width: 1.3rem;
        height: 0.8rem;
        float: left;
        line-height: 0.8rem;
      }
      .input-group {
        position: relative;
        margin-left: 1.3rem;
        height: 0.8rem;
        box-sizing: border-box;
        font-size: 0;
        padding: 0 15px 0 5px;
        .input-main {
          height: 0.8rem;
          line-height: 0.8rem;
          input {
            padding: 0 0.4rem;
            height: 0.8rem;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 0.8rem;
            width: 100%;
            font-size: 0.32rem;
            color: #1f1f1f;
            &:focus {
              border: 1px solid #007aff;
            }
          }
          .after-input {
            position: absolute;
            right: 0.3rem;
          }
        }
        .err-info {
          color: rgba(250, 0, 0, 0.7);
          padding-left: 0.4rem;
          font-size: 0.28rem;
          height: .5rem;
          line-height: 0.5rem;
        }
      }
    }
    .button-black {
      height: 1660px;
      background-color: black;
    }
  }
</style>
