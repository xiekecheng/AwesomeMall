<template>
  <div>
    <h1>图表</h1>
    <div ref="main" class="echarts"></div>
    <div ref="chart2" class="echarts"></div>
  </div>
</template>

<script>
// import { getItem, setItem } from '@/utils/storage';
import * as echarts from 'echarts';
export default {
  setup() {
    return {};
  },
  data() {
    return {
      // num: 0,
    };
  },
  created() {
    // this.num = getItem('num', 1);
  },
  mounted() {
    // 加载Echarts图表
    this.paintEcharts();
  },
  methods: {
    // handleAddCart() {
    //   setItem('num', this.num + 1);
    //   this.num += 1;
    // },
    paintEcharts() {
      // 使用ref获取dom节点
      const dom = this.$refs.main;
      // 基于准备好的dom，初始化echarts实例
      // document.getElementById('main')
      let myChart = echarts.init(dom);
      // 绘制图表
      myChart.setOption({
        title: {
          text: '销量数据',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                fontSize: 20,
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 200px;
}
</style>
