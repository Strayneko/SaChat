import { Chat } from '@/types/chat'
import { InertiaForm, router } from '@inertiajs/vue3'
import { defineProps } from 'vue'

const useChats = () => {
    const send = (form: Chat) => {
        form.post(route('chat.store'))
        form.reset()
    }

    return { send }
}

export default useChats
