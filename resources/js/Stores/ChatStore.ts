import { defineStore } from 'pinia'
import { VNodeRef } from 'vue'
import moment from 'moment'
import { MessageData, Chat } from '@/types/chat'

const useChatStore = defineStore('messages', {
    state: () => ({
        messages: [] as MessageData[],
        chatRef: null as VNodeRef | null,
    }),
    actions: {
        setMessages(messages: any) {
            this.messages = messages
        },
        pushMessages(message: MessageData) {
            this.messages.push(message)
        },
        markSendedMessage(message: MessageData) {
            if (this.messages.length === 0 || this.messages === null) return
            if (this.messages[this.lastMessage].id === null) {
                this.messages[this.lastMessage] = message
                return
            }
            this.pushMessages(message)
        },
        send(form: Chat) {
            form.post(route('chat.store'))
            form.reset()
        },
        setChatRef(chatRef: HTMLElement) {
            this.chatRef = chatRef
        },
    },
    getters: {
        lastMessage(): number {
            return this.messages.length - 1
        },
    },
})

export default useChatStore
