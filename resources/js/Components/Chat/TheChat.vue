<script setup lang="ts">
import Header from '@/Components/Chat/Header.vue'
import ChatInput from '@/Components/Chat/ChatInput.vue'
import Chats from './Chats.vue'
</script>

<template>
    <section
        class="the-chat relative mx-auto h-full w-full overflow-y-auto bg-white shadow-xl lg:max-w-sm lg:rounded-2xl"
    >
        <!-- header -->
        <Header />

        <!-- Chats -->
        <Chats />

        <!-- chat input box -->
        <ChatInput />
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
