<script setup lang="ts">
import Header from '@/Components/Chat/Header.vue'
import ChatInput from '@/Components/Chat/ChatInput.vue'
import Chats from './Chats.vue'
import { ref, onMounted, nextTick, VNodeRef } from 'vue'
import { MessageData } from '@/types/chat'
import useChatStore from '@/Stores/ChatStore'

const emit = defineEmits(['sendMessage'])
const theChatRef = ref<VNodeRef | null>(null)
const chatStore = useChatStore()
const scrollToBottom = () => {
    chatStore.chatRef.scrollTo(0, theChatRef.value.scrollHeight + 9999)
}

const updateMessage = async (message: any) => {
    emit('sendMessage', message)
    await nextTick()
    scrollToBottom()
}

onMounted(() => {
    chatStore.setChatRef(theChatRef.value)
    window.Channel.bind('message', async (data: { chat: MessageData }) => {
        // scroll to the latest chat
        await nextTick()
        scrollToBottom()
    })
    scrollToBottom()
})
</script>

<template>
    <section
        class="the-chat relative mx-auto h-full w-full overflow-y-auto bg-white shadow-xl lg:max-w-sm lg:rounded-2xl"
        ref="theChatRef"
    >
        <!-- header -->
        <Header />

        <!-- Chats -->
        <Chats />

        <!-- chat input box -->
        <ChatInput @send-message="updateMessage" />
    </section>
</template>

<style scoped lang="postcss">
/* width */
.the-chat::-webkit-scrollbar {
    @apply w-1;
}

/* Track */
.the-chat::-webkit-scrollbar-track {
    @apply my-4 bg-transparent;
}

/* Handle */
.the-chat::-webkit-scrollbar-thumb {
    @apply bg-blue-500 hover:bg-blue-700;
}
</style>
