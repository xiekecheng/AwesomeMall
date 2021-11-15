/* eslint-disable vue/no-mutating-props */
<template>
  <div class="my-dialog">
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :show-close="true">
      <span>This is a message</span>
      <el-button type="danger" @click="TwoDialogVisible">二次弹窗</el-button>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
// import { ElMessageBox } from 'element-plus'
export default {
  setup() {
    return {};
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose() {},
    TwoDialogVisible() {},
    // 关闭对话框
    // handleCancel() {
    //   this.$emits('show-dialog', false);
    // },
    // handleConfirm() {
    //   this.$emits('show-dialog', false);
    // },
  },
};
</script>

<style lang="scss" scoped></style>
