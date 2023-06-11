<script setup lang="ts">
import ChatTIme from './ChatTIme.vue'

defineProps({
    direction: {
        type: String,
        default: 'left',
    },
})
</script>
<template>
    <div
        v-if="direction === 'right'"
        class="flex flex-col items-end justify-end"
    >
        <div
            class="w-3/4 rounded-3xl rounded-tr-none bg-blue-500 p-3 font-medium text-white"
        >
            Hello chatGPT,how are you today? apa kabar mu
        </div>
        <ChatTIme />
    </div>

    <div v-if="direction === 'left'" class="w-3/4">
        <div class="flex justify-start">
            <div
                class="rounded-3xl rounded-bl-none bg-gray-200 p-3 font-medium text-[#505050]"
            >
                Hello chatGPT,how are you today? apa kabar mu
            </div>
        </div>
        <div class="flex justify-between">
            <span class="font-bold text-gray-700">Rendi</span>
            <ChatTIme />
        </div>
    </div>
</template>
