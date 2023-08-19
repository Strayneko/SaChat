<script setup lang="ts"></script>

<template>
    <div class="relative h-screen w-full bg-gray-700 lg:py-6">
        <div
            class="relative mx-auto h-full w-full overflow-y-auto bg-white shadow-xl lg:max-w-md lg:rounded-2xl"
        >
            <slot />
        </div>
    </div>
</template>
