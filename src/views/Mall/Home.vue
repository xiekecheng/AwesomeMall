<template>
  <div>
    <h1>商品页</h1>
    <span>当前state值:{{ count }}</span>
    <button @click="asyncIncrement(2)">异步添加</button>
    <button @click="add(10)">同步添加</button>
  </div>
</template>

<script>
import { mapState, mapActions,mapMutations } from 'vuex';
// import mapActions from 'vuex';
export default {
  setup() {
    return {};
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
  methods:{
    ...mapActions(['asyncIncrement']),
    ...mapMutations({add:'increment'})
  }
};
</script>

<style lang="scss" scoped></style>
