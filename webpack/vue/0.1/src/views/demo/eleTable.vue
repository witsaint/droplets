<template>
  <section class="eleTable">
    <el-form :model="form" class="demo-form-inline">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="one"
        label="日期" >
        <template slot-scope="scope">
          <el-form-item  :prop="scope.$index + ''" :required="!!scope.row.two || !!scope.row.three"
            label-width="80px" label="搞不懂" >
            <el-input v-model="scope.row.one"></el-input>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column
        prop="two"
        label="姓名" >
        <template slot-scope="scope">
        <el-form-item label="">
          <el-input v-model="scope.row.two"></el-input>
        </el-form-item>
        </template>
      </el-table-column>
      <el-table-column
        prop="three"
        label="省份" >
        <template slot-scope="scope">
          <el-form-item label="">
            <el-input v-model="scope.row.three"></el-input>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="addCell" type="text" size="small">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-form>
  </section>
</template>

<script>
  export default {
    data () {
      var check = (rule, value, callback) => {
      }
      return {
        form: {
          '0': ''
        },
        tableData: [
          {one: 'dsa', two: '', three: ''}
        ],
        tem: {one: '', two: '', three: ''},
        rules: {
          '': [
            { validator: check, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      addCell () {
        this.tableData.push(this.tem)
        this.form[this.tableData.length - 1 + ''] = ''
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
.eleTable{

}
</style>
