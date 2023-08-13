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
            if (message.message?.length > 0 && message.message != null) {
                this.messages.push(message)
            }
        },
        markSendedMessage(message: MessageData) {
            this.messages.forEach((chat, index) => {
                if (chat.uuid == message.uuid) {
                    this.messages[index] = message
                }
            })

            if (this.messages[this.lastMessage].uuid != message.uuid) {
                this.pushMessages(message)
            }
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
