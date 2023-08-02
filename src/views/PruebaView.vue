<template>
  <div class="example bg-slate-200 text-black">
    <h1>{{ $route.params.id }}</h1>
  </div>
  <!-- <div class="flex flex-row gap-4 w-full">
    <ButtonMonths :title="'12 Month'" :variant="'focus'" />
    <ButtonMonths :title="'12 Month'" :variant="''" />
    <ButtonMonths :title="'12 Month'" :variant="''" />
    <ButtonMonths :title="'12 Month'" :variant="''" />
  </div>
  <div class="flex flex-row gap-4 w-full">

    <DatesInput label="End Date" placeholder="24/12/2024" />
    <DatesInput label="End Date" placeholder="24/12/2024" />
    <DatesInput label="End Date" placeholder="24/12/2024" />
    <DocumentField/>
  </div> -->
  <CardPrueba />
</template>

<script lang="ts" setup>
import CardPrueba from '@/components/CardPrueba.vue';
import ButtonMonths from '@/components/Invoice/components/ButtonMonths.vue';
import DatesInput from '@/components/Invoice/components/DatesInput.vue';
import DocumentField from '@/components/Invoice/components/DocumentField.vue';

</script>
