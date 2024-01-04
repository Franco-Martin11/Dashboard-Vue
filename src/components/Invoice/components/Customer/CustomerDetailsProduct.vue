<script lang="ts" setup>
import StatusButton from './StatusButton.vue'
import { productArray } from '@/constants/ClientInterface'
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const { currentRoute } = useRouter()
const currentParams = `${currentRoute.value.params.customerNamerQuery}`

// const dataFilter: ProductItem[][] = productArray
//     .filter(element => element[currentParams])
//     .map(elem => elem[currentParams]);

// const Values = Object.values(dataFilter)
// console.log(Values)
// const Values2 = Values.map(element => element)
// console.log(Values2)
//

const valueData = computed(() => productArray[currentParams])
</script>
<template>
  <template v-for="{ items, status, type } in valueData" :key="type">
    <template v-for="item in items" :key="item.description">
      <RouterLink :to="'client-1' + '?q=' + item.description">
        <div
          class="bg-[#ffffff] flex-1 h-full w-full rounded-[9px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-col gap-2.5 items-start justify-start relative border border-[rgba(151,151,252,0.5)] hover:border-[rgba(151,151,252,0.75)] transition-shadow hover:shadow-lg"
        >
          <div
            class="w-full flex flex-1 items-start justify-start self-stretch shrink-0 relative overflow-visible"
          >
            <svg
              style="transform: translate(0px, 0px)"
              width="254"
              height="15"
              viewBox="0 0 254 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.643657 1.15589e-05H14.4848C15.066 1.15589e-05 15.3496 0.709181 14.9288 1.10997L1.08764 14.292C0.677775 14.6824 -0.000117756 14.3918 -0.000117756 13.8258V0.643786C-0.000117756 0.28824 0.288109 1.15589e-05 0.643657 1.15589e-05Z"
                fill="#F9BE7A"
              />
            </svg>
          </div>
          <div class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
            <img
              class="rounded-[4.71px] shrink-0 w-[37.66px] h-[37.66px] relative"
              src="/images/image-1.png"
            />
            <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
              <h3
                class="text-[#222222] text-left relative w-[205.56px] flex items-center justify-start"
                style="font: 400 16px 'Product Sans Medium', sans-serif"
              >
                Harry Joe
              </h3>
              <div
                class="flex flex-row gap-[5px] items-center justify-start self-stretch shrink-0 relative"
              >
                <span
                  class="text-[#9698ab] text-left relative"
                  style="font: 400 12px/100% 'Product Sans Medium', sans-serif"
                >
                  Status:
                </span>
                <StatusButton :sucess="status" />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
            <div
              class="flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative"
            >
              <span
                class="text-[#9698ab] text-left relative"
                style="font: 400 12px/100% 'Product Sans Medium', sans-serif"
              >
                Product:
              </span>
              <h5
                class="text-[#505887] text-left relative"
                style="font: 700 14px 'Product Sans', sans-serif"
              >
                {{ type.toUpperCase() }}
              </h5>
            </div>
            <div
              class="flex flex-col max-w-[250px] gap-1 items-start justify-start self-stretch shrink-0 relative"
            >
              <span
                class="text-[#9698ab] text-left relative"
                style="font: 400 12px/100% 'Product Sans Medium', sans-serif"
              >
                Description:
              </span>
              <p
                class="text-material-theme-static-900 text-left relative self-stretch"
                style="font: 400 14px 'Product Sans', sans-serif"
              >
                {{ items.map((element) => element.description).join(',') }}
              </p>
            </div>
          </div>
          <div
            class="w-full flex flex-col gap-2.5 items-end justify-center self-stretch shrink-0 relative overflow-visible"
          >
            <svg
              style=""
              width="254"
              height="15"
              viewBox="0 0 254 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M252.574 14.5998H238.733C238.152 14.5998 237.868 13.8906 238.289 13.4898L252.13 0.30778C252.54 -0.0825667 253.218 0.207957 253.218 0.773961V13.956C253.218 14.3116 252.93 14.5998 252.574 14.5998Z"
                fill="#5E25BC"
              />
            </svg>
          </div>
        </div>
      </RouterLink>
    </template>
  </template>
</template>
