<template>
  <div>
    <h1>图表</h1>
    <span>{{ num }}</span>
    <button @click="handleAddCart">加入购物车</button>
  </div>
</template>

<script>
import { getItem, setItem } from '@/utils/storage';
export default {
  setup() {
    return {};
  },
  data() {
    return {
      num: 0,
    };
  },
  created() {
    this.num = getItem('num', 1);
  },
  methods: {
    handleAddCart() {
      setItem('num', this.num + 1);
      this.num += 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
