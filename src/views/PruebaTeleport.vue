<template>
  <LayoutContainer>
    <template #ContainerPages>
      <div v-motion-fade class="flex flex-col gap-[25px] items-start justify-start w-full relative">
        <LayoutNavbar>
          <template #headingNavigation>
            <div>
              <div class="flex flex-col gap-[5px] items-start justify-center shrink-0 relative">
                <h1 class="text-[#51459e] text-left relative" style="font: 700 27px 'Product Sans', sans-serif">
                  Invoice
                </h1>

                <p class="text-grey text-left relative" style="font: 400 15px 'Product Sans Medium', sans-serif">
                  Create new invoice and download..
                </p>
              </div>
            </div>
          </template>
        </LayoutNavbar>

        <div
          class="bg-[#ffffff] min-w-[350px] w-full min-h-screen h-fit border-dashed border-[#000000] border lg:border-t lg:border-b flex flex-row gap-2.5 items-start justify-start flex-wrap self-stretch shrink-0 relative">
          <FormContainer />
          <!-- //FacturaPreview -->
          <FormPreview />
        </div>
        <!--  -->
      </div>

    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import FormContainer from '@/components/Invoice/components/FormContainer.vue';
import FormPreview from '@/components/Invoice/components/FormPreview.vue';
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'
</script>

<style scoped></style>
