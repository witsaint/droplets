<!-- <template>
<section>
  <h1>{{getTitle}}</h1>
  <jf-chart id="line" :series="series"></jf-chart>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import jfChart from './chart'

export default {
  data () {
    return {
      series: [{
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
          data: [{
            type: 'max',
            name: '最大值'
          }, {
            type: 'min',
            name: '最小值'
          }]
        },
        markLine: {
          data: [{type: 'average', name: '平均值'}]
        }
      }, {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{
            name: '周最低',
            value: -2,
            xAxis: 1,
            yAxis: -1.5
          }]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'},
            [{symbol: 'none', x: '90%', yAxis: 'max'}, {symbol: 'circle', label: { normal: {position: 'start', formatter: '最大值'} }, type: 'max', name: '最高点'}]
          ]
        }
      }]
    }
  },
  computed: {
    ...mapGetters(['getTitle'])
  },
  methods: {
    ...mapActions(['setTitle'])
  },
  mounted () {
    this.setTitle('首页')
  },
  components: {
    jfChart
  }
}
</script>

<style lang="less">
section {
  padding: 15px;
}
</style> -->
