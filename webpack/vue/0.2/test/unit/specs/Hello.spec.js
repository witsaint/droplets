import Vue from 'vue'
import Index from '@/views'
import 'babel-polyfill'

describe('index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.app h1').textContent)
      .to.equal('Welcome to JuFan')
  })
})
