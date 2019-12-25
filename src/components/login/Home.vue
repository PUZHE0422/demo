<template>
  <div class="homePage">
    <el-container class="leftContainer">
      <el-aside width="200px" style="background-color: #374355;width: 200px;">
        <div style="margin-top: 20px;margin-bottom: 20px;color:#ffffff;text-align:center;">
          <span class="title">欢迎</span>
        </div>
        <hr>
        <el-menu
          style="background-color: #374355;width: 202px;"
          text-color="#9BA1AA"
          active-text-color="#47A1F8"
          unique-opened
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>员工管理
            </template>

            <div style="background-color: #1c2738">
              <el-submenu index="1-1">
                <template slot="title">仓库类型</template>
                <div style="background-color: #011327">
                  <router-link to="/Warehouse/Rawmaterialwarehouse">
                    <el-menu-item index="1-1-1">原材料仓库</el-menu-item>
                  </router-link>
                  <router-link to="/Warehouse/Semifinishedwarehouse">
                    <el-menu-item index="1-1-2">半成品仓库</el-menu-item>
                  </router-link>
                  <router-link to="/Warehouse/Finishedgoodswarehouse">
                    <el-menu-item index="1-1-2">成品仓库</el-menu-item>
                  </router-link>
                  <router-link to="/Warehouse/Auxiliarymaterialwarehouse">
                    <el-menu-item index="1-1-2">辅助材料仓库</el-menu-item>
                  </router-link>
                </div>
              </el-submenu>

              <el-submenu index="1-2">
                <template slot="title">合同信息</template>
                <div style="background-color: #011327">
                  <router-link to="/ContractInformation/ContractInformation">
                    <el-menu-item index="1-2-1">采购合同信息</el-menu-item>
                  </router-link>
                  <router-link to="/ContractInformation/AddContractInformation">
                    <el-menu-item index="1-2-1">增加合同信息</el-menu-item>
                  </router-link>
                </div>
              </el-submenu>
            </div>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧 -->
      <el-container class="rightContainer">
        <!-- 顶部 -->
        <el-header class="headerContainer">
          <el-badge :max="10" class="item" style="margin-top: 10px;margin-right: 20px;">
            <el-button size="middle" @click="logOut">注销</el-button>
          </el-badge>
        </el-header>

        <!-- 页面内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .homePage {
    display: flex;
    border: 1px solid #eee;
    margin: 0;
    min-height: 700px;
  }
  .leftContainer {
    flex: 2;
  }
  .rightContainer {
    flex: 8;
    background-color: #eeeeee;
  }

  .rightContainer .headerContainer {
    text-align: right;
    font-size: 12px;
    height: 65px;
    vertical-align: middle;
  }
</style>
