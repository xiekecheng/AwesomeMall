<template>
  <div style="height: 100%">
    <login v-if="!isLogin" @change-logstatus="changeLogStatus" />
    <el-container v-else>
      <el-aside width="none"><Sider /></el-aside>
      <el-container>
        <el-header><my-header /></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sider from './components/Sider.vue';
// import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Login from '@/views/Login/index.vue';
export default {
  components: {
    Sider,
    'my-header': Header,
    Login,
  },
  setup() {
    return {};
  },
  data() {
    return {
      isLogin: false,
    };
  },
  created() {},
  methods: {
    changeLogStatus(flag) {
      console.log('flag', flag);
      this.isLogin = flag;
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

body > .el-container {
  margin-bottom: 40px;
}
.el-container {
  height: 100%;
}
</style>
<style lang="scss" scoped></style>
