<template>
    <div class="chat-room d-flex justify-space-between">
        <div>
            {{ selected.name }} Chat
        </div>
        <div>
            <v-select v-model="selected" @change="$emit('roomChanged',selected)" :items="rooms" :hint="`${selected.name}`"></v-select>
        </div>
    </div>
</template>

<script>
export default {
    props: ['rooms', 'currentRooms'],

    data() {
        return {
            selected: '',
        }
    },

    created() {
        this.selected = this.currentRooms;
    }
}
</script>