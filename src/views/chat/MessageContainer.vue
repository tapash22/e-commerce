<template>
    <div class="message-container">
        <div class="order-last order-md-first overflow-y-auto" width="100%" height="100px" >
            <div v-for="(message ,index) in messages" :key="index">
              <MessageItem :message="message" />
            </div>
        </div>
    </div>
</template>

<script>
import MessageItem from './MessageItem.vue';
export default {
    props:['messages'],

    components:{
        MessageItem,
    }
}
</script>