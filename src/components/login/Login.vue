<template>
<div>
  <el-row :gutter="20">
    <el-col :span="6" :offset="8">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item>
          <el-input placeholder="用户名" v-model="loginForm.username" ></el-input>
          <el-input placeholder="密码" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="createOrder">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          return{
            loginForm: {
              username: "",
              password: ""
            },
          }
        },
        methods: {
          open() {
            this.$message('这是一条消息提示');
          },
          open2() {
            this.$message({
              showClose: true,
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          },
          createOrder() {
            this.$ajax({
              method:'get',
              url:'http://localhost:8085/user/login',
              params: {
                name: this.loginForm.username,
                password: this.loginForm.password
              }
             }).then(response => {
               console.log(response);
               if (response.data == "success"){
                 this.open2();
                 this.$router.push('/home');
               }
              })
              .catch(function(error) {
                console.log("save failed！");
              });
          }
        }
    }
</script>

<style scoped>

</style>
