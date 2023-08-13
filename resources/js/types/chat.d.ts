import { InertiaForm } from '@inertiajs/vue3'

export type Chat = InertiaForm<{
    message: string
    user_id: number
}>

export interface MessageData {
    message: string
    user_id: number
    uuid: string
    id: ?number
    created_at: ?(string | number)
    updated_at: ?string
    user?: Sender
}

export interface Sender {
    id: number
    name: string
}
