<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button v-if="isCollapse" :label="false">展开</el-radio-button>
      <el-radio-button v-else :label="true">关闭</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>图表页面</span>
        </template>
        <!-- <router-link to="/charts"></router-link>
					<el-menu-item index="1-1">图表</el-menu-item>
				</router-link> -->
        <router-link to="/charts">
          <el-menu-item index="1-1">图表</el-menu-item>
        </router-link>
        <router-link to="/mall">
          <el-menu-item index="1-2">商城</el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </router-link>
        <router-link to="/">
          <el-menu-item index="1-3">item three</el-menu-item>
        </router-link>
      </el-sub-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>用户信息</template>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Excel页面</span>
        </template>
        <router-link to="/excel">
          <el-menu-item index="3-1">导出Excel</el-menu-item>
        </router-link>
      </el-sub-menu>
      <!-- <el-menu-item index="3">
				<i class="el-icon-document"></i>
				<template #title>Navigator Three</template>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<template #title>Navigator Four</template>
			</el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isCollapse = ref(true);
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<!-- <style lang="scss" scoped></style> -->
