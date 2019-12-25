<template>
  <div class="mainBox">
    <el-row :gutter="20" class="orderTitle">
      <!--辅助材料仓库-->
      <el-col :span="12.5">
        <b>
          <i class="el-icon-s-home"></i>
        </b>
        <span>
          <b>仓库信息</b>

        </span>

      </el-col>
      <el-col :span="5":offset="15">
        <b>合计金额:<!--{{//待写}}--></b> </el-col>
    </el-row>
    <!-- 仓库汇总 -->
    <el-table :data="dealerOrderInfo" border>
      <el-table-column type="index" label="No." align="center"></el-table-column>
      <el-table-column prop="orderId" label="仓库编号" align="center"></el-table-column>
      <el-table-column prop="orderSource" label="仓库名称" align="center"></el-table-column>
      <el-table-column prop="totalPrice" label="仓库类型" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-setting"
            @click="setCurrent(scope.row)"
          >编辑</el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="removed(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Rawmaterialwarehouse",
    mounted() {
      // 加载数据
      console.log("loading data.");
      // this.$ajax({
      //   method: "get",
      //   url: "http://localhost:8080/......"
      // }).then(response => {
      //   console.log(response.data);
      //   for (let i = 0; i < response.data.length; i++) {
      //     this.dealerOrderInfo.push(response.data[i]);
      //   }
      // });
    },
    data() {
      return {
        dealerOrderInfo: [],
        dialogCreateVisible: false,
        create: {
          orderId: "",
          orderSource: "",
          totalPrice: "",
          remark: ""
        }
      };
    }

  }
</script>



<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
