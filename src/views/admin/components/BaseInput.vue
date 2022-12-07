<template>
    <div class="base-input w-64">
        <div class="form-group">

            <label for="child-input" class="my-2 text-lg" ></label>
            <input id="child-input" class="form-control" type="text" :name="employe" v-model="childMessage" v-on:keyup="emitToParent">
        </div>
        <!-- <button type="button" name="button" v-on:click="$emit('increment')">Click me to increment!</button> -->

        <!-- set a variable then trigger a method which calls `$emit()` -->

    </div>
</template>

<script>
export default {
    props: ['employe'],
    data() {
        return {
            name1: 'paul',
            childMessage: '',
            forms:{},

        }

    },
    computed: {
        user() {
            return this.form;
        },
        getLebel() {
            return this.label.toUpperCase();
        }

    },
    methods: {
        onClick() {
            this.$emit('getName', this.name1);
        },
        emitToParent() {
            this.$emit('childToParent', this.childMessage)
        }
    }
}
</script>