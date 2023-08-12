<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

defineProps({
    canLogin: Boolean,
})
</script>
<template>
    <section
        class="relative mx-auto h-full w-full overflow-y-hidden bg-white px-5 shadow-xl lg:max-w-sm lg:rounded-2xl"
    >
        <div class="mt-5 text-center">
            <h1 class="text-2xl font-semibold text-blue-600">IniChat</h1>
            <h3 class="text-sm font-medium text-gray-500">
                The Simple Realtime Chat App
            </h3>

            <p class="mx-auto mt-4 w-4/5 font-medium leading-5 text-gray-600">
                This Software build with Laravel, Inertia, Vue3, Pusher, and
                TailwindCss. Using this software, you can chat to the other user
                in realtime
            </p>
        </div>

        <div class="mx-auto mt-20">
            <img src="/images/robot.png" alt="" class="mx-auto" />
        </div>

        <div class="mt-20">
            <Link
                :href="route('chat.index')"
                as="button"
                class="group mb-8 flex w-full items-center rounded-3xl bg-blue-600 py-2 text-center font-bold text-white transition hover:shadow-lg"
            >
                <span class="ml-9 w-full">
                    <span v-show="canLogin">Login To Continue</span>
                    <span v-show="!canLogin">Continue</span>
                </span>
                <span class="mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 transition group-hover:translate-x-1"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                </span>
            </Link>
        </div>
    </section>
</template>
