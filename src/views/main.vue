<template>
  <div>
    <dv-full-screen-container>
      <avue-form :option="formOption" v-model="form" @submit="submit"></avue-form>
      <dv-charts :option="chartsOption" style="display:inline-block;width:30%;height:300px;" />
      <dv-charts :option="chartsOption" style="display:inline-block;width:30%;height:300px;" />
      <dv-charts :option="chartsOption" style="display:inline-block;width:30%;height:300px;" />
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: {
    msg: String
  },
  data () {
    return {
      form: {
        zt: ["370000", "620000", "610000", "110000", "410000"],
        checkbox: 0,
        jtgj: [0, 1, 2, 3, 4]
      },
      formOption: {
        submitText: '搜索',
        column: [{
          label: '条件A',
          prop: 'select1',
          type: 'select',
          dicData: [{
            label: '字典1',
            value: 0
          }, {
            label: '字典2',
            value: 1
          }]
        }]
      },
      chartsOption:
      {
        title: {
          text: '气温与降雨量走势图'
        },
        legend: {
          data: ['降雨量', '气温'],
          bottom: 10
        },
        xAxis: {
          data: [
            '一月', '二月', '三月', '四月', '五月', '六月',
            '七月', '八月', '九月', '十月', '十一月', '十二月'
          ],
          axisLabel: {
            style: {
              rotate: 20,
              textAlign: 'left',
              textBaseline: 'top'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            name: '降雨量',
            data: 'value',
            min: 0,
            max: 300,
            interval: 50,
            splitLine: {
              style: {
                lineDash: [3, 3]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            },
            axisTick: {
              show: false
            }
          },
          {
            name: '气温',
            data: 'value',
            position: 'right',
            min: 0,
            max: 30,
            interval: 5,
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: '{value} °C',
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '降雨量',
            data: [
              155, 135, 100, 120, 40, 55,
              70, 50, 45, 55, 40, 37
            ],
            type: 'bar',
            gradient: {
              color: ['#37a2da', '#67e0e3']
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '气温',
            data: [
              22, 18, 15, 14, 11, 9,
              5, 5, 5, 5, 5, 4
            ],
            type: 'line',
            yAxisIndex: 1,
            animationCurve: 'easeOutBounce'
          }
        ]
      }
    }
  },
  methods: {
    submit(){
      this.$router.push('/detail');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
