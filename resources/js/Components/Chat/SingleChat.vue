<script setup lang="ts">
import ChatTIme from './ChatTIme.vue'

defineProps({
    isSent: Boolean,
    direction: {
        type: String,
        default: 'left',
    },
    sender: String,
    time: {
        type: [String],
        default: null,
    },
})
</script>
<template>
    <div
        v-if="direction === 'right'"
        class="flex flex-col items-end justify-end"
    >
        <div
            class="max-w-[75%] break-words rounded-3xl rounded-tr-none bg-blue-500 px-4 py-2 font-medium text-white"
        >
            <slot></slot>
        </div>

        <div class="flex items-center gap-1">
            <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
                v-show="!isSent"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    class="stroke-gray-600"
                />
            </svg>
            <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
                v-show="isSent"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                    class="stroke-gray-600"
                />
            </svg>
            <ChatTIme :time="time" />
        </div>
    </div>

    <div v-if="direction === 'left'" class="w-3/4">
        <div class="mb-1">
            <span class="text-sm font-bold text-gray-700">{{
                sender ?? ''
            }}</span>
        </div>
        <div class="flex justify-start">
            <div
                class="break-words rounded-3xl rounded-tl-none bg-gray-200 p-3 font-medium text-[#505050]"
            >
                <slot></slot>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <ChatTIme class="ml-1" :time="time" />
        </div>
    </div>
</template>
