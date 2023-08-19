<script setup lang="ts">
import TheLogin from '@/Components/Auth/TheLogin.vue'
import { Head } from '@inertiajs/vue3'
import GuestLayout from '@/Layouts/GuestLayout.vue'
</script>

<template>
    <GuestLayout component-class="lg:max-h-[50%]">
        <Head title="Log in" />
        <TheLogin />
    </GuestLayout>
</template>
