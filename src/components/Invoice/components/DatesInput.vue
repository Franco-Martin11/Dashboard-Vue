<template>
    <div
        class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-5 pb-[5px] pl-5 flex flex-row gap-[100px] items-center justify-start shrink-0 relative">
        <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
            <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
                {{ label }}
            </div>

            <input type="date" :placeholder="placeholder" class="text-[#000000] text-left relative"
                style="font: 400 16px 'Product Sans Medium', sans-serif" />

        </div>
    </div>
</template>

<script setup lang="ts">
interface definePropsData {
    label: string
    placeholder: string
}
defineProps<definePropsData>()

</script>

<style scoped></style>