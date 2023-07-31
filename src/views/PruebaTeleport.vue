<template>
  <div v-motion-fad class="flex flex-col gap-[25px] items-start justify-start w-full relative">

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
      class="border-dashed border-[#000000] border-t border-r border-b flex flex-row gap-[15px] items-start justify-start shrink-0 w-[1199px] relative">
      <div
        class="border-solid border-[rgba(0,0,0,0.50)] border-r-[0.5px] pr-[25px] flex flex-col gap-[25px] items-start justify-start flex-1 h-[990px] relative">
        <div class="pt-[26px] pb-[26px] flex flex-col gap-0.5 items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-row gap-1 items-center justify-start shrink-0 w-[206px] relative">
            <div class="text-[#979797] text-left relative" style="font: 400 14px 'Product Sans', sans-serif">
              Invoice
            </div>

            <div class="text-[#000000] text-left relative" style="font: 700 20px 'Product Sans', sans-serif">
              /
            </div>

            <div class="text-[#979797] text-left relative" style="font: 400 14px 'Product Sans', sans-serif">
              Create New Invoice
            </div>
          </div>

          <div class="text-[#000000] text-left relative" style="font: 700 32px 'Product Sans', sans-serif">
            Create New Invoice
          </div>
        </div>

        <div
          class="border-solid border-[rgba(0,0,0,0.35)] border-t-[0.5px] border-b-[0.5px] pt-[30px] pb-[30px] flex flex-row gap-[25px] items-start justify-center self-stretch shrink-0 relative">
          <div
            class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-2.5 pb-[5px] pl-2.5 flex flex-row items-center justify-between flex-1 relative">
            <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
              <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
                Language
              </div>

              <div class="text-[#000000] text-left relative" style="font: 400 16px 'Product Sans Medium', sans-serif">
                English
              </div>
            </div>

            <img class="shrink-0 w-[26px] h-[26px] relative" src="../assets/icons/Expand-Arrow.svg" />
          </div>

          <div
            class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-2.5 pb-[5px] pl-2.5 flex flex-row items-center justify-between flex-1 relative">
            <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
              <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
                Currency
              </div>

              <div class="text-[#000000] text-left relative" style="font: 400 16px 'Product Sans Medium', sans-serif">
                $-USD
              </div>
            </div>

            <img class="shrink-0 w-[26px] h-[26px] relative" src="../assets/icons/Expand-Arrow.svg" />
          </div>


        </div>


        <div class="flex flex-col gap-5 items-start justify-start shrink-0 relative">
          <div class="flex flex-col gap-5 items-start justify-start shrink-0 w-[446px] relative">
            <div class="shrink-0 w-[107px] h-[22px] relative">
              <div class="text-[#282b3c] text-left absolute left-0 top-0"
                style="font: 400 18px 'Product Sans Medium', sans-serif">
                My Details
              </div>
            </div>

            <div class="pl-2.5 flex flex-col gap-5 items-start justify-start shrink-0 relative">
              <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                <div class="text-[#979797] text-left relative" style="font: 400 14px 'Product Sans Medium', sans-serif">
                  Company name
                </div>

                <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
                  Franc Martin
                </div>
              </div>

              <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                <div class="text-[#979797] text-left relative" style="font: 400 14px 'Product Sans Medium', sans-serif">
                  Address
                </div>

                <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
                  Berutti 2262 Buenos Aires, Argentina ST.199/B
                </div>
              </div>

              <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                <div class="text-[#979797] text-left relative" style="font: 400 14px 'Product Sans Medium', sans-serif">
                  Email address
                </div>

                <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
                  main.francomartin@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] items-start justify-start shrink-0 relative">
          <div class="shrink-0 w-[107px] h-[22px] relative">
            <div class="text-[#282b3c] text-left absolute left-0 top-0"
              style="font: 400 18px 'Product Sans Medium', sans-serif">
              Dates
            </div>
          </div>

          <div class="pt-2.5 pb-2.5 pl-2.5 flex flex-col items-center justify-between shrink-0 h-[143px] relative">
            <div class="flex flex-row items-start justify-between shrink-0 w-[544px] relative">
              <div
                class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-5 pb-[5px] pl-5 flex flex-row gap-[100px] items-center justify-start shrink-0 relative">
                <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                  <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
                    Creating Date
                  </div>

                  <div class="text-[#000000] text-left relative" style="font: 400 16px 'Product Sans Medium', sans-serif">
                    24 Dec, 2023
                  </div>
                </div>

                <img class="shrink-0 w-8 h-8 relative" src="../assets/icons/Calendar.svg" />
              </div>

              <div
                class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-5 pb-[5px] pl-5 flex flex-row gap-[100px] items-center justify-start shrink-0 relative">
                <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                  <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
                    End Date
                  </div>

                  <div class="text-[#000000] text-left relative" style="font: 400 16px 'Product Sans Medium', sans-serif">
                    24 Dec, 2024
                  </div>
                </div>

                <img class="shrink-0 w-8 h-8 relative" src="../assets/icons/Calendar.svg" />
              </div>
            </div>

            <div
              class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-5 pb-[5px] pl-5 flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
                  Payment due date
                </div>

                <div class="text-[#000000] text-left relative" style="font: 400 16px 'Product Sans Medium', sans-serif">
                  24 Jan, 2023
                </div>
              </div>

              <img class="shrink-0 w-8 h-8 relative" src="../assets/icons/Calendar.svg" />
            </div>
          </div>
        </div>

        <div class="pl-2.5 flex flex-row gap-[25px] items-center justify-start self-stretch shrink-0 relative">
          <div
            class="bg-[#51459e] rounded-[10px] pt-2.5 pr-[25px] pb-2.5 pl-[25px] flex flex-col gap-2.5 items-start justify-start shrink-0 relative overflow-hidden">
            <div class="text-[#ffffff] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
              12 Month
            </div>
          </div>

          <div
            class="bg-[#ededed] rounded-[10px] pt-2.5 pr-[25px] pb-2.5 pl-[25px] flex flex-col gap-2.5 items-start justify-start shrink-0 relative overflow-hidden">
            <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
              6 Month
            </div>
          </div>

          <div
            class="bg-[#ededed] rounded-[10px] pt-2.5 pr-[25px] pb-2.5 pl-[25px] flex flex-col gap-2.5 items-start justify-start shrink-0 relative overflow-hidden">
            <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
              1 Month
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] items-start justify-start self-stretch shrink-0 relative">
          <div class="shrink-0 flex flex-row gap-2.5 items-center justify-center relative">
            <div class="text-[#282b3c] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
              Invoice Details
            </div>
          </div>

          <div class="pl-2.5 flex flex-row gap-[15px] items-start justify-center self-stretch shrink-0 relative">
            <div
              class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-5 pb-[5px] pl-5 flex flex-row gap-[100px] items-center justify-start flex-1 relative">
              <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
                  Document number
                </div>

                <div class="text-[#000000] text-left relative" style="font: 400 16px 'Product Sans Medium', sans-serif">
                  FV 00010001/09/00255
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-5 flex flex-col gap-2.5 items-start justify-start flex-1 h-[990px] relative overflow-hidden">
        <div class="flex flex-row gap-[25px] items-center justify-start self-stretch shrink-0 relative">
          <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
            <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
              Franc Martin
            </div>

            <div class="text-[#979797] text-left relative" style="font: 400 14px 'Product Sans Medium', sans-serif">
              Product Designer, San Francisco, Los Angeles.
            </div>
          </div>

          <div class="flex flex-col gap-[5px] items-end justify-start flex-1 relative">
            <div class="text-[#363636] text-left relative" style="font: 400 12px 'Product Sans', sans-serif">
              +1 646 980 4741
            </div>

            <div class="text-[#363636] text-left relative" style="font: 400 12px 'Product Sans', sans-serif">
              main.francomartin.gmail.com
            </div>

            <div class="flex flex-row gap-[5px] items-start justify-start shrink-0 relative">
              <div class="text-[#000000] text-left relative" style="font: 700 12px 'Product Sans', sans-serif">
                Tax ID
              </div>

              <div class="text-[#363636] text-left relative" style="font: 400 12px 'Product Sans', sans-serif">
                886655122551155
              </div>
            </div>

            <div class="flex flex-row gap-[5px] items-start justify-start shrink-0 relative">
              <div class="text-[#000000] text-left relative" style="font: 700 12px 'Product Sans', sans-serif">
                GSTIN
              </div>

              <div class="text-[#363636] text-left relative" style="font: 400 12px 'Product Sans', sans-serif">
                12AAS1255SADW
              </div>
            </div>

            <div class="flex flex-row gap-[5px] items-start justify-start shrink-0 relative">
              <div class="text-[#000000] text-left relative" style="font: 700 12px 'Product Sans', sans-serif">
                NRIC/FIN/ID
              </div>

              <div class="text-[#363636] text-left relative" style="font: 400 12px 'Product Sans', sans-serif">
                A22558AB
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
          <div class="flex flex-row gap-[15px] items-start justify-start shrink-0 w-[205px] relative">
            <div class="shrink-0 w-[67px] h-3.5 relative">
              <div class="text-[#363636] text-left absolute left-0 top-0"
                style="font: 400 14px/100% 'Product Sans', sans-serif">
                Invoice:
              </div>
            </div>

            <div class="text-[#000000] text-left relative flex-1" style="font: 700 14px/100% 'Product Sans', sans-serif">
              FV 08/09/2022
            </div>
          </div>

          <div class="flex flex-row gap-[15px] items-start justify-start shrink-0 relative">
            <div class="shrink-0 w-[67px] h-3.5 relative">
              <div class="text-[#363636] text-left absolute left-0 top-0"
                style="font: 400 14px/100% 'Product Sans', sans-serif">
                Client:
              </div>
            </div>

            <div class="shrink-0 w-[132px] h-[111px] static">
              <div class="text-[#000000] text-left absolute left-[82px] top-0"
                style="font: 700 14px/100% 'Product Sans', sans-serif">
                Creame Digital Inc.
              </div>

              <div class="flex flex-col gap-2.5 items-start justify-start absolute left-[82px] top-6">
                <div class="shrink-0 w-[93px] h-3.5 relative">
                  <div class="text-[#363636] text-left absolute left-0 top-0"
                    style="font: 400 14px/100% 'Product Sans', sans-serif">
                    2081 Still Street
                  </div>
                </div>

                <div class="shrink-0 w-[93px] h-3.5 relative">
                  <div class="text-[#363636] text-left absolute left-0 top-0"
                    style="font: 400 14px/100% 'Product Sans', sans-serif">
                    Toledo, OH
                  </div>
                </div>

                <div class="shrink-0 w-[93px] h-3.5 relative">
                  <div class="text-[#363636] text-left absolute left-0 top-0"
                    style="font: 400 14px/100% 'Product Sans', sans-serif">
                    USA
                  </div>
                </div>

                <div class="flex flex-row gap-[5px] items-start justify-start shrink-0 relative">
                  <div class="text-[#000000] text-left relative" style="font: 700 12px 'Product Sans', sans-serif">
                    Tax ID
                  </div>

                  <div class="text-[#363636] text-left relative" style="font: 400 12px 'Product Sans', sans-serif">
                    886655122551155
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-row gap-[15px] items-start justify-start shrink-0 relative">
            <div class="shrink-0 w-[67px] h-3.5 relative">
              <div class="text-[#363636] text-left absolute left-0 top-0"
                style="font: 400 14px/100% 'Product Sans', sans-serif">
                Date:
              </div>
            </div>

            <div class="shrink-0 w-[93px] h-3.5 relative">
              <div class="text-[#363636] text-left absolute left-0 top-0"
                style="font: 400 14px/100% 'Product Sans', sans-serif">
                24 July, 2024,
              </div>
            </div>
          </div>
        </div>

        <div class="pt-[25px] pb-[25px] flex flex-col items-start justify-between self-stretch flex-1 relative">
          <div
            class="border-solid border-[#000000] border-t pt-2.5 flex flex-row items-start justify-between self-stretch shrink-0 relative">
            <div class="text-[#000000] text-left relative" style="font: 700 12px 'Product Sans', sans-serif">
              Description
            </div>

            <div class="text-[#000000] text-left relative" style="font: 700 12px 'Product Sans', sans-serif">
              Total (INR)
            </div>
          </div>

          <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
              <div class="text-[#363636] text-left relative" style="font: 400 14px 'Product Sans', sans-serif">
                UX Desomg for the period
              </div>

              <div class="text-[#363636] text-left relative" style="font: 400 14px 'Product Sans', sans-serif">
                120,000.00
              </div>
            </div>

            <div class="text-[#000000] text-left relative self-stretch" style="font: 700 14px 'Product Sans', sans-serif">
              December 2023 to 30 December 2024
            </div>
          </div>

          <div
            class="border-dashed border-[#000000] border-t border-b pt-2.5 pb-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
              <div class="text-[#000000] text-left relative" style="font: 700 14px 'Product Sans', sans-serif">
                COST @ 9%
              </div>

              <div class="text-[#363636] text-left relative" style="font: 700 14px 'Product Sans', sans-serif">
                1080.00
              </div>
            </div>

            <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
              <div class="text-[#000000] text-left relative" style="font: 700 14px 'Product Sans', sans-serif">
                SGST @ 9%
              </div>

              <div class="text-[#363636] text-left relative" style="font: 700 14px 'Product Sans', sans-serif">
                1180.00
              </div>
            </div>
          </div>

          <div
            class="border-solid border-[#000000] border-b pt-2.5 pb-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
              <div class="text-[#000000] text-left relative" style="font: 700 14px 'Product Sans', sans-serif">
                Total
              </div>

              <div class="text-[#363636] text-left relative" style="font: 700 14px 'Product Sans', sans-serif">
                1560.00
              </div>
            </div>
          </div>

          <div
            class="border-dashed border-[#000000] border-b pt-2.5 pb-2.5 flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative">
            <svg class="shrink-0 relative overflow-visible" style="" width="92" height="68" viewBox="0 0 92 68"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.17788 33.9422L48.0671 21.9213C48.0671 21.9213 44.4094 9.35747 35.4663 2.68827C17.3358 -10.8322 21.8438 44.86 21.8438 67.6001L39.553 43.5588C39.553 43.5588 17.7571 53.1754 6.17788 52.145C-21.2369 49.7055 51.4729 36.6896 51.4729 36.6896L57.6031 30.851L61.3493 36.6896L65.7766 33.9422L74.9718 36.6896L81.4425 38.7503L92 50.0842C92 50.0842 82.776 50.0842 53.5163 50.0842"
                stroke="black" stroke-width="1.5" />
            </svg>

            <div class="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div class="text-[#000000] text-left relative w-[415px]" style="font: 700 16px 'Product Sans', sans-serif">
                Franc Martin
              </div>

              <div class="text-[#363636] text-left relative" style="font: 400 14px 'Product Sans', sans-serif">
                Product Designer, Buenos Aires.
              </div>
            </div>
          </div>

          <div class="text-[#363636] text-left relative self-stretch"
            style="font: 400 12px/100% 'Product Sans', sans-serif">
            Please ensure that you include the invoice number in the transaction
            description to facilitate accurate payment processing. Kindly make the
            payment within the specified due date.<br />For any payment-related
            inquiries, feel free to contact our finance department at
            finance@yourcompany.com or call +1-123-456-7890.<br />Thank you for
            your prompt payment!
          </div>
        </div>

        <div
          class="border-solid border-[rgba(0,0,0,0.25)] border-t pt-[15px] flex flex-row gap-[15px] items-start justify-end self-stretch shrink-0 relative">
          <div
            class="bg-[#fafafa] rounded-[7px] border-solid border-[rgba(178,171,220,0.50)] border pt-2.5 pr-[25px] pb-2.5 pl-[25px] flex flex-col items-start justify-between shrink-0 h-[42px] relative overflow-hidden">
            <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
              Preview
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-[15px] flex flex-row gap-[25px] items-center justify-end self-stretch shrink-0 relative">
      <div
        class="bg-[#fafafa] rounded-[7px] border-solid border-[rgba(178,171,220,0.50)] border pt-2.5 pr-[25px] pb-2.5 pl-[25px] flex flex-col items-start justify-between shrink-0 h-[42px] relative overflow-hidden">
        <div class="text-[#000000] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
          Cancel
        </div>
      </div>

      <div
        class="bg-[#51459e] rounded-[7px] pt-2.5 pr-[25px] pb-2.5 pl-[25px] flex flex-col items-start justify-between shrink-0 h-[42px] relative overflow-hidden">
        <div class="text-[#ffffff] text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
          Create Invoice
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue';


</script>

<style scoped></style>