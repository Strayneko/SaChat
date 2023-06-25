<script setup lang="ts">
import TheWelcome from '@/Components/Welcome/TheWelcome.vue'
import { Auth } from '@/types'
import { Head, Link } from '@inertiajs/vue3'
const { auth } = defineProps<{
    auth?: Auth
}>()
</script>

<template>
    <Head title="Welcome" />
    <section class="relative h-screen w-full bg-gray-700 lg:py-6">
        <TheWelcome :canLogin="auth?.user === null" />
    </section>
</template>
