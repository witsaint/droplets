<template>
  <menu>
    <el-menu :default-active="current" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             theme="dark"
             background-color="#282d33"
             text-color="#fff"
             active-text-color="#409EFF"
             :router="true">
      <template v-for="(item, index) in MenuList">
        <el-submenu :index="item.urlCode" :key="index" v-if="item.subMenu.length > 0">
          <template slot="title">{{item.name}}</template>
          <el-menu-item :index="''+sub.urlCode" v-for="sub in item.subMenu" :alt="sub.name" :key='sub.name'>{{sub.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="''+item.urlCode" :key="index" v-else>{{item.name}}</el-menu-item>
      </template>
    </el-menu>
  </menu>
</template>

<script>
  import api from '@/utils/api'
  export default {
    name: 'menu',
    data () {
      return {
        current: this.$route.path,
        MenuList: [{
          'urlCode': '/personalQueue',
          'name': '个人队列',
          'subMenu': []
        }, {
          'urlCode': '/search',
          'name': '查询',
          'subMenu': [{
            'urlCode': '/beachSearch',
            'name': '实时还款批量查询',
            'subMenu': []
          }, {
            'urlCode': '/colligateSearch',
            'name': '综合查询',
            'subMenu': []
          }, {
            'urlCode': '/workQualitySearch',
            'name': '作业质量查询',
            'subMenu': []
          }]
        }, {
          'urlCode': '/inboundSearch',
          'name': 'inbound查询',
          'subMenu': []
        }, {
          'urlCode': '/data',
          'name': '数据统计',
          'subMenu': [{
            'urlCode': '/personAnalysis',
            'name': '人员分析',
            'subMenu': []
          }, {
            'urlCode': '/dataStatistics',
            'name': '数据统计',
            'subMenu': []
          }]
        }, {
          'urlCode': '/manager',
          'name': '主管权限',
          'subMenu': [{
            'urlCode': '/manualEntrust',
            'name': '手工委托',
            'subMenu': []
          }, {
            'urlCode': '/personSearch',
            'name': '人员查询',
            'subMenu': []
          }
//           {
//            'urlCode': '/debitApproval',
//            'name': '扣款审批',
//            'subMenu': []
//          },
//            {
//            'urlCode': '/personSearch',
//            'name': '人员作业查询'
//          },
//          {
//            'urlCode': '/a rtificialConfig',
//            'name': '人工配置'
//          }
          ]
        }
        // , {
        //   'urlCode': '/classTable',
        //   'name': '班表',
        //   'subMenu': []
        // }, {
        //   'urlCode': '/report',
        //   'name': '报表系统',
        //   'subMenu': []
        // }, {
        //   'urlCode': '/setting',
        //   'name': '设置',
        //   'subMenu': []
        // }
        ]
      }
    },
    mounted: function () {
//    this.loadUserMenu()
//    this.handleOpen()
    },
    watch: {
      '$route': function (val) {
        this.current = val.path
      }
    },
    methods: {
      loadUserMenu () {
        api.loadUserMenu().then(response => {
          console.log(response.data.data)
          this.MenuList = response.data.data
        }).catch(error => { // Error
          if (error) {
          }
        })
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="less">
  menu {
    margin: 0;
    padding: 0;
    background: #324157;
    overflow: hidden;
    li {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 180px;
    }
  }
</style>
