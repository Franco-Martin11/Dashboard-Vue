<template>
  <!-- <div class="example bg-slate-200 text-black">
    <h1>{{ $route.params.id }}</h1>
    <div class="w-[188px]">
      <VueApexCharts type="donut" :options="chart" :series="series" />
    </div>
  </div> -->
  <CampaingEarnings />
</template>

<script lang="ts" setup>
import CampaingEarnings from '@/components/StatsCard/components/CampaingEarnings.vue'
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'

const series = [60, 40]
const chart = {
  chart: {
    width: 300,
    type: 'pie'
  },
  labels: ['Stonk', 'Sales'],

  fill: {
    colors: ['#84E8F4', '#F9896B']
  },
  responsive: [
    {
      breakpoint: 280,
      options: {
        chart: {
          width: 120
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
}

// const optionsBar = {
//   chart: {
//     type: 'bar',
//     height: 250,
//     width: '100%',
//     stacked: true,
//     foreColor: '#999'
//   },
//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: false
//       },
//       columnWidth: '75%',
//       endingShape: 'rounded'
//     }
//   },
//   colors: ['#000', '#ccc'],
//   labels: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
//   xaxis: {
//     axisBorder: {
//       show: false
//     },
//     axisTicks: {
//       show: false
//     },
//     crosshairs: {
//       show: false
//     },
//     labels: {
//       show: false,
//       style: {
//         fontSize: '14px'
//       }
//     }
//   },
//   grid: {
//     xaxis: {
//       lines: {
//         show: false
//       }
//     },
//     yaxis: {
//       lines: {
//         show: false
//       }
//     }
//   },
//   yaxis: {
//     axisBorder: {
//       show: false
//     },
//     labels: {
//       show: false
//     }
//   },
//   legend: {
//     floating: true,
//     position: 'top',
//     horizontalAlign: 'right',
//     offsetY: -36
//   },
//   title: {
//     text: 'Web Statistics',
//     align: 'left'
//   },
//   subtitle: {
//     text: 'Sessions and Views'
//   },
//   tooltip: {
//     shared: true,
//     intersect: false
//   }
// }

// let chartOptions: ApexOptions = {
//   chart: {
//     width: 380,
//     type: 'donut'
//   },
//   dataLabels: {
//     enabled: false
//   },
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200
//         },
//         legend: {
//           show: false
//         }
//       }
//     }
//   ],
//   legend: {
//     position: 'right',
//     offsetY: 0,
//     height: 230
//   },

// const updateTheme = (event: Event) => {
//   chartOptions = {
//     theme: {
//       palette: (event.target as HTMLInputElement).value
//     }
//   }
</script>
