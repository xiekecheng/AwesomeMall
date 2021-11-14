<template>
  <div class="login">
    <h1>登录页</h1>
    <div class="formLogin">
      <el-form ref="formLogin" :model="formLogin" class="demo-form-inline" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formLogin.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formLogin.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('formLogin')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
export default {
  setup() {
    const open1 = () => {
      ElMessage.error('账号或密码不能为空');
    };
    return {
      open1,
    };
  },
  data() {
    return {
      formLogin: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      // console.log('submit!');
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$emits('change-logstatus', true);
        } else {
          this.open1();
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin: 0 auto;
  text-align: center;
}
.formLogin {
  width: 600px;
  margin: 0 auto;
}
</style>
