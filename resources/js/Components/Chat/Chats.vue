<script setup lang="ts">
import useChatStore from '@/Stores/ChatStore'
import SingleChat from './SingleChat.vue'
import { usePage } from '@inertiajs/vue3'

let { messages } = useChatStore()
const page = usePage()
</script>
<template>
    <div class="relative my-4 min-h-[33rem] space-y-4 px-4 lg:min-h-[75%]">
        <SingleChat
            v-for="(chat, index) in messages"
            :key="index"
            :isSent="chat.id !== null"
            :sender="chat.user?.name"
            :time="`${chat.created_at}`"
            :direction="
                chat.user_id === page.props.auth.user.id ? 'right' : 'left'
            "
        >
            {{ chat.message }}
        </SingleChat>
    </div>
</template>
