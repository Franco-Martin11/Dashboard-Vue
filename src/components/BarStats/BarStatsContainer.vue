<template>
  <div class="container">
    <div class="heading-chart flex flex-row justify-start gap-1 md:gap-[90px]">
      <template v-for="{ valueText, key, labelTitle } in descriptionCardData" :key="key">
        <DescriptionCard :label-title="labelTitle" :value-text="valueText" />
      </template>

    </div>

    <div class="slices-data gap-[15px] flex w-full flex-1 flex-wrap flex-row md:flex-col justify-evenly">
      <template v-for="{ valueText, key, labelTitle } in slicesCardData" :key="key">
        <SlicesCard :label-title="labelTitle" :value-text="valueText" />
      </template>
    </div>
    <ColumnBarChart />
  </div>
</template>

<script setup lang="ts">
import ColumnBarChart from '../StatsCard/components/ColumnBarChart.vue'
import DescriptionCard from './components/DescriptionCard.vue';
import SlicesCard from './components/SlicesCard.vue';
interface descriptionDataInterface {
  labelTitle: string
  valueText: string
  key: string
}
const descriptionCardData: descriptionDataInterface[] = [{
  labelTitle: 'Total Earnings',
  valueText: '500k',
  key: '123asd'
},
{
  labelTitle: 'Period',
  valueText: '12 Month',
  key: '123asdf'
}, {
  labelTitle: 'Upcoming Projects',
  valueText: '245',
  key: '123asdfg'
}
]
const slicesCardData: descriptionDataInterface[] = [{
  labelTitle: 'Personal Loans',
  valueText: '$45,000',
  key: '123asd1'
},
{
  labelTitle: 'Subscriptions',
  valueText: '$495',
  key: '123asdf2'
}, {
  labelTitle: 'Income',
  valueText: '$15,000',
  key: '123asdfg3'
}
, {
  labelTitle: 'Total Balance',
  valueText: '$150,000',
  key: '123asdfg3'
}
]




</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 170px;
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 1rem;
  place-content: center;
  width: 100%;
  height: auto;
  grid-template-areas:
    'heading-chart heading-chart slices-data'
    'columbar-chart columbar-chart slices-data'
    'columbar-chart columbar-chart slices-data';
}

@media screen and (max-width: 780px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'heading-chart heading-chart '
      'columbar-chart columbar-chart '
      'slices-data slices-data';
  }
}

.slices-data {
  grid-area: slices-data;
}

.heading-chart {
  grid-area: heading-chart;
}
</style>
