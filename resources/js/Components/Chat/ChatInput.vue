<script setup lang="ts">
import TextInput from '../TextInput.vue'
import { useForm, usePage, InertiaForm } from '@inertiajs/vue3'
import useChatStore from '@/Stores/ChatStore'
import { v4 as uuidv4 } from 'uuid'

const page = usePage()

const form = useForm({
    message: '',
    user_id: page.props?.auth?.user?.id,
    uuid: 0,
    user: {
        name: page.props?.auth?.user?.name,
    },
})

const emit = defineEmits(['sendMessage'])

const chat = useChatStore()
const submit = async () => {
    form.uuid = uuidv4()

    emit('sendMessage', form.data())
    chat.send(form)
    form.reset()
}
</script>
<template>
    <div class="sticky bottom-4">
        <div class="sticky bottom-0 mb-2 flex h-14 w-full items-center px-4">
            <form @submit.prevent="submit" class="flex w-full items-center">
                <div
                    class="relative w-full overflow-hidden rounded-3xl shadow-[5px_4px_20px_rgba(0,_0,_0,_0.13)]"
                >
                    <TextInput
                        id="inputChat"
                        v-model="form.message"
                        placeholder="Type something..."
                        class="relative h-14 w-full !rounded-3xl border-none px-5 pr-10 text-gray-700 shadow-[5px_4px_20px_rgba(0,_0,_0,_0.13)] disabled:cursor-not-allowed disabled:bg-gray-200"
                        :disabled="form.processing"
                    />
                </div>
                <button
                    type="submit"
                    class="group absolute right-7"
                    :disabled="form.processing"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="group-disabled:stroke-gray-400"
                    >
                        <path
                            d="M18.07 8.51001L9.51002 4.23001C3.76002 1.35001 1.40002 3.71001 4.28002 9.46001L5.15002 11.2C5.40002 11.71 5.40002 12.3 5.15002 12.81L4.28002 14.54C1.40002 20.29 3.75002 22.65 9.51002 19.77L18.07 15.49C21.91 13.57 21.91 10.43 18.07 8.51001ZM14.84 12.75H9.44002C9.03002 12.75 8.69002 12.41 8.69002 12C8.69002 11.59 9.03002 11.25 9.44002 11.25H14.84C15.25 11.25 15.59 11.59 15.59 12C15.59 12.41 15.25 12.75 14.84 12.75Z"
                            fill="#3369FF"
                            class="group-disabled:fill-gray-400"
                        />
                    </svg>
                </button>
            </form>
        </div>
    </div>
</template>
