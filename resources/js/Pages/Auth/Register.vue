<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import TheRegister from '@/Components/Auth/TheRegister.vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
</script>

<template>
    <GuestLayout component-class="lg:!max-h-[70%]">
        <Head title="Register" />
        <TheRegister />
    </GuestLayout>
</template>
