<template>
  <div
    class="border-dashed lg:border-solid border-[#000000] border-t lg:border-t-0 lg:border-l p-5 flex flex-1 flex-col gap-[30px] items-start justify-start shrink-0 min-w-[350px] h-full relative overflow-hidden"
  >
    <template
      v-for="{ client, invoiceNumber, issueDate, product, provider, dueDate } of [useDataEmpty]"
      :key="invoiceNumber"
    >
      <!-- topHeading -->
      <div
        class="flex flex-row gap-[25px] items-start justify-start flex-wrap self-stretch shrink-0 relative"
      >
        <div class="flex flex-col gap-[5px] items-end justify-start shrink-0 w-full relative">
          <div
            class="text-[#000000] text-left relative"
            style="font: 400 18px 'Product Sans Medium', sans-serif"
          >
            {{
              issueDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            }}
          </div>
          <template v-for="data in dataComputed" :key="data[0]">
            <PreviewTextLabel :title="data[0]" :value="data[1]" />
          </template>
        </div>

        <div class="flex flex-col gap-[5px] w-full items-start justify-start shrink-0 relative">
          <div
            class="text-[#000000] text-left relative"
            style="font: 400 18px 'Product Sans Medium', sans-serif"
          >
            {{ provider.name }}
          </div>

          <div
            class="text-[#979797] text-left relative"
            style="font: 400 14px 'Product Sans Medium', sans-serif"
          >
            {{ provider.product }}, {{ provider.address }}
          </div>
        </div>
      </div>
      <!--  -->
      <!-- Client-Provider  -->
      <div class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
        <div class="flex flex-row gap-[15px] items-start justify-start shrink-0 w-[205px] relative">
          <div class="shrink-0 w-[67px] h-3.5 relative">
            <div
              class="text-[#363636] text-left absolute left-0 top-0"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              Invoice:
            </div>
          </div>

          <div
            class="text-[#000000] text-left relative flex-1"
            style="font: 700 14px/100% 'Product Sans', sans-serif"
          >
            {{ invoiceNumber }}
          </div>
        </div>
        <!--  -->
        <div class="flex flex-row gap-[15px] items-start justify-start shrink-0 relative">
          <div class="shrink-0 w-[67px] h-3.5 relative">
            <div
              class="text-[#363636] text-left absolute left-0 top-0"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              Client:
            </div>
          </div>

          <div class="shrink-0 w-full flex flex-col gap-1 items-start justify-start">
            <p
              class="text-[#000000] text-left"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              {{ client.name }}
            </p>
            <p
              class="text-[#000000] text-left"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              {{ client.address }}
            </p>
            <p
              class="text-[#000000] text-left"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              {{ client.personalEmail }}
            </p>
            <p
              class="text-[#000000] text-left"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              <span style="font: 700 14px/100% 'Product Sans', sans-serif">TAX ID:</span>
              {{ client.taxID }}
            </p>
          </div>
        </div>
        <!--  -->
        <div class="flex flex-row gap-[15px] items-start justify-start shrink-0 relative">
          <div class="shrink-0 w-[67px] h-3.5 relative">
            <div
              class="text-[#363636] text-left absolute left-0 top-0"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              Date:
            </div>
          </div>

          <div class="shrink-0 w-[125px] h-3.5 relative">
            <div
              class="text-[#363636] text-left absolute left-0 top-0"
              style="font: 400 14px/100% 'Product Sans', sans-serif"
            >
              {{
                dueDate?.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              }},
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="pt-[25px] pb-[25px] flex flex-col items-start justify-between self-stretch flex-1 relative"
      >
        <div
          class="border-solid border-[#000000] border-t py-5 flex flex-row items-start justify-between self-stretch shrink-0 relative"
        >
          <div
            class="text-[#000000] text-left relative"
            style="font: 700 12px 'Product Sans', sans-serif"
          >
            Description
          </div>

          <div
            class="text-[#000000] text-left relative"
            style="font: 700 12px 'Product Sans', sans-serif"
          >
            Total (INR)
          </div>
        </div>
        <template
          v-for="{ description, subtotal, timeOfHiring } in product.items"
          :key="description"
        >
          <PreviewItems
            :description="description"
            :subtotal="subtotal"
            :timeOfHiring="timeOfHiring"
          />
        </template>

        <div class="border-t border-solid py-5 w-full flex-1">
          <template v-for="{ acronym, name, rate } in product.taxes" :key="name">
            <!-- component -->
            <InvoiceSubtotal :acronym="acronym" :name="name" :rate="rate" />
          </template>
        </div>

        <div
          class="border-solid border-[#000000] border-t py-5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
        >
          <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
            <div
              class="text-[#000000] text-left relative"
              style="font: 700 14px 'Product Sans', sans-serif"
            >
              Total
            </div>

            <div
              class="text-[#363636] text-left relative"
              style="font: 700 14px 'Product Sans', sans-serif"
            >
              {{
                new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                  product.total || 0
                )
              }}
            </div>
          </div>
        </div>

        <div
          class="border-dashed border-[#000000] border-b pt-2.5 pb-2.5 flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative"
        >
          <svg
            class="shrink-0 relative overflow-visible"
            style=""
            width="92"
            height="68"
            viewBox="0 0 92 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.17788 34.1419L48.0671 22.121C48.0671 22.121 44.4094 9.55718 35.4663 2.88798C17.3358 -10.6325 21.8438 45.0597 21.8438 67.7998L39.553 43.7585C39.553 43.7585 17.7571 53.3751 6.17788 52.3447C-21.2369 49.9052 51.4729 36.8894 51.4729 36.8894L57.6031 31.0507L61.3493 36.8894L65.7766 34.1419L74.9718 36.8894L81.4425 38.9501L92 50.2839C92 50.2839 82.776 50.2839 53.5163 50.2839"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>

          <div class="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div
              class="text-[#000000] text-left relative w-[415px]"
              style="font: 700 16px 'Product Sans', sans-serif"
            >
              {{ provider.name }}
            </div>

            <div
              class="text-[#363636] text-left relative"
              style="font: 400 14px 'Product Sans', sans-serif"
            >
              {{ provider.product }},{{ provider.address }}
            </div>
          </div>
        </div>

        <div
          class="text-[#363636] text-left relative self-stretch"
          style="font: 400 12px/100% 'Product Sans', sans-serif"
        >
          Please ensure that you include the invoice number in the transaction description to
          facilitate accurate payment processing. Kindly make the payment within the specified due
          date.<br />For any payment-related inquiries, feel free to contact our finance department
          at finance@yourcompany.com or call +1-123-456-7890.<br />Thank you for your prompt
          payment!
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { userDetailsInvoices } from '@/composables/useDetailInvoice'
import { computed } from 'vue'
import PreviewItems from './PreviewItems.vue'
import InvoiceSubtotal from './InvoiceSubtotal.vue'
import PreviewTextLabel from './PreviewTextLabel.vue'

const { userData, useDataEmpty } = userDetailsInvoices()
const dataComputed = computed(() => Object.entries(userData.value))
</script>

<style scoped></style>
