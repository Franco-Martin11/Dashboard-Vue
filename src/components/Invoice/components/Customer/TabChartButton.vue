<script setup lang="ts">
import { ref } from 'vue'
interface reactiveTabParams {
  type: string
  value: boolean
}

const handleClick = (params: reactiveTabParams) => (buttonActivate.value = params)
const hash = {
  stats: { type: 'stats', value: true },
  chart: { type: 'chart', value: true }
}
const buttonActivate = ref<reactiveTabParams>({ type: 'chart', value: true })
</script>

<template>
  <div
    class="bg-[#f2f0ff] rounded-[30px] pt-[5px] pr-[15px] pb-[5px] pl-[15px] flex flex-row items-center justify-between w-[125px] relative"
  >
    <button type="button" @click="handleClick(hash.stats)">
      <svg
        class="p-[4.5px] flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-visible"
        style=""
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5 7.77274H4.5M28.5 16.5H4.5M28.5 25.2273H4.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="buttonActivate.type === 'stats' ? 'stroke-Pallet-Purple' : 'stroke-Head-UserGray'"
        />
      </svg>
    </button>
    <button type="button" @click="handleClick(hash.chart)">
      <svg
        class="p-[4.5px] flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-visible"
        style=""
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8 4.53096C8.3892 5.78475 4.5 10.6761 4.5 16.3638C4.5 17.2474 4.62961 18.3222 4.83721 19.2461C5.01361 20.0271 5.86439 20.4203 6.56279 20.0425C7.04999 19.7791 8.43599 19.0711 10.4256 18.0704C10.452 18.0567 14.5608 15.9788 14.6256 15.9465C15.0348 15.7419 15.3 15.3095 15.3 14.8467C15.3 14.7703 15.2712 6.50091 15.2628 5.70671C15.2544 4.93218 14.5464 4.35802 13.8 4.53096ZM19.2 4.53096C18.4548 4.35777 17.748 4.93327 17.7372 5.70671C17.7264 6.56377 17.7 13.624 17.7 14.9226C17.7048 15.4042 17.7504 15.6731 18.4128 16.0225C18.4968 16.0704 22.272 17.9099 23.0628 18.298C23.2284 18.3795 25.6824 19.6481 26.4 20.0425C27.0972 20.426 27.9852 20.0289 28.1628 19.2461C28.374 18.3161 28.5 17.2582 28.5 16.3638C28.5 10.6786 24.6084 5.78718 19.2 4.53096ZM12.8904 7.36562C12.9 9.61179 12.8976 13.1665 12.9 14.1262C12.0216 14.568 8.87282 16.1386 6.93362 17.1234C6.91442 16.881 6.9 16.579 6.9 16.3638C6.9 12.3827 9.26041 8.90849 12.8904 7.36562ZM20.1204 7.37035C23.6928 8.8199 26.1 12.3782 26.1 16.3638C26.1 16.582 26.0964 16.8599 26.0772 17.1018C25.5528 16.8334 25.1256 16.6211 24.45 16.2879C24.2916 16.21 20.7096 14.4653 20.1 14.1641C20.1024 12.5997 20.1108 9.39346 20.1204 7.37035ZM15.9744 17.9946C15.9096 18.0272 7.64161 22.144 7.53721 22.2043C6.89401 22.5763 6.732 23.4437 7.2 24.0248C9.4644 26.8375 12.8436 28.5 16.5 28.5C20.1684 28.5 23.574 26.8156 25.8372 23.9868C26.3124 23.3938 26.1288 22.5247 25.4628 22.1663C25.3008 22.0793 17.0904 18.027 17.0256 17.9946C16.692 17.83 16.308 17.8287 15.9744 17.9946ZM16.5 20.4219C17.2584 20.7969 20.9508 22.6161 22.9212 23.5937C21.1116 25.2164 18.87 26.0728 16.5 26.0728C14.1288 26.0728 11.8884 25.2144 10.1136 23.6059C12.0372 22.6454 15.7332 20.8044 16.5 20.4219Z"
          :class="buttonActivate.type === 'chart' ? 'fill-Pallet-Purple' : 'fill-Head-UserGray'"
        />
      </svg>
    </button>
  </div>
</template>
