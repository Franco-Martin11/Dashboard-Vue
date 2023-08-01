<template>
    <button type="button" class="rounded-[10px] pt-2.5 pr-[25px] pb-2.5 pl-[25px] flex flex-col gap-2.5 items-start justify-start shrink-0 relative overflow-hidden"
        :class="variantColor"
        @click="handleClick"
        >
        <div class="text-left relative" style="font: 400 18px 'Product Sans Medium', sans-serif">
            {{ title }}
        </div>
    </button>
</template>

<script setup lang="ts">
interface definePropsData {
    title: string;
    variant: string
}
const props = defineProps<definePropsData>()
const variantColor = props.variant === 'focus' ? 'bg-[#51459e] text-[#ffffff]' : 'text-[#000] bg-[#EDEDED]';
const handleClick= ()=> alert('prueba 1')
</script>

<style scoped></style>