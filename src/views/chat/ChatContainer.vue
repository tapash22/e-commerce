<template>
    <div class="chat">
        <v-container>
            <v-row>
                <h2 class="text-h2 text-center my-3">Chat</h2>
                <ChatRoom v-if="currentRoom.id" :rooms="chatRooms" :currentRooms="currentRoom"
                    :roomChanged="setRooms($event)" />
            </v-row>
            <v-row class="my-5">
                <h3>chat start</h3>
                <v-col cols="12" md="12" lg="12" sm="12">
                    <MessageContainer :messages="messages" />
                    <InputItem :room="currentRoom" :messagesent="getMessages" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
import MessageContainer from './MessageContainer.vue';
import InputItem from './InputItem.vue';
import ChatRoom from './ChatRoom.vue';
import Chat from '@/apis/Chat';

export default {
    data() {
        return {
            chatRooms: [],
            currentRoom: [],
            messages: [],
        }
    },
    watch:{
        currentRoom(val,oldVal){
            if(oldVal.id){
                this.disconnect(oldVal);
            }
            this.connect();
        }
    },

    methods: {
        connect() {
            if (this.currentRoom.id) {
                let vm = this;
                this.getMessages();
                window.Echo.private("chat." + this.currentRoom.id)
                    .listen('.message.new', e => {
                        vm.getMessages();
                        console.log(e);
                    })
            }
        },
        disconnect(room){
            window.Echo.leave("chat."+room.id)
        },

        getRooms() {
            Chat.all().then((response) => {
                this.chatRooms = response.data;
                this.setRooms(response.data[0]);
            }).catch(error => {
                console.log(error);
            })
        },

        setRooms(room) {
            this.currentRoom = room;

        },

        getMessages() {
            axios.get('/chat/room/' + this.currentRoom.id + '/messages').then(response => {
                this.messages = response.data;
            }).catch(error => {
                console.log(error);
            })
        }
    },

    created() {
        this.getRooms();
    },

    components: {
        MessageContainer,
        InputItem,
        ChatRoom
    },
}
</script>