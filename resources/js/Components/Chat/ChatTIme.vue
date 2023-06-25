<script setup lang="ts">
import moment from 'moment'

const { time } = defineProps({
    time: {
        type: [String],
        default: null,
    },
})

let formattedTime: string

// check if variable consist only number
if (/^[0-9]+$/.test(time)) {
    formattedTime = moment.unix(parseInt(time) / 1000).format('h:mm A')
} else {
    formattedTime = moment(time).format('h:mm A')
}
</script>
<template>
    <time class="mr-2 mt-2 text-sm font-medium text-gray-500">{{
        formattedTime
    }}</time>
</template>
