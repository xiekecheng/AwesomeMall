<template>
  <div>
    <h1>Dialog弹窗测试</h1>
    <el-button type="primary" @click="showDialog">对话框</el-button>
		<my-dialog ref="myDialog"/>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue';
export default {
  components: {
    MyDialog,
  },
  setup() {
    return {};
  },
  methods: {
    showDialog() {
			this.$refs.myDialog.dialogVisible = true
		},
  },
};
</script>

<style lang="scss" scoped></style>
