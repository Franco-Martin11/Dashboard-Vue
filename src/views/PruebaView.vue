<template>
  <div class="example bg-slate-200 text-black">
    <h1>{{ $route.params.id }}</h1>
    <p>
      <label><b>Select Theme Palette</b> </label> &nbsp;
      <select @change="updateTheme">
        <option value="palette1">palette1</option>
        <option value="palette2">palette2</option>
        <option value="palette3">palette3</option>
        <option value="palette4">palette4</option>
        <option value="palette5">palette5</option>
        <option value="palette6">palette6</option>
        <option value="palette7">palette7</option>
        <option value="palette8">palette8</option>
        <option value="palette9">palette9</option>
        <option value="palette10">palette10</option>
      </select>
    </p>
    <VueApexCharts :options="chartOptions" :series="series" type="bar" width="100%" height="350" />
  </div>
</template>

<script lang="ts" setup>
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'

let chartOptions: ApexOptions = {
    chart: {
      id: 'basic-bar',
      animations: {
        speed: 200
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        distributed: true
      }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995]
    }
  },
  series: [
    {
      name: 'series-1'
      data: [30, 40, 45, 30, 49]
    }
  ]

const updateTheme = (event: Event) => {
  chartOptions = {
    theme: {
      palette: (event.target as HTMLInputElement).value
    }
  }
}
</script>
