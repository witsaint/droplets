<template>
  <section class="picker-demo">
    <ui-button type="default" @click="issuerPicker = true" plain>按钮</ui-button>
    <ui-switch v-model="renders"></ui-switch>
    <ui-switch v-model="picker2"></ui-switch>
    <!-- 发卡行 -->
    <ui-picker :show.sync="issuerPicker"
               v-if="renders"
               :data="banks"
               :header="true"
               @cancel="cancel"
               @confirm="confirm"
               v-model="issuerPickerV"
               @on-change="issuerChange"></ui-picker>
    <ui-picker :show.sync="picker2" :data="area"></ui-picker>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        issuerPicker: true,
        issuerPickerV: ['1111'],
        banks: [[1, 2, 3]],
        renders: true,
        picker2: false,
        area: [['上海']]
      }
    },
    methods: {
      cancel (event) {
        console.info(event)
      },
      confirm (value, event) {
        console.info(event)
      },
      issuerChange () {}
    },
    mounted () {
    }
  }
</script>

<style lang="less">
.picker-demo{

}
</style>
