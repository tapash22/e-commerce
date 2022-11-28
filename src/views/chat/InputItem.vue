<template>
    <div class="input-item d-flex">
        <input type="text" class="form-control" v-model="message" @keyup.enter="sendMessage()" placeholder="write" />
        <button class="btn btn-primary" @click="sendMessage()">Send</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: ['room'],

    data() {
        return {
            message: ''
        }
    },

    methods: {
        sendMessage() {
            if (this.message == '') {
                return;
            }
            axios.post('/chat/room/' + this.room.id + '/message', { message: this.message }).then(response => {
                if (response.status == 201) {
                    this.message = '';
                    this.$emit('messagesent');
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }

}
</script>