<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Link } from '@inertiajs/vue3'

defineProps({
    componentClass: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="flex h-screen flex-col items-center justify-center bg-gray-700">
        <div
            class="relative mx-auto h-full w-full overflow-y-hidden bg-white px-5 py-14 shadow-xl lg:min-h-[50%] lg:max-w-md lg:rounded-2xl"
            :class="componentClass"
        >
            <slot />
        </div>
    </div>
</template>
