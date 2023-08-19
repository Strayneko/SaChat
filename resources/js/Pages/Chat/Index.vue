<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { Head } from '@inertiajs/vue3'
import TheChat from '@/Components/Chat/TheChat.vue'
import useChatStore from '@/Stores/ChatStore'
import { MessageData, Chat } from '@/types/chat'
import ChatLayout from '@/Layouts/ChatLayout.vue'
import moment from 'moment'

const props = defineProps({ messages: Array })
const chats = useChatStore()

chats.setMessages(props.messages)
const updateMessage = async (message: any) => {
    const data: MessageData = {
        id: null,
        user_id: message.user_id,
        message: message.message,
        uuid: message.uuid,
        user: {
            name: message.user.name,
            id: message.user_id,
        },
        created_at: moment.now(),
        updated_at: null,
    }

    chats.pushMessages(data)
    await nextTick()
}

onMounted(async () => {
    window.Channel.bind('message', async (data: { chat: MessageData }) => {
        chats.markSendedMessage(data?.chat)

        await nextTick()
        chats.chatRef?.scrollTo(0, chats.chatRef.scrollHeight ?? 0)
        // chats.pushMessages(data.chat)
        document.querySelector<HTMLInputElement>('#inputChat')?.focus()
    })
})
</script>

<template>
    <ChatLayout>
        <Head title="Chats" />
        <TheChat @send-message="updateMessage" />
    </ChatLayout>
</template>
