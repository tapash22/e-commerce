<template>
    <button class="bg-red-700 w-24 h-12 text-rose-100 font-medium text-lg" @click="emitGlobalClickEvent()">{{ clickCount
    }}</button>
</template>
  
<script>
import { EventBus } from '@/event-bus';

export default {
    data() {
        return {
            clickCount: 0
        }
    },

    methods: {
        emitGlobalClickEvent() {
            this.clickCount +=2;
            EventBus.$emit('clicked', this.clickCount);
        }
    }
}
</script>