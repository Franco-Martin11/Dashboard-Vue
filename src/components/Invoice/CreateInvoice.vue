<template>
  <div>
    <div>
      <!-- <div class="flex flex-col gap-[25px] items-start justify-start w-full relative">
    <LayoutNavbar titleHeading="Invoice" descriptionHeading="Create new invoice and download" />

    <div
      class="bg-[#ffffff] min-w-[350px] w-full min-h-screen h-fit border-dashed border-[#000000] border lg:border-t lg:border-b flex flex-row gap-2.5 items-start justify-start flex-wrap self-stretch shrink-0 relative"> -->
      <FormContainer />
      <!-- //FacturaPreview -->
      <PreviewContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
// import LayoutNavbar from '../layout/LayoutNavbar.vue'
import FormContainer from './components/Form/FormContainer.vue'
import PreviewContainer from './components/Preview/PreviewContainer.vue'
</script>

<style scoped></style>
