<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import TextInput from '@/Components/TextInput.vue'

defineProps<{
    status?: string
}>()

const form = useForm({
    email: '',
    password: '',
})

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <section>
        <div
            class="flex h-full w-full flex-col items-center justify-center px-6"
        >
            <div class="flex justify-center">
                <img src="/images/logo.png" loading="lazy" alt="Logo Sacode" />
            </div>
            <h3 class="text-center text-2xl font-bold">
                Login to your account
            </h3>
            <form action="" @submit.prevent="submit" class="!w-full">
                <div class="mt-4">
                    <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>
                    <div class="mt-4">
                        <InputLabel for="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                        />

                        <InputError
                            class="mt-2"
                            :message="form.errors.password"
                        />
                    </div>
                    <div class="flex items-baseline justify-between">
                        <button
                            class="mt-4 flex items-center rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-900 disabled:cursor-not-allowed"
                            :class="{ 'bg-blue-900': form.processing }"
                            :disabled="form.processing"
                        >
                            <div v-show="form.processing">
                                <svg
                                    class="-ml-2 mr-3 h-5 w-5 animate-spin text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            </div>

                            <span
                                v-text="
                                    form.processing ? 'Processing' : 'Login'
                                "
                            ></span>
                        </button>
                        <Link
                            :href="route('register')"
                            class="rounded-sm px-1 text-sm text-blue-600 hover:bg-blue-300/60 hover:underline"
                            >Register here</Link
                        >
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
