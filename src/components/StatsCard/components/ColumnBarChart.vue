<template>
  <div id="chart" class="w-full columbar-chart">
    <VueApexCharts type="bar" height="350" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>

<script lang="ts">
import VueApexCharts from 'vue3-apexcharts'
export default {
  components: { VueApexCharts },
  data: function () {
    return {
      series: [
        {
          name: 'Sales',
          data: [12, 10, 4.0, 10.1, 2.0, 3.6, 13.2, 22.3, 11.4, 3.8, 6.5, 10.2]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          forecolor: '#51459E'
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top' // top, center, bottom
            }
          }
        },
        colors: ['#51459E'],
        dataLabels: {
          enabled: true,
          formatter: function (val: string) {
            return val + '%'
          },
          offsetY: -20
          //   style: {
          //     fontSize: '14px',
          //     colors: ['#304758']
          //   }
        },

        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function (val: string) {
              return val + '%'
            }
          }
        },
        // title: {
        //   text: 'Monthly Inflation in Argentina, 2002',
        //   floating: true,
        //   offsetY: 330,
        //   align: 'center',
        //   style: {
        //     color: '#444'
        //   }
        // }
      }
    }
  }
}
</script>

<style>
.columbar-chart {
  grid-area: columbar-chart;
}
</style>
